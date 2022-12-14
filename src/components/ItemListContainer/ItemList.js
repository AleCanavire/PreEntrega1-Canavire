import React from "react";
import Item from "./Item";
import ItemSkeleton from "./ItemSkeleton";

function ItemList({ products }) {
  let numbers = [];
  for (let i = 1; i <= 20; i++) {
    numbers.push(i)
  }

  if (products == 0) {
    return (
      <div className="itemsContainer">
        {numbers.map((number) => {
          return (
            <ItemSkeleton key={number}/>
          );
        })}
      </div>
    )
  }

  return (
    <div className="itemsContainer">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            url={product.id}
            title={product.title}
            img={product.image}
            price={product.price}
          />
        );
      })}
    </div>
  );
}

export default ItemList;