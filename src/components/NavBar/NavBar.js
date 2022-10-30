import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <nav className='nav'>
      <div className='navContainer'>
        <img className='meliLogo' src='./img/meliLogo.png' alt='Logo Mercado Libre'></img>
        <div className='location'>
          <img src='./img/location.svg'></img>
          <span>Enviar a</span>
          <p>Capital Federal</p>
        </div>
        <div className='search'>
          <form>
            <input placeholder='Buscar productos, marcas y más...'></input>
            <button>
              <img src='./img/search.svg'></img>
            </button>
          </form>
        </div>
        <div className='categories'>
          <ul>
            <li><span>Categorías</span></li>
            <li><span>Ofertas</span></li>
            <li><span>Historial</span></li>
            <li><span>Supermercado</span></li>
            <li><span>Moda</span></li>
            <li><span>Vender</span></li>
            <li><span>Ayuda</span></li>
          </ul>
        </div>
        <img className='disney' src='./img/disneyStar.webp'></img>
        <div className='account'>
          <ul>
            <li><span>Creá  tu cuenta</span></li>
            <li><span>Ingresá</span></li>
            <li><span>Mis compras</span></li>
            <CartWidget/>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default NavBar