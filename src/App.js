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
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
            <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
