GoogleSearchEngine = function(cx, apiKey){
    // Search through Google using a Custom Search Engine and an API key

    var _requestUri = "https://www.googleapis.com/customsearch/v1?searchType=image&cx=" + cx + "&key=" + apiKey + "&";
    var _paramString = "";

    // Private functions
    var getGoogle = function(url, callback){
        var searchRequest = new XMLHttpRequest();
        searchRequest.onload = function(){
            callback(this.responseText);
        };
        searchRequest.open("get", url);
        searchRequest.send();
    };

    var init = function(cseId, apiId){
        // C'tor
        if (!cx) {
            throw "Invalid parameter 'cx': " + cx;
        }
        else if (!apiKey) {
            throw "Invalid parameter 'apiKey': " + apiKey;
        }
        else {
            _requestUri = "https://www.googleapis.com/customsearch/v1?searchType=image&cx=" + cx + "&key=" + apiKey + "&";
        }
    };

    // Public methods
    this.query = function(options){
        _paramString = "q=" + options.query;
        getGoogle(_requestUri + _paramString, function(responseText){
            var items = [];
            try {
                items = JSON.parse(responseText).items;
            } catch(e) {
                items = [];
            }

            if (typeof(options.callback) === "function"){
                options.callback(items);
            }
            else {
                console.log("got", items.length, "results. No callback defined.");
            }
        });
    };

    init(cx, apiKey); // initialize
};