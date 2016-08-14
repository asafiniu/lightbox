GoogleSearchEngine = function(cx, apiKey){
    // Search through Google using a Custom Search Engine and an API key

    var _example = {
        items: [{
            "kind": "customsearch#result",
            "title": "Do more faster: 4 ferramentas que irão ajudar a sua produtividade ...",
            "htmlTitle": "Do more faster: 4 ferramentas que irão ajudar a sua produtividade ...",
            "link": "http://www.shutterstock.com/pt/blog/wp-content/uploads/sites/4/2015/01/img2.png",
            "displayLink": "www.shutterstock.com",
            "snippet": "O Slack é um aplicativo que ...",
            "htmlSnippet": "O <b>Slack</b> é um aplicativo que ...",
            "mime": "image/png",
            "fileFormat": "Image Document",
            "image": {
                "contextLink": "http://www.shutterstock.com/pt/blog/do-more-faster-4-ferramentas-que-iro-ajudar-a-sua-produtividade",
                "height": 351,
                "width": 1000,
                "byteSize": 130982,
                "thumbnailLink": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8j94VmDFQDZUoc7M3rkyv4X216LsVebm2w5l_R4y44kfK7Le28h0ZrRg",
                "thumbnailHeight": 52,
                "thumbnailWidth": 149
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Do more faster: 4 ferramentas que irão ajudar a sua produtividade ...",
            "htmlTitle": "Do more faster: 4 ferramentas que irão ajudar a sua produtividade ...",
            "link": "http://www.shutterstock.com/pt/blog/wp-content/uploads/sites/4/2015/01/img7.jpg",
            "displayLink": "www.shutterstock.com",
            "snippet": "... do Slack na cultura da ...",
            "htmlSnippet": "... do <b>Slack</b> na cultura da ...",
            "mime": "image/jpeg",
            "image": {
                "contextLink": "http://www.shutterstock.com/pt/blog/do-more-faster-4-ferramentas-que-iro-ajudar-a-sua-produtividade",
                "height": 551,
                "width": 1000,
                "byteSize": 301635,
                "thumbnailLink": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxrI6nEMWKZhZUq0wEa0RoTPHT8v_5Z5yVK69qPscMYD_U7YVEii1bu_k",
                "thumbnailHeight": 82,
                "thumbnailWidth": 149
            }
        },
        {
            "kind": "customsearch#result",
            "title": "How Ad Agency Life Has Changed from the Golden Age to the Digital ...",
            "htmlTitle": "How Ad Agency Life Has Changed from the Golden Age to the Digital ...",
            "link": "http://www.shutterstock.com/blog/wp-content/uploads/sites/5/2016/07/mad-men-design-3.jpg",
            "displayLink": "www.shutterstock.com",
            "snippet": "mad-men-design-3. “",
            "htmlSnippet": "mad-men-design-3. “",
            "mime": "image/jpeg",
            "image": {
                "contextLink": "http://www.shutterstock.com/blog/ad-agency-life-changed-golden-age-digital-age",
                "height": 2711,
                "width": 2880,
                "byteSize": 1289418,
                "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfXXIsvwIitVIi61Gv9vk91_fFH9VocGVQKCmtqgBUYsE1Ntn90X5zcHJ",
                "thumbnailHeight": 141,
                "thumbnailWidth": 150
            }
        },
        {
            "kind": "customsearch#result",
            "title": "5 Common Grammar Mistakes to Avoid in Business Writing - The ...",
            "htmlTitle": "5 Common Grammar Mistakes to Avoid in Business Writing - The ...",
            "link": "http://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/05/Grammar-Revised-750x422.jpg",
            "displayLink": "www.shutterstock.com",
            "snippet": "Grammar-2",
            "htmlSnippet": "Grammar-2",
            "mime": "image/jpeg",
            "image": {
                "contextLink": "http://www.shutterstock.com/blog/5-common-grammar-mistakes-to-avoid-in-business-writing",
                "height": 422,
                "width": 750,
                "byteSize": 16906,
                "thumbnailLink": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTc5hKQeZxvcYnYupF1oqchw8oJIKeBUxgghwEkJ9XRXOVTkeC2Zwv0k1Y",
                "thumbnailHeight": 79,
                "thumbnailWidth": 141
            }
        },
        {
            "kind": "customsearch#result",
            "title": "How Ad Agency Life Has Changed from the Golden Age to the Digital ...",
            "htmlTitle": "How Ad Agency Life Has Changed from the Golden Age to the Digital ...",
            "link": "http://www.shutterstock.com/blog/wp-content/uploads/sites/5/2016/07/mad-men-design-header.jpg",
            "displayLink": "www.shutterstock.com",
            "snippet": "How Ad Agency Life Has Changed ...",
            "htmlSnippet": "How Ad Agency Life Has Changed ...",
            "mime": "image/jpeg",
            "image": {
                "contextLink": "http://www.shutterstock.com/blog/ad-agency-life-changed-golden-age-digital-age",
                "height": 580,
                "width": 1024,
                "byteSize": 230284,
                "thumbnailLink": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRXZQfFWfn9DkkM87iJHg8V-wul8G2xR8FTAUPaP8v8r2yC0NVysFUq8gY",
                "thumbnailHeight": 85,
                "thumbnailWidth": 150
            }
        },
        {
            "kind": "customsearch#result",
            "title": "5 Common Grammar Mistakes to Avoid in Business Writing - The ...",
            "htmlTitle": "5 Common Grammar Mistakes to Avoid in Business Writing - The ...",
            "link": "http://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/05/Grammar-3-01-copy-750x422.jpg",
            "displayLink": "www.shutterstock.com",
            "snippet": "Grammar Tip",
            "htmlSnippet": "Grammar Tip",
            "mime": "image/jpeg",
            "image": {
                "contextLink": "http://www.shutterstock.com/blog/5-common-grammar-mistakes-to-avoid-in-business-writing",
                "height": 422,
                "width": 750,
                "byteSize": 21948,
                "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2w45vdq2O4dPbGTO2DKD19Ymf3mD92DVohFNkvQ9evFojTiVkLz8Lnf1s",
                "thumbnailHeight": 79,
                "thumbnailWidth": 141
            }
        },
        {
            "kind": "customsearch#result",
            "title": "How Ad Agency Life Has Changed from the Golden Age to the Digital ...",
            "htmlTitle": "How Ad Agency Life Has Changed from the Golden Age to the Digital ...",
            "link": "http://www.shutterstock.com/blog/wp-content/uploads/sites/5/2016/07/mad-men-design-5.jpg",
            "displayLink": "www.shutterstock.com",
            "snippet": "mad-men-design-5. “",
            "htmlSnippet": "mad-men-design-5. “",
            "mime": "image/jpeg",
            "image": {
                "contextLink": "http://www.shutterstock.com/blog/ad-agency-life-changed-golden-age-digital-age",
                "height": 2711,
                "width": 2880,
                "byteSize": 1445096,
                "thumbnailLink": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTajEOw2NcTuLVfWp4r83Ury9ziuRygmAelXBn4yzEtqwMuL9KeCrglzE4-",
                "thumbnailHeight": 141,
                "thumbnailWidth": 150
            }
        },
        {
            "kind": "customsearch#result",
            "title": "How Ad Agency Life Has Changed from the Golden Age to the Digital ...",
            "htmlTitle": "How Ad Agency Life Has Changed from the Golden Age to the Digital ...",
            "link": "http://www.shutterstock.com/blog/wp-content/uploads/sites/5/2016/07/mad-men-design-4-1.jpg",
            "displayLink": "www.shutterstock.com",
            "snippet": "The Ad Biz, Then and Now",
            "htmlSnippet": "The Ad Biz, Then and Now",
            "mime": "image/jpeg",
            "image": {
                "contextLink": "http://www.shutterstock.com/blog/ad-agency-life-changed-golden-age-digital-age",
                "height": 2711,
                "width": 2880,
                "byteSize": 1516045,
                "thumbnailLink": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTkEnqkKTdBoaEZQF0wPVOvzJmaS1DpDErp67wZUpR-9GQ37Vmk4MIhpzfp",
                "thumbnailHeight": 141,
                "thumbnailWidth": 150
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Shutterstock Career Opportunities",
            "htmlTitle": "Shutterstock Career Opportunities",
            "link": "http://www.shutterstock.com/jobs/listings/assets/images/shutterstock_social.jpg",
            "displayLink": "www.shutterstock.com",
            "snippet": "Shutterstock Career ...",
            "htmlSnippet": "Shutterstock Career ...",
            "mime": "image/jpeg",
            "image": {
                "contextLink": "http://www.shutterstock.com/jobs/listings?gh_jid=216912",
                "height": 843,
                "width": 1280,
                "byteSize": 1107031,
                "thumbnailLink": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtlWZSUDHyTL6FuZNlaZjuDrzsUYvz4WwuezMKZ4Rbcumbb9ufbsesXR8",
                "thumbnailHeight": 99,
                "thumbnailWidth": 150
            }
        },
        {
            "kind": "customsearch#result",
            "title": "5 Common Grammar Mistakes to Avoid in Business Writing - The ...",
            "htmlTitle": "5 Common Grammar Mistakes to Avoid in Business Writing - The ...",
            "link": "http://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/05/Grammar-1-01-copy-750x422.jpg",
            "displayLink": "www.shutterstock.com",
            "snippet": "Grammar Tip. “",
            "htmlSnippet": "Grammar Tip. “",
            "mime": "image/jpeg",
            "image": {
                "contextLink": "http://www.shutterstock.com/blog/5-common-grammar-mistakes-to-avoid-in-business-writing",
                "height": 422,
                "width": 750,
                "byteSize": 12962,
                "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ovFXc56YObqfu7DNJPJjvgekpo17QVazQTfrH018RbrG39Flr64ZjcpF",
                "thumbnailHeight": 79,
                "thumbnailWidth": 141
            }
        }
    ]};
    var _requestUri = "";
    var _paramString = "";
    var _params = {
        q: "",
        searchType: ""
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
        // _params["number"] = _options.number || 10;
        // _params["start"] = _options.start || 0;
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
        // C"tor
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

    // Public methods
    this.query = function(options){
        _options.extend(options);
        if ( _example ) {
            return options.callback({data: _example.items.map(function(image){
                return {
                    title: image.title,
                    src_thumb: image.image.thumbnailLink,
                    src: image.link,
                    width: image.image.width,
                    height: image.image.height
                };
            }), errors: []});
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

    init(cx, apiKey); // initialize
};