import React from 'react';
import ItemCount from './ItemCount';

function ItemDetail(props) {
  //props.img - props.title - props.price - props.stock
  return (
    <div className='itemDetail'>
      <div className='columnLeft'>
        <div className='imgProductContainer'>
          <div className='imgProduct'>
            <div className='gallery'>
              <div className='preview'>
                <img src={props.img} alt={props.title}></img>
              </div>
            </div>
            <div className='focusImg'>
              <img src={props.img} alt={props.title}></img>
            </div>
          </div>
        </div>
        <div className='specifications'>

        </div>
      </div>
      <div className='columnRight'>
        <div className='infoProduct'>
          <div className='productHeader'>
            <span>Nuevo  |  6351 vendidos</span>
            <h1>{props.title}</h1>
          </div>
          <div className='productPrice'>
            <div className='itemPrice'>
              <span className='priceSimbol'>$</span>
              <span className='price'>{props.price}</span>
            </div>
          </div>
          <ItemCount stock={10}/>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail