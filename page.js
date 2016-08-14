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
        var goog = new GoogleSearchEngine("006788635243508668146:f0e7orztwgs", "AIzaSyAaZ4dqB21xxTtdB94ZLxZoI4_Xw5GzUnE");
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

    var getThumbnail = function(tn) {
        var thumb = document.createElement("div");
        thumb.className = "thumbnail-frame";
        var span = document.createElement("span");
        thumb.appendChild(span);
        var img = document.createElement("img");
        img.alt = tn.title;
        img.src = tn.src_thumb;
        img.setAttribute("data-src", tn.src);
        img.setAttribute("data-width", tn.width);
        img.setAttribute("data-height", tn.height);
        thumb.appendChild(img);
        thumb.onclick = function(e){
            e.stopPropagation();
            var img = this.getElementsByTagName("img")[0];
            var atts = {
                src: "data-src",
                width: "data-width",
                height: "data-height"
            };
            ImagePreview.open({
                attributes: atts,
                title:img.alt,
                src:img.getAttribute(atts.src),
                width:img.getAttribute(atts.width),
                height:img.getAttribute(atts.height),
                thumbnail:this,
                cssClass:"image-preview"
            });
        };

        return thumb;
    };

    var loadImages = function(){
        var gallery = document.getElementById("images");
        gallery.className = "loading";
        getImages(function(images){
            if ( images && images.length ) {
                for (var i = images.length - 1; i >= 0; i--) {
                    preloadImage(images[i].src_thumb);
                    preloadImage(images[i].src);
                    gallery.appendChild(getThumbnail(images[i]));
                }
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