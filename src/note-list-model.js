class NoteList {
  constructor() {
    this.notes = [];
  }

  addNewNote(note) {
    let newNote = new Note(note);
    this.notes.push(newNote.returnNote());
  }

  returnNotes() {
    return this.notes;
  }
}
