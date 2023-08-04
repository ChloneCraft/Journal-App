import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import MainContainer from './components/Main/MainContainer.jsx';
import NewEntry from './components/NewEntry/NewEntry.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Entries from './components/Entries/Entries.jsx';
// import { entriesArray } from '../Entries/Entries.jsx';
import { useState } from 'react';
import { uid } from 'uid';
import useLocalStorageState from 'use-local-storage-state';

export const entriesArray = [
  {
    id: 1000,
    isFavourite: false,
    date: 'Feb 5, 2025',
    motto: 'We are in a state of chaos',
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    isFavourite: false,
    date: 'Feb 4, 2025',
    motto: 'Props, Props, Props',
    notes:
      'Today I learned about React Props. Mad props to everyone who understands this!',
  },
  {
    id: 998,
    isFavourite: false,
    date: 'Feb 3, 2025',
    motto: 'How to nest components online fast',
    notes:
      'Today I learned about React Components and how to nest them like a pro. Application design is so much fun!',
  },
  {
    id: 997,
    isFavourite: false,
    date: 'Feb 2, 2025',
    motto: "I'm a React Developer",
    notes: 'My React-ion when I learned about React: 😍',
  },
];

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// const [todos, setTodos] = useLocalStorageState("todos", {
//   defaultValue: [],
// });

function App() {
  const [entries, setEntries] = useLocalStorageState('entriesArray', {
    defaultValue: entriesArray,
  });
  const [showFavourites, setShowFavourites] = useLocalStorageState(
    'showFavourites',
    { defaultValue: false },
  );
  const [numberOfFavourites, setNumberOfFavourites] = useLocalStorageState(
    'numberOfFavourites',
    { defaultValue: 0 },
  );
  // const [entries, setEntries] = useState(entriesArray);
  // const [showFavourites, setShowFavourites] = useState(false);

  function handleDisplayFavourites() {
    setShowFavourites(true);
    console.log('handleDisplayFavourites');
  }
  function handleDisplayAll() {
    setShowFavourites(false);
    console.log('handleDisplayAll');
  }

  function handleNewEntry(newEntry) {
    const today = new Date();
    const date =
      monthNames[today.getMonth()] +
      ' ' +
      today.getDate() +
      ', ' +
      today.getFullYear();
    setEntries([
      {
        motto: newEntry.mottoInput,
        notes: newEntry.notesInput,
        isFavourite: false,
        date: date,
        id: uid(),
      },
      ...entries,
    ]);
  }

  function handleToggleFavourite(id) {
    entries.find((entry) => entry.id === id).isFavourite
      ? setNumberOfFavourites(numberOfFavourites - 1)
      : setNumberOfFavourites(numberOfFavourites + 1);
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, isFavourite: !entry.isFavourite } : entry,
      ),
    );
  }

  return (
    <>
      <Header />
      <MainContainer>
        <NewEntry onCreateEntry={handleNewEntry} />
        <NavBar
          handleDisplayFavourites={handleDisplayFavourites}
          handleDisplayAll={handleDisplayAll}
          numberOfFavourites={numberOfFavourites}
          entries={entries}
        />
        <Entries
          showFavourites={showFavourites}
          entries={entries}
          onToggleFavourite={handleToggleFavourite}
        />
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
