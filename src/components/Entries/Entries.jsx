// import { useState } from 'react';
import Card from '../Card/Card.jsx';
import './Entries.css';

export default function Entries(entries) {
  return (
    <div>
      {entries.map((entry) => (
        <>
          <Card
            key={entry.id}
            motto={entry.motto}
            notes={entry.notes}
            date={entry.date}
          />
          <span className="seperator"></span>
        </>
      ))}
    </div>
  );
}
