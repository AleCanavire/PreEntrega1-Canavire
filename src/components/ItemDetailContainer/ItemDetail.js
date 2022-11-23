import React from 'react';
import ItemCount from './ItemCount';

function ItemDetail(props) {
  function favorite(){
    
  }

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
            <svg enableBackground="new 0 0 36 32.3" version="1.1" viewBox="0 0 36 32.3" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
              <path d="m27.6 0.5c-3.5-1-6.8-0.2-9.5 2.1l-0.1 0.1-0.1-0.1c-2-1.7-4.2-2.5-6.6-2.5-1 0-2 0.1-3 0.4-4 1.1-6.5 3.9-7.4 8-0.5 2.5-0.2 5 0.9 7.9 1 2.5 2.7 4.8 5.2 7.2 2.3 2.2 4.9 4 7.3 5.7 1.1 0.7 2 1.4 2.9 2.1l0.8 0.7 0.8-0.7c0.9-0.8 1.8-1.4 2.9-2.2 2.5-1.7 5.1-3.5 7.3-5.7 2.5-2.4 4.2-4.7 5.2-7.2 1.2-2.8 1.5-5.4 0.9-7.9-1-4-3.5-6.7-7.5-7.9zm4.3 15c-0.9 2.2-2.4 4.2-4.6 6.3-2.2 2-4.7 3.8-7.1 5.5-0.7 0.5-1.5 1-2.2 1.6v0.1l-0.1-0.1c-0.7-0.6-1.5-1.1-2.2-1.6-2.4-1.7-4.9-3.4-7.1-5.4-2.3-2.1-3.7-4.1-4.6-6.3-1-2.4-1.2-4.5-0.8-6.4 0.7-3.3 2.7-5.4 5.8-6.3 3-0.9 5.8-0.1 8.1 2.3l0.9 0.9 0.8-0.9c2.3-2.4 5.1-3.2 8.2-2.4 3.1 0.9 5.1 3 5.8 6.3 0.4 2 0.1 4.1-0.9 6.4z"/>
            </svg>
          </div>
          <div className='rate'>
            <svg enableBackground="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
              <polygon points="12 19.5 4.6 23.4 6 15.1 0 9.3 8.3 8.1 12 0.6 15.7 8.1 24 9.3 18 15.1 19.4 23.4"/>
            </svg>
            <svg enableBackground="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
              <polygon points="12 19.5 4.6 23.4 6 15.1 0 9.3 8.3 8.1 12 0.6 15.7 8.1 24 9.3 18 15.1 19.4 23.4"/>
            </svg>
            <svg enableBackground="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
              <polygon points="12 19.5 4.6 23.4 6 15.1 0 9.3 8.3 8.1 12 0.6 15.7 8.1 24 9.3 18 15.1 19.4 23.4"/>
            </svg>
            <svg enableBackground="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
              <polygon points="12 19.5 4.6 23.4 6 15.1 0 9.3 8.3 8.1 12 0.6 15.7 8.1 24 9.3 18 15.1 19.4 23.4"/>
            </svg>
            <svg enableBackground="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
              <polygon points="12 19.5 4.6 23.4 6 15.1 0 9.3 8.3 8.1 12 0.6 15.7 8.1 24 9.3 18 15.1 19.4 23.4"/>
            </svg>
            <span>{props.count}</span>
          </div>
          <div className='productPrice'>
            <div className='itemPrice'>
              <span className='priceSimbol'>$</span>
              <span className='price'>{props.price}</span>
            </div>
            <div className='quotas'>
              <p>
                <span>en </span>6x
                <span className='priceSimbol'> $ </span>
                <span className='price'>{props.quotas}</span>
              </p>
            </div>
            <p className='payment'>Ver los medios de pago</p>
          </div>
          <ItemCount stock={10}/>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail