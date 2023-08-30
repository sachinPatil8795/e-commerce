import React, { useState } from "react";
import './ProductForm.css'

const ProductForm = (props) => {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  //ProductID change Handler
  const productIdChangehandler = (e) => {
    setProductId(e.target.value);
  };

  //Product name handler
  const productNameChangehandler = (e) => {
    setProductName(e.target.value);
  };

  //Product price handler
  const productPriceChangehandler = (e) => {
    setProductPrice(e.target.value);
  };

  //Submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    if (productName === "" || productId === "" || productPrice === "") {
      alert("Please fill the required details!!");
    } else {
      const productDetails = {
        id: productId,
        name: productName,
        price: productPrice,
      };

      props.onSubmitProductData([productDetails]);

      //Clearing fileds
      setProductId("");
      setProductName("");
      setProductPrice("");
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="product-id">Product ID</label>
          <input
            type="number"
            id="product-id"
            value={productId}
            onChange={productIdChangehandler}
          />
        </div>
        <div>
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={productName}
            onChange={productNameChangehandler}
          />
        </div>
        <div>
          <label htmlFor="product-price">Product Price</label>
          <input
            type="number"
            id="product-price"
            value={productPrice}
            onChange={productPriceChangehandler}
          />
        </div>

        <div>

        <button>Add Product</button>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
