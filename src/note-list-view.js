class NoteListView {
  constructor(noteList) {
    this.noteList = noteList
  }

  htmlList() {
    let notes = this.noteList;

    if (notes.length === 0 || notes === null) return '<ul><li><div><div><li><ul>';

    if (notes.length === 1) return `<ul><li><div>${notes}<div><li><ul>`;

    else {
      notes.map(note =>{
        return `<li><div>${note.text}</div></li>`
      })
    }
    return `<ul>${notes.join("")}</ul>`
  }
}
