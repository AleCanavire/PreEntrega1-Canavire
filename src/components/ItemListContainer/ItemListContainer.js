import React from 'react';
import ItemList from "../ItemListContainer/ItemList";
import { useParams } from "react-router-dom"

function ItemListContainer() {
  const {idCategory} = useParams();
  if (idCategory == undefined) {
    return(
      <>
        <ItemList url="products" sectionTitle="Ofertas"/>
        <ItemList url="products/category/electronics" sectionTitle="Tecnología"/>
        <ItemList url="products/category/women's%20clothing" sectionTitle="Mujer"/>
      </>
    )
  } else if (idCategory == "tecnología") {
    return(
      <ItemList url="products/category/electronics" sectionTitle="Tecnología"/>
    )
  } else if(idCategory == "ropa-mujer"){
    return (
      <ItemList url="products/category/women's%20clothing" sectionTitle="Mujer"/>
    ) 
  } else if(idCategory == "ropa-hombre"){
    return (
      <ItemList url="products/category/men's%20clothing" sectionTitle="Hombre"/>
    ) 
  } else if(idCategory == "joyería"){
    return (
      <ItemList url="products/category/jewelery" sectionTitle="Joyería"/>
    ) 
  }
}

export default ItemListContainer