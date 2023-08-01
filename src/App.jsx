import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import MainContainer from './components/Main/MainContainer.jsx';
import NewEntry from './components/NewEntry/NewEntry.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <NewEntry />
        <NavBar />
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
