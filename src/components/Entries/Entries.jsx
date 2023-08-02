// import { useState } from 'react';
import Card from '../Card/Card.jsx';
import './Entries.css';

// eslint-disable-next-line react/prop-types
export default function Entries({ entries }) {
  return (
    <div>
      {entries.map((entry) => {
        // console.log('indexOf:', !entries.indexOf(entry) === entries.length - 1);
        console.log('indexOf:', entries.indexOf(entry));

        console.log('entrieslength:', entries.length - 1);
        console.log(!(entries.indexOf(entry) === entries.length - 1));
        return (
          <div key={entry.id}>
            <Card motto={entry.motto} notes={entry.notes} date={entry.date} />
            {!(entries.indexOf(entry) === entries.length - 1) && (
              <span className="seperator"></span>
            )}
          </div>
        );
      })}
    </div>
  );
}
