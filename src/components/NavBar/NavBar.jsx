import './NavBar.css';

export default function NavBar({ handleDisplayAll, handleDisplayFavourites }) {
  const output = (
    <nav>
      <div>
        <button className="active" onClick={() => handleDisplayAll()}>
          All Entries
        </button>
        <p className="AllEntriesCounter active">3</p>
      </div>
      <div>
        <button onClick={handleDisplayFavourites}>Favourites</button>
        <p className="AllEntriesCounter ">1</p>
      </div>
    </nav>
  );
  return output;
}
