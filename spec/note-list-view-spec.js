function testViewOneNote() {
  let noteList = new NoteList();
  noteList.addNewNote("Note test")

  let noteListView = new NoteListView(noteList.returnNotes());

  assert.isTrue(noteListView.htmlList(), '<ul><li><div>Note test<div><li><ul>')
}

function testViewNotes() {
  let noteList = new NoteList();
  noteList.addNewNote("Note test")
  noteList.addNewNote("Note test 2")

  let noteListView = new NoteListView(noteList.returnNotes());

  assert.isTrue(noteListView.htmlList(), '<ul><li><div>Note test<div><li> <li><div>Note test 2<div><li><ul>')
}

testViewOneNote()
testViewNotes()
