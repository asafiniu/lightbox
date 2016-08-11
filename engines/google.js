GoogleSearchEngine = function(cx, apiKey){
    // Search through Google using a Custom Search Engine and an API key

    var _example = {
 "kind": "customsearch#search",
 "url": {
  "type": "application/json",
  "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&cref={cref?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
 },
 "queries": {
  "request": [
   {
    "title": "Google Custom Search - flower",
    "totalResults": "2",
    "searchTerms": "flower",
    "count": 2,
    "startIndex": 1,
    "inputEncoding": "utf8",
    "outputEncoding": "utf8",
    "safe": "off",
    "cx": "006788635243508668146:f0e7orztwgs",
    "searchType": "image"
   }
  ]
 },
 "context": {
  "title": "asaf's search engine"
 },
 "searchInformation": {
  "searchTime": 0.830175,
  "formattedSearchTime": "0.83",
  "totalResults": "2",
  "formattedTotalResults": "2"
 },
 "items": [
  {
   "kind": "customsearch#result",
   "title": "Free Stock Photo: Spring Flowers - The Shutterstock Blog",
   "htmlTitle": "Free Stock Photo: Spring <b>Flowers</b> - The Shutterstock Blog",
   "link": "http://www.shutterstock.com/blog/wp-content/uploads/sites/5/2010/05/free_flowers_shutterstock_13325443_web.jpg",
   "displayLink": "www.shutterstock.com",
   "snippet": "... Photo: Spring Flowers",
   "htmlSnippet": "... Photo: Spring <b>Flowers</b>",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "http://www.shutterstock.com/blog/2010/05/free-stock-photo-spring-flowers/",
    "height": 452,
    "width": 714,
    "byteSize": 153696,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnK38J6gmaQw_-mjVIbCOhFL84ZGDK-EKX5bQdNx-tdglcE8TshvniWMpD",
    "thumbnailHeight": 89,
    "thumbnailWidth": 140
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Drop Dead Gorgeous: 8 of the World's Most Poisonous Flowers - The ...",
   "htmlTitle": "Drop Dead Gorgeous: 8 of the World&#39;s Most Poisonous <b>Flowers</b> - The ...",
   "link": "http://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/04/flowers.jpg",
   "displayLink": "www.shutterstock.com",
   "snippet": "flowers",
   "htmlSnippet": "<b>flowers</b>",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "http://www.shutterstock.com/blog/drop-dead-gorgeous-8-of-the-worlds-most-poisonous-flowers",
    "height": 281,
    "width": 750,
    "byteSize": 213232,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVcRV1KaRrQXyVJHufLrF25PnjkpbxSqnuH1OU88yXIiXXvaeDIl6YAzlq",
    "thumbnailHeight": 53,
    "thumbnailWidth": 141
   }
  }
 ]
};
    var _requestUri = "";
    var _paramString = "";
    var _params = {
        q: "",
        searchType: "",
        number: "",
        start: ""
    };
    var _options = {
        query: "",
        searchType: "images"
    };

    // Private functions
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
        _params["number"] = _options.number || 10;
        _params["start"] = _options.start || 0;
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
        // C'tor
        if (!cx) {
            throw "Invalid parameter 'cx': " + cx;
        }
        else if (!apiKey) {
            throw "Invalid parameter 'apiKey': " + apiKey;
        }
        else {
            _requestUri = "https://www.googleapis.com/customsearch/v1?cx=" + cx + "&key=" + apiKey + "&";
        }
    };

    // Public methods
    this.query = function(options){
        _options.extend(options);
        if ( _example ) {
            return options.callback({data: _example.items, errors: []});
        }

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

            if (typeof(options.callback) === "function"){
                options.callback(response);
            }
        });
    };

    init(cx, apiKey); // initialize
};