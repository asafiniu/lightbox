GoogleSearchEngine = function(cx, apiKey){
    //
    // Search through Google using a Custom Search Engine and an API key

    var _requestUri = "";
    var _paramString = "";
    var _params = { q: "", searchType: "" };
    var _options = { query: "", searchType: "images" };
    var getGoogle = function(url, callback){
        var searchRequest = new XMLHttpRequest();
        searchRequest.onreadystatechange = function (e) {
            if (searchRequest.readyState === 4) {
                callback(searchRequest.status === 200, searchRequest.responseText);
            }
        };
        searchRequest.open("get", url);
        searchRequest.send();
    };

    var getParamString = function(){
        _params["q"] = _options.query;
        _params["searchType"] = _options.searchType;
        for(var p in _params){
            if ( typeof(_params[p]) === "string" ) {
                if ( _paramString ) {
                    _paramString += "&";
                }

                _paramString += p + "=" + _params[p]
            }
        }

        return _paramString;
    };

    var init = function(cseId, apiId){
        if (!cx) {
            throw "Invalid parameter \"cx\": " + cx;
        }
        else if (!apiKey) {
            throw "Invalid parameter \"apiKey\": " + apiKey;
        }
        else {
            _requestUri = "https://www.googleapis.com/customsearch/v1?cx=" + cx + "&key=" + apiKey + "&";
        }
    };

    this.query = function(options){
        _options.extend(options);
        getGoogle(_requestUri + getParamString(), function(ok, responseText){
            var response = {errors:[], data:[]};
            try {
                var googleResponse = JSON.parse(responseText);
                if ( ok ) {
                    response.data = googleResponse.items;
                }
                else {
                    response.errors.push(googleResponse.error.message);
                }
            } catch(e) {
                response.data = [];
                response.errors.push(e);
            }

            response.data = response.data.map(function(image){
                return {
                    title: image.title,
                    src_thumb: image.image.thumbnailLink,
                    src: image.link,
                    width: image.image.width,
                    height: image.image.height
                };
            });

            if (typeof(options.callback) === "function"){
                options.callback(response);
            }
        });
    };

    init(cx, apiKey);
};