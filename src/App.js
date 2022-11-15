import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <main className="mainHome">
          <Routes>
            <Route path='PreEntrega1-Canavire/' element={<ItemListContainer/>}/>
            <Route path='PreEntrega1-Canavire/category/:idCategory' element={<ItemListContainer/>}/>
            <Route path='PreEntrega1-Canavire/detail/:id' element={<ItemDetailContainer/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
