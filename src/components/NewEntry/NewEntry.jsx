export default function NewEntry() {
  return (
    <section className="main__newEntryWrapper">
      <h2>NEW ENTRY</h2>
      <form className="main__newEntryWrapper__form">
        <div className="mottoInputWrapper">
          <label htmlFor="mottoInput">Motto</label>
          <input type="text" id="mottoInput" name="mottoInput" />
        </div>
        <div className="NotesInputWrapper">
          <label htmlFor="notesInput">Notes</label>
          <input type="text" id="notesInput" name="notesInput" />
        </div>
        <button type="submit">Create</button>
      </form>
    </section>
  );
}
