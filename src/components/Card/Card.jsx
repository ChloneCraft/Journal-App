import './Card.css';
import FavouriteButton from '../FavouriteButton/FavouriteButton.jsx';

// eslint-disable-next-line react/prop-types
export default function Card({
  motto,
  notes,
  date,
  onToggleFavourite,
  isFavourite,
  id,
}) {
  return (
    <>
      <h3 className="date">{date}</h3>
      <div className="cardMottoWrapper">
        <h2 className="motto">{motto}</h2>
        <FavouriteButton
          onToggleFavourite={onToggleFavourite}
          isFavourite={isFavourite}
          id={id}
        />
      </div>
      <p className="notes">{notes}</p>
    </>
  );
}
