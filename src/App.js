import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="mainHome">
        <ItemListContainer sectionTitle="Ofertas"/>
      </main>
    </div>
  );
}

export default App;
