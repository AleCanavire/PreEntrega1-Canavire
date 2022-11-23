import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Item from "./Item";
import getItems from "../../services/mockService";

function ItemList() {
  const [products, setProducts] = useState([]);
  const {idCategory} = useParams();

  async function getItemsAsync() {
    const response = await getItems(idCategory);
    setProducts(response);
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);

  return (
    <div className="recommendations">
      <div className="sectionTitle">
        <h3>Productos</h3>
        <Link to="#">Ver todos</Link>
      </div>
      
      <div className="itemsContainer">
        {
          products.map((producto) => {
            const num = Math.trunc(producto.price * 160);
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