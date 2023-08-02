import './Card.css';
import FavouriteButton from '../FavouriteButton/FavouriteButton.jsx';

// eslint-disable-next-line react/prop-types
export default function Card({ motto, notes, date }) {
  return (
    <>
      <h3 className="date">{date}</h3>
      <div className="cardMottoWrapper">
        <h2 className="motto">{motto}</h2>
        <FavouriteButton />
      </div>
      <p className="notes">{notes}</p>
    </>
  );
}
