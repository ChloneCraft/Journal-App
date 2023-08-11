// import { useState } from 'react';
import Card from '../Card/Card.jsx';
import './Entries.css';

// eslint-disable-next-line react/prop-types
export default function Entries({
  entries,
  onToggleFavourite,
  showFavourites,
}) {
  const allEntries = (
    <section>
      {entries.map((entry) => {
        return (
          <article key={entry.id}>
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
          </article>
        );
      })}
    </section>
  );
  let favouriteEntriesOutput;
  favouriteEntriesOutput = entries.filter((entry) => entry.isFavourite);
  if (favouriteEntriesOutput) {
    favouriteEntriesOutput = (
      <section>
        {favouriteEntriesOutput.map((entry) => {
          return (
            <article key={entry.id}>
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
            </article>
          );
        })}
      </section>
    );
  }
  // return showFavourites
  //   ? console.log('show favourite as true')
  //   : console.log('show favourite as false');
  return showFavourites ? favouriteEntriesOutput : allEntries;
}
