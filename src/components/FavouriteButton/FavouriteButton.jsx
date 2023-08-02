import { useState } from 'react';
import star from '../../public/star.svg';
import starFilled from '../../public/star-filled.svg';
import './FavouriteButton.css';

export default function FavouriteButton() {
  const [isFavorite, setFavourite] = useState(false);
  return (
    <button
      className="favouriteButton"
      onClick={() => setFavourite(!isFavorite)}
    >
      {isFavorite ? <img src={starFilled} /> : <img src={star} />}
    </button>
  );
}
