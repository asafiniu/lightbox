(function(){
    var showMessage = function(msg){
        alert(msg);
    };

    var getImages = function(cbk){
        var goog = new GoogleSearchEngine('006788635243508668146:f0e7orztwgs', 'AIzaSyAaZ4dqB21xxTtdB94ZLxZoI4_Xw5GzUnE');
        goog.query({
            query: "slack",
            callback: function(items) {
                var images = [];
                items = items || [];
                for (var i = 0; i < items.length; i++) {
                    images.push(items[i].image);
                }

                cbk(images);
            }
        });
    };

    // Window events
    window.onload = function(e){
        getImages(function(images){
            for (var i = 0; i < images.length; i++) {
                var img = document.createElement("img");
                img.src = images[i].thumbnailLink;
                document.body.appendChild(img);
            }
        });
    };
})();