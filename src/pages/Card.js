import React, { useState } from "react";

const products = [
  { id: 1, name: "Product 1", price: 10, likes: 0, unLike: 0 },
  { id: 2, name: "Product 2", price: 20, likes: 0, unLike: 0 },
  { id: 3, name: "Product 3", price: 30, likes: 0, unLike: 0 },
];

const Card = () => {
  const [productList, setProductList] = useState(products);

  const handleLike = (productId) => {
    setProductList((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, likes: product.likes + 1 }
          : product
      )
    );
  };
  const handleUnLike = (productId) => {
    setProductList((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, unLike: product.unLike - 1 }
          : product
      )
    );
  };
  return (
    <div>
      {productList.map((product) => (
        <div className="card" key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button
            className="bg-gray-300 pr-3 pl-3 pt-1 pb-1 rounded hover:bg-gray-700 hover:text-white "
            onClick={() => handleLike(product.id)}
          >
            Like {product.likes || 0}
          </button>
          <button
            className="bg-blue-300 pr-3 pl-3 pt-1 pb-1 rounded hover:bg-blue-500 hover:text-white ml-2 "
            onClick={() => handleUnLike(product.id)}
          >
            unLike {product.unLike || 0}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
