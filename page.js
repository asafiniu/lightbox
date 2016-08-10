(function(){
    var urlRegex = new RegExp("(http|https)://([a-zA-Z\.\?\=\/].+)?");
    var showMessage = function(msg){
        var message = document.createElement("div");
        message.id = "error";
        var link = urlRegex.exec(msg);
        if ( link && link.length ) {
            msg = msg.replace(link[0], "<a href=\"" + link[0] + "\" target=\"_blank\">" + link[0] + "</a>");
        }

        message.innerHTML = msg.replace(/\n/g, "<br>");
        document.body.appendChild(message);
    };

    var _start = 0;
    var _number = 10;

    var getImages = function(cbk){
        var goog = new GoogleSearchEngine('006788635243508668146:f0e7orztwgs', 'AIzaSyAaZ4dqB21xxTtdB94ZLxZoI4_Xw5GzUnE');
        goog.query({
            query: "slack",
            searchType: "image",
            start: _start,
            number: _number,
            callback: function(response) {
                var images = [];
                if (response.errors && response.errors.length) {
                    showMessage("Could not get images from google API:\n" + response.errors.join("\n"));
                } else {
                    images = response.data;
                }

                if (typeof(cbk) === "function") {
                    cbk(images);
                }
            }
        });
    };

    var preloadImage = function(src){
        // For faster load-times
        setTimeout(function(){
            var img = document.createElement("img");
            img.src = src;
            img.onload = function(){ this.remove() };
            img.style = "display:none";
            document.body.appendChild(img);
        }, 10);
    };

    var showThumbnails = function(thumbnails){
        var slider = document.getElementById("images");
        for (var i = thumbnails.length - 1; i >= 0; i--) {
            var frame = document.createElement("div");
            var thumb = document.createElement("img");
            frame.className = "thumbnail-frame";
            thumb.src = thumbnails[i].image.thumbnailLink;
            thumb.setAttribute('original-src', thumbnails[i].link);
            preloadImage(thumbnails[i].link);
            frame.appendChild(thumb);
            frame.onclick = function(e){
                ImagePreview.open({
                    src:this.getElementsByTagName('img')[0].getAttribute('original-src'),
                    thumbnail:this,
                    cssClass:"image-preview",
                    afterOpen:function(){},
                    afterClose:function(){}
                });
            };
            slider.appendChild(frame);
        }
    };

    var loadImages = function(){
        var gallery = document.getElementById("images");
        gallery.className = "loading";
        getImages(function(images){
            if ( images && images.length ) {
                showThumbnails(images);
            }
            else {
                gallery.className = "empty";
            }

            gallery.className = gallery.className.replace(/loading/g, "");
        });
    };

    // Window events
    window.onload = function(e){
        loadImages();
    };
})();