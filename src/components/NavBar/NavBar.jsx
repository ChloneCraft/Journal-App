import './NavBar.css';

export default function NavBar({
  handleDisplayAll,
  handleDisplayFavourites,
  numberOfFavourites,
  entries,
}) {
  const output = (
    <nav>
      <div>
        <button className="active" onClick={handleDisplayAll}>
          All Entries
        </button>
        <p className="AllEntriesCounter active">{entries}</p>
      </div>
      <div>
        <button onClick={handleDisplayFavourites}>Favourites</button>
        <p className="AllEntriesCounter ">{numberOfFavourites}</p>
      </div>
    </nav>
  );
  return output;
}
