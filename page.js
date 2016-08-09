(function(){
    var showMessage = function(msg){
        alert(msg);
    };

    var start = function(){
        var old = new Lightbox();
        var newb = new Lightbox();
        alert(old.gettersetter("someguy"));
        alert(newb.gettersetter("someguy2"));
    };

    // Window events
    window.onload = function(e){
        start();
    };
})();