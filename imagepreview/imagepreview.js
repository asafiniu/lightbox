ImagePreview = (function(){
    // TODO: Describe

    this.author = "Asaf Nachmany";
    this.version = "1.0";

    var _modalId = "wrapper";
    var _wrapper = null;
    var _options = {
        src:"",
        thumbnail:null,
        width:"",
        height:"",
        cssClass:"",
        beforeOpen:function(){
            /* right before it's visible on screen */
        },
        afterOpen:function(){
            /* when all is loaded */
        },
        beforeClose:function(){
            /* right before it disappears from the screen */
        },
        afterClose:function(){
            /* when all is removed */
        }
    };

    var setPrevNext = function(){
        _options.cssClass = _options.cssClass.replace(/hasPrev|hasNext/g, "");
        var prev = _options.thumbnail.previousSibling;
        var prevImg = prev && prev.getElementsByTagName && prev.getElementsByTagName("img");
        if ( prev && prevImg && prevImg.length ) {
            _options.prev = function(){
                _options.src = _wrapper.getElementsByTagName("img")[0].src = prevImg[0].getAttribute('original-src');
                _options.thumbnail = prev;
                setPrevNext();
            };

            _options.cssClass += " hasPrev";
        }

        var next = _options.thumbnail.nextSibling;
        var nextImg = next && next.getElementsByTagName && next.getElementsByTagName("img");
        if ( next && nextImg && nextImg.length ) {
            _options.next = function(){
                _options.src = _wrapper.getElementsByTagName("img")[0].src = nextImg[0].getAttribute('original-src');
                _options.thumbnail = next;
                setPrevNext();
            };

            _options.cssClass += " hasNext";
        }

        if ( _wrapper ) {
            var content = _wrapper.getElementsByTagName("div")[0];
            content.className = "modal-content " + _options.cssClass;
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
        wrapper.id = _modalId;
        wrapper.className = "modal-wrapper";
        wrapper.onclick = function(e){
            if ( null !== e.target.className.match(/modal-wrapper/) ) {
                ImagePreview.close();
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
            close.innerHTML = "X";
            close.onclick = ImagePreview.close;
            header.appendChild(close);

            // The image title
            var title = document.createElement("div");
            title.id = "title";
            var a = document.createElement("a");
            a.href = _options.src;
            a.target = "_blank";
            a.innerText = _options.title + ">"; // TODO: better display?
            title.appendChild(a);
            header.appendChild(title);

        content.appendChild(header);



        // Divider
        content.appendChild(document.createElement("hr"));

        // Body
        var body = document.createElement("div");
        body.id = "body";

            // The image itself
            var img = document.createElement("img");
            img.id = "modalimage";
            img.src = _options.src;
            body.appendChild(img);

        content.appendChild(body);

        // Divider
        content.appendChild(document.createElement("hr"));

        // Footer
        var footer = document.createElement("div");
        footer.id = "footer";

            // Prev/Next links
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
            footer.appendChild(prevNext);

        content.appendChild(footer);

        // The whole thing
        wrapper.appendChild(content)

        return wrapper;
    };

    this.open = function(opts){
        _options.extend(opts);
        setPrevNext();
        _wrapper = getModal();
        if ( typeof(_options.beforeOpen) === "function" ) {
            _options.beforeOpen(_wrapper);
        }

        document.body.appendChild(_wrapper);
        _wrapper = document.getElementById(_modalId);
        if ( typeof(_options.afterOpen) === "function" ) {
            _options.afterOpen(_wrapper);
        }
    };

    this.close = function(){
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

    return this;
})();