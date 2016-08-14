// Object
Object.prototype.extend = function(obj) {
   for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
         this[i] = obj[i];
      }
   }
};

// Array
Array.prototype.first = function() {
    return this.length && this[0];
};

// Element
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
};
Element.prototype.find = function(id) {
    var result = null;
    for (var i = this.children.length - 1; i >= 0 && !result; i--) {
      if ( this.children[i].id === id ) {
        result = this.children[i];
      }
      else {
        result = this.children[i].find(id);
      }
    }
    return result;
};

// NodeList
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};
NodeList.prototype.find = HTMLCollection.prototype.find = function(id) {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].id === id) {
            return this[i];
        }
    }
};