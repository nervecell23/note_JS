(function(exports){
    function NotesListView(notelist) {
            this.notelist = notelist
        };

        NotesListView.prototype.view = function(){
         var start = "<ul>"
         var end = "</ul>" 
         if (this.notelist.noteArray.length == 0) {
             return "<div>No Notes</div>";
         } else {
         var content = this.notelist.noteArray.map(function(note){return "<li><div>" + note.text + "</div></li>"});
         content = content.reduce((a, b) => a + b, "");
         return (start + content + end);
         }
        };

        exports.NotesListView = NotesListView;
    })(this);