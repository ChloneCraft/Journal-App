import './Card.css';
import FavouriteButton from '../FavouriteButton';

export default function Card() {
  return (
    <>
      <h3>put date in here</h3>
      <div className="cardMottoWrapper">
        <h2>motto</h2>
        <FavouriteButton />
      </div>
      <p>notes</p>
    </>
  );
}
