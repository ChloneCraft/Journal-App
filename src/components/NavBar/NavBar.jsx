import './NavBar.css';

export default function NavBar() {
  const output = (
    <nav>
      <div>
        <button className="active" onClick={onclick}>
          All Entries
        </button>
        <p className="AllEntriesCounter active">3</p>
      </div>
      <div>
        <button>Favourites</button>
        <p className="AllEntriesCounter " onClick={onclick}>
          1
        </p>
      </div>
    </nav>
  );
  return output;
}
