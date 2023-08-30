import React from "react";
import './ProductList.css'

const ProductList = (props) => {
  const deleteProduct = (productId, productPrice) => {
    props.onDelete(productId, productPrice);
  };

  return (
    <>
      <ul>
        {props.items.map((product) => (
          <li key={product.id}>
            <p>
              ${product.price} - {product.name}{" "}
              <button className="delete-button" onClick={() => deleteProduct(product.id, product.price)}>
                X
              </button>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
