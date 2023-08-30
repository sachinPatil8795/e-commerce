import React, { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import "./App.css";

const App = () => {
  const [productData, setProductData] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [ProductCart, setProductCart] = useState("Please add Items to cart :(");

  useEffect(() => {
    // Load data from localStorage when the component mounts
    const storedProductData = localStorage.getItem('Products');
    const storedTotalValue = localStorage.getItem('TotalValue');

    if (storedProductData) {
      setProductData(JSON.parse(storedProductData));
    }

    if (storedTotalValue) {
      setTotalValue(parseFloat(storedTotalValue));
    }
  }, []);

  useEffect(() => {
    // Save data to localStorage whenever productData or totalValue changes
    localStorage.setItem('Products', JSON.stringify(productData));
    localStorage.setItem('TotalValue', totalValue);
  }, [productData, totalValue]);

  const submitProductDetails = (productDetails) => {
    setProductCart("Products Added to cart :)");
    const newProduct = productDetails[0]; // Take the first product from the array
    setTotalValue((prevTotal) => prevTotal + parseFloat(newProduct.price));
    setProductData([newProduct, ...productData]); // Add newProduct to the beginning of productData
  };

  const deleteProductData = (productId, productPrice) => {
    setTotalValue((prevTotal) => prevTotal - productPrice);
    const updatedProductData = productData.filter(
      (product) => product.id !== productId
    );
    setProductData(updatedProductData);
  };

  return (
    <div className="container">
      <h1>Welcome to SP-Mart</h1>

      <ProductForm onSubmitProductData={submitProductDetails} />

      <h2>Products in Cart</h2>
      <p className="total-value">{ProductCart}</p>
      <ProductList items={productData} onDelete={deleteProductData} />

      <h2>Net Payment:</h2>
      <p className="total-value">${totalValue.toFixed(2)}</p>
    </div>
  );
};

export default App;
