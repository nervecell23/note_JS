(function(exports) {
    
    function Note(text) {

       this.text = text;

    }

    Note.prototype.view = function(string) {
      return this.text;
    };
  
    // Notes.prototype.print = function() {
    //     notes.forEach(function(item){
    //     console.log(item);
    //   });
    // };
    exports.Note = Note;
})(this);
