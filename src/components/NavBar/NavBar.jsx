import './NavBar.css';

export default function NavBar() {
  const output = (
    <nav>
      <div>
        <h2 className="active">All Entries</h2>
        <p className="AllEntriesCounter active">3</p>
      </div>
      <div>
        <h2>Favourites</h2>
        <p className="AllEntriesCounter ">1</p>
      </div>
    </nav>
  );
  return output;
}
