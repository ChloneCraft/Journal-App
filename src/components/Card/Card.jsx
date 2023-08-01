import './Card.css';
import FavouriteButton from '../FavouriteButton/FavouriteButton.jsx';

export default function Card({ motto, notes }) {
  console.log('motto, notes ', motto, notes);
  return (
    <>
      <h3>put date in here</h3>
      <div className="cardMottoWrapper">
        <h2>{motto}</h2>
        <FavouriteButton />
      </div>
      <p>{notes}</p>
    </>
  );
}
