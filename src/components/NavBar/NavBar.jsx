export default function NavBar() {
  const output = (
    <nav>
      <div>
        <h2>All Entries</h2>
        <p className="AllEntriesCounter"></p>
      </div>
      <div>
        <h2>Favourites</h2>
        <p className="AllEntriesCounter"></p>
      </div>
    </nav>
  );
  return output;
}
