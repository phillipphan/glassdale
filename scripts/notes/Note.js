export const NoteHTMLConverter = (noteObject, criminal) => {
  return `
      <section class="note">
        <div class="note__author">Author: ${ noteObject.author }</div>
        <div class="note__suspect">Suspect: ${ criminal.name }</div>
        <div class="note__timestamp">Timestamp: ${ new Date(noteObject.timestamp).toLocaleDateString('en-US')  }</div><br>
        <div class="note__text">${ noteObject.text }</div>
        <button id="deleteNote--${noteObject.id}">Delete</button>
      </section>
  `
}