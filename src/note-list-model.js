class NoteList {
  constructor() {
    this.notes = []
  }

  addNewNote(note) {
    let newNote = new NoteList(note)
    this.notes.push(newNote)
  }

  returnNotes() {
    this.notes
  }
}