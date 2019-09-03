(function(exports){
    function NotesList() {
            this.note = []
        };

        NotesList.prototype.create = function(text){
          this.note.push(new Note(text))
        };

        NotesList.prototype.list = function() {
            // this.notes.forEach(function(item){
            //         console.log(item);
            return this.note
        }
        exports.NotesList = NotesList;
    })(this);