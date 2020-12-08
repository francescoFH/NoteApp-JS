const { Note } = require('../src/note');
const {
  describe, expect, it, matchers,
} = require('./testFramework');

describe('#constructor', () => {
  it('sets the value of the text to what we pass in', () => {
    const note = new Note('this is my note');
    expect(note.showText()).toBe('this is my note');
  });
});
