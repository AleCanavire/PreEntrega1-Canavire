import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import { useParams, Link } from "react-router-dom";
import { getSingleItem } from "../../services/mockService"

function ItemDetailContainer() {
  const [product, setProducts] = useState([]);
  const { id } = useParams();

  async function getItemsAsync() {
    const response = await getSingleItem(id);
    setProducts(response);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  // precio
  const num = Math.trunc(product.price * 160);
  const price = num.toLocaleString('es-AR');
  //cuotas
  const quota = Math.trunc(num / 6).toLocaleString('es-AR');

  // count
  const count = Math.floor(Math.random()*(200-100+1)+100);

  return (
    <div className="itemDetailContainer">
      <div className="interestText">
        <p>También puede interesarte: <span>algo</span></p>
      </div>
      <div className="categoryShare">
        <div className="category">
          <Link to="/PreEntrega1-Canavire/">Volver al listado</Link><span>{product.category}</span>  
        </div>
        <div className="share">
          <p>Compartir</p><span>Vender uno igual</span>
        </div>
      </div>
      <ItemDetail
        img={product.image}
        price={price}
        quotas={quota}
        title={product.title}
        key={product.id}
        url={product.id}
        count={`(${count})`}
      />
    </div>
  )
}

export default ItemDetailContainer;