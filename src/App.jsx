import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import MainContainer from './components/Main/MainContainer.jsx';
import NewEntry from './components/NewEntry/NewEntry.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Entries from './components/Entries/Entries.jsx';
import { uid } from 'uid';
import useLocalStorageState from 'use-local-storage-state';
import { entriesArray, monthNames } from './Data/data.js';

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

  console.log(entries.length);
  return (
    <>
      <Header />
      <MainContainer>
        <NewEntry onCreateEntry={handleNewEntry} />
        <NavBar
          handleDisplayFavourites={handleDisplayFavourites}
          handleDisplayAll={handleDisplayAll}
          numberOfFavourites={numberOfFavourites}
          entries={entries.length}
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
