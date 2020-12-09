class noteController {

  constructor(){
    let noteList = new NoteList()
    noteList.addNewNote("Favourite drink: seltzer");
    noteList.addNewNote("Favourite drink: negroni");
    noteList.addNewNote("Favourite drink: sazerac");
    this.noteListView = new NoteListView(noteList.returnNotes());
  }

  notes(){
    return this.noteListView.html()
  }
}

let noteList = new noteController()
document.getElementById('app').innerHTML = noteList.notes();
