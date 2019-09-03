(function(exports){
    function NotesListView(notelist) {
            this.notelist = notelist
        };

        NotesList.prototype.view = function(){
            // <ul>
          this.notelist.noteArray.map(function(note){return "<li><div>" + note.text + "</div></li>")
        //   </ul>
        };

       
        exports.NotesListView = NotesListView;
    })(this);