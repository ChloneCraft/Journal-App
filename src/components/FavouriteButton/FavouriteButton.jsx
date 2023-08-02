import { useState } from 'react';
import star from '../../public/star.svg';
import starFilled from '../../public/star-filled.svg';
import './FavouriteButton.css';

export default function FavouriteButton({
  onToggleFavourite,
  isFavourite,
  id,
}) {
  return (
    <button className="favouriteButton" onClick={() => onToggleFavourite(id)}>
      {isFavourite ? <img src={starFilled} /> : <img src={star} />}
    </button>
  );
}
