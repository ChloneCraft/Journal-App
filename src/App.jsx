import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import MainContainer from './components/Main/MainContainer.jsx';
import NewEntryForm from './components/NewEntry';

function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <NewEntryForm></NewEntryForm>
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
