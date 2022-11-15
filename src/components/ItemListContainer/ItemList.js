import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Item from "./Item";

function ItemList(props) {
  const [products, setProducts] = useState([]);
  async function getData(){
    const response = await fetch(`https://fakestoreapi.com/${props.url}?limit=5`);
    const datos = await response.json();
    setProducts(datos)
  }
  const {idCategory} = useParams();
  useEffect(
    ()=>{
      getData();
    },
    [idCategory]
  )

  return (
    <div className="recommendations">
      <div className="sectionTitle">
        <h3>{props.sectionTitle}</h3>
        <Link to="/">Ver todos</Link>
      </div>
      
      <div className="itemsContainer">
        {
          products.map((producto) => {
            const num = producto.price * 160;
            const price = num.toLocaleString('es-AR');
            return (
              <Item
                img={producto.image}
                price={price}
                title={producto.title}
                key={producto.id}
                url={producto.id}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default ItemList