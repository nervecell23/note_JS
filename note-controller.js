document.getElementById("app").innerHTML = "changed message";

(function(exports){
  function Controller(notesList){
    this.notesList = notesList;
    this.notesList.create("Favourite drink: seltzer");

    var notesListView = new NotesListView(this.notesList);

    Controller.prototype.render = function(){
      return notesListView.view();
    }
  }

  exports.Controller = Controller;
})(this);
