Lightbox = function(){
    // Private vars
    var _author = "Asaf Nachmany";
    var _version = "1.0";

    this.init = function(){
        // Initialize the lightbox
    };

    var _value = "";
    this.gettersetter = function(value){
        if ( value ) {
            _value = value;
        }

        return _value;
    };
};