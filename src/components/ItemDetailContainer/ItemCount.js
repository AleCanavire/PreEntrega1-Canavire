import { useState } from 'react'

function ItemCount(props) {
  let [count, setCount] = useState(1);

  function agregarProducto(){
    if (count < props.stock) {
      setCount(count+1)
    }
  }
  function eliminarProducto(){
    if (count > 1) {
      setCount(count-1)
    }
  }
  return (
    <div className='cart'>
      <div className='product'>
        <button className='addRemove' onClick={eliminarProducto}>-</button>
        <div className='count'>{count}</div>
        <button className='addRemove' onClick={agregarProducto}>+</button>
      </div>
      <div className='buttons'>
        <button className='buyNow'>Comprar ahora</button>
        <button className='addCart'>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount