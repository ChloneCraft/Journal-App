// import { useState } from 'react';
import Card from '../Card/Card.jsx';
import './Entries.css';

// eslint-disable-next-line react/prop-types
export default function Entries({ entries, onToggleFavourite }) {
  return (
    <div>
      {entries.map((entry) => {
        return (
          <div key={entry.id}>
            <Card
              motto={entry.motto}
              notes={entry.notes}
              date={entry.date}
              onToggleFavourite={onToggleFavourite}
              id={entry.id}
              isFavourite={entry.isFavourite}
            />
            {!(entries.indexOf(entry) === entries.length - 1) && (
              <span className="seperator"></span>
            )}
          </div>
        );
      })}
    </div>
  );
}
