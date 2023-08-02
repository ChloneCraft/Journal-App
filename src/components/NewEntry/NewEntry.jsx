import './newEntry.css';
// import { entriesArray } from '../Entries/Entries.jsx';

export default function NewEntry({ onCreateEntry }) {
  function handleCreate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data.mottoInput);

    onCreateEntry(data);
  }
  return (
    <section className="main__newEntryWrapper">
      <div className="main__newEntryWrapper__headline">
        <h2>NEW ENTRY</h2>
      </div>
      <form className="main__newEntryWrapper__form" onSubmit={handleCreate}>
        <div className="mottoInputWrapper">
          <label htmlFor="mottoInput">Motto</label>
          <input type="text" id="mottoInput" name="mottoInput" />
        </div>
        <div className="NotesInputWrapper">
          <label htmlFor="notesInput">Notes</label>
          <textarea id="notesInput" name="notesInput" rows="10" cols="30" />
        </div>
        <button type="submit" className="submitButton">
          Create
        </button>
      </form>
    </section>
  );
}
