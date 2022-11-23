import products from "../data/data";

function getItems(idCategory) {
  return new Promise((resolve) => {
    if (idCategory === undefined) {
      setTimeout(() => {
        resolve(products);
      }, 500);
    } else {
      setTimeout(() => {
        const categoryProducts = products.filter((product) => product.category === idCategory);
        resolve(categoryProducts);
      }, 500);
    }
  });
}

export function getSingleItem(idParam) {
  return new Promise((resolve) => {
    const productRequested = products.find((product)=> product.id === Number(idParam))
    setTimeout(() => {
      resolve(productRequested);
    }, 500);
  });
}

export default getItems;