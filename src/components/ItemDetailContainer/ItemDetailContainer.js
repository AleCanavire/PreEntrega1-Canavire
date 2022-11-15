import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import { useParams, Link } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProducts] = useState([]);
  const id = useParams().id;

  async function getData(){
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const datos = await response.json();
    setProducts(datos)
  }
  useEffect(
    ()=>{
      getData();
    },
    []
  )
  // precio
  const num = product.price * 160;
  const price = num.toLocaleString('es-AR');
  // category
  function productCategory() {
    if (product.category == "men's clothing") {
      return( "Hombre" )
    } else if (product.category == "jewelery") {
      return( "Joyería" )
    } else if (product.category == "electronics") {
      return( "Tecnología" )
    } else if (product.category == "women's clothing") {
      return( "Mujer" )
    }
  }
  const category = productCategory();
  // stock
  const stock = product.rating;
  console.log(stock);

  return (
    <div className="itemDetailContainer">
      <div className="interestText">
        <p>También puede interesarte: <span>algo</span></p>
      </div>
      <div className="categoryShare">
        <div className="category">
          <Link to="/">Volver al listado</Link><span>{category}</span>  
        </div>
        <div className="share">
          <p>Compartir</p><span>Vender uno igual</span>
        </div>
      </div>
      <ItemDetail
        img={product.image}
        price={price}
        title={product.title}
        key={product.id}
        url={product.id}
      />
    </div>
  )
}

export default ItemDetailContainer;