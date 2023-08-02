import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import MainContainer from './components/Main/MainContainer.jsx';
import NewEntry from './components/NewEntry/NewEntry.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Entries from './components/Entries/Entries.jsx';
// import { entriesArray } from '../Entries/Entries.jsx';
import { useState } from 'react';
// import {uid} from "uid"; for getting unique ids

export const entriesArray = [
  {
    id: 1000,
    date: 'Feb 5, 2025',
    motto: 'We are in a state of chaos',
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    date: 'Feb 4, 2025',
    motto: 'Props, Props, Props',
    notes:
      'Today I learned about React Props. Mad props to everyone who understands this!',
  },
  {
    id: 998,
    date: 'Feb 3, 2025',
    motto: 'How to nest components online fast',
    notes:
      'Today I learned about React Components and how to nest them like a pro. Application design is so much fun!',
  },
  {
    id: 997,
    date: 'Feb 2, 2025',
    motto: "I'm a React Developer",
    notes: 'My React-ion when I learned about React: 😍',
  },
];

function App() {
  function handleNewEntry(newEntry) {
    setEntries([...entriesArray, newEntry]);
  }
  const [entries, setEntries] = useState(entriesArray);
  return (
    <>
      <Header />
      <MainContainer>
        <NewEntry onCreateEntry={handleNewEntry} />
        <NavBar />
        <Entries entries={entries} />
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
