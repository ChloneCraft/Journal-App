import { useState } from 'react';
import { StarFilled } from '../StarFilled';
import { Star } from '../Star';

export default function FavouriteButton() {
  const [isFavorite, setFavourite] = useState(false);
  return (
    <button
      className="favouriteButton"
      onClick={() => setFavourite(!isFavorite)}
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
