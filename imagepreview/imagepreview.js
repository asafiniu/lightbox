ImagePreview = (function(){
    //
    // ImagePreview creates modals that display images

    function ImagePreviewInstance(opts){
        //
        // ImagePreviewInstance is a modal display for an image

        var _wrapper = null; // the instance
        var _image = null; // the image element
        var _title = null; // the image's title
        var _options = {};

        var transitionTo = function(image){
            _options.src = image.getAttribute(_options.attributes.src);
            _options.title = image.alt;
            _image.src = _options.src;
            _newtab.href = _options.src;
            _title.innerText = _options.title;
        };

        var setSiblingImage = function(sibling, direction){
            var target = sibling && sibling.getElementsByTagName && sibling.getElementsByTagName("img");
            if ( sibling && target && target.length ) {
                _options[direction] = function(){
                    transitionTo(target[0])
                    _options.thumbnail = sibling;
                    setPrevNext();
                };

                _options.cssClass += " has" + direction;
            }
        };

        var setPrevNext = function(){
            _options.cssClass = _options.cssClass.replace(/ has(prev|next)/g, "");
            if ( _options.thumbnail ) {
                setSiblingImage(_options.thumbnail.previousSibling, "prev");
                setSiblingImage(_options.thumbnail.nextSibling, "next");
            }

            if ( _wrapper ) {
                var content = _wrapper.getElementsByClassName("modal-content")[0];
                content.className = ("modal-content " + _options.cssClass);
                var prevNext = content.find("prevnext");
                if ( _options.next ) {
                    prevNext.find("next").onclick = _options.next;
                }
                if ( _options.prev ) {
                    prevNext.find("prev").onclick = _options.prev;
                }
            }
        };

        var getModal = function(){
            var wrapper = document.createElement("div");
            wrapper.id = _options.id;
            wrapper.className = "modal-wrapper";
            wrapper.onclick = function(e){
                if ( null !== e.target.className.match(/modal-wrapper/) ) {
                    closeModal();
                }
            };

            var content = document.createElement("div");
            content.id = "content";
            content.className = "modal-content " + _options.cssClass;

            // Header
            var header = document.createElement("div");
                header.id = "header";

                // A close button
                var close = document.createElement("a");
                close.id = "close";
                var span = document.createElement("span");
                span.className = "close-bg";
                span.innerText = "X";
                close.appendChild(span);
                close.onclick = closeModal;
                header.appendChild(close);

                // Open image in new tab
                var newtab = document.createElement("a");
                newtab.id = "newtab";
                newtab.innerText = "Open image in new tab";
                newtab.href = _options.src;
                newtab.target = "_blank";
                header.appendChild(newtab);

                // The image title
                var title = document.createElement("div");
                title.id = "title";
                var h1 = document.createElement("h1");
                h1.id = "thetitle";
                h1.innerHTML = _options.title;
                title.appendChild(h1);
                header.appendChild(title);

            content.appendChild(header);

            // Body
            var body = document.createElement("div");
            body.id = "body";

                // The image itself
                var imgholder = document.createElement("div");
                imgholder.className = "image-holder";
                var span = document.createElement("span");
                imgholder.appendChild(span);
                var img = document.createElement("img");
                img.id = "theimage";
                img.src = _options.src;
                imgholder.appendChild(img);

                var prevNext = document.createElement("div");
                prevNext.id = "prevnext";
                var prevLink = document.createElement("a");
                prevLink.id = "prev";
                prevLink.innerText = "<";
                prevLink.href = "javascript:void(0);";
                if ( _options.prev ){
                    prevLink.onclick = function(e){ e.stopPropagation(); _options.prev() };
                }
                var nextLink = document.createElement("a");
                nextLink.id = "next";
                nextLink.innerText = ">";
                nextLink.href = "javascript:void(0);";
                if ( _options.next ){
                    nextLink.onclick = function(e){ e.stopPropagation(); _options.next() };
                }
                prevNext.appendChild(prevLink);
                prevNext.appendChild(nextLink);
                imgholder.appendChild(prevNext);

                body.appendChild(imgholder);

            content.appendChild(body);

            // The whole thing
            wrapper.appendChild(content);

            return wrapper;
        };

        var closeModal = function(){
            if ( _wrapper ) {
                if ( typeof(_options.beforeClose) === "function" ) {
                    _options.beforeClose(_wrapper);
                }

                _wrapper.remove();

                if ( typeof(_options.afterClose) === "function" ) {
                    _options.afterClose();
                }
            }
        };

        var KEYS = {ESC:27, RIGHT:39, LEFT:37};
        var init = function(){
            setPrevNext();
            _wrapper = getModal();
            if ( typeof(_options.beforeOpen) === "function" ) {
                _options.beforeOpen(_wrapper);
            }

            document.body.appendChild(_wrapper);
            _wrapper = document.getElementById(_options.id);
            _image = _wrapper.find("theimage");
            _title = _wrapper.find("thetitle");
            _newtab = _wrapper.find("newtab");
            if ( typeof(_options.afterOpen) === "function" ) {
                _options.afterOpen(_wrapper);
            }

            document.onkeyup = function(e){
                if ( e.which === KEYS.ESC ) {
                    closeModal();
                }
                else if ( e.which === KEYS.RIGHT ) {
                    if ( typeof(_options.next) === "function" ) {
                        _options.next();
                    }
                }
                else if ( e.which === KEYS.LEFT ) {
                    if ( typeof(_options.prev) === "function" ) {
                        _options.prev();
                    }
                }
            };
        };

        _options.extend(opts);
        init();

        return { // Public methods
            close: closeModal
        };
    };

    var itemsCreated = 0;
    return { // Public methods
        open: function(opts) {
            opts.id = "wrapper" + (itemsCreated++); // assign unique id
            return new ImagePreviewInstance(opts);
        }
    };
})();