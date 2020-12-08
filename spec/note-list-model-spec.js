function testNewNoteIsListed() {
  let noteList = new NoteList();
  noteList.addNewNote("Hello world")
  assert.isEqual(noteList.notes .length, 1)
}

testNewNoteIsListed()
