import "./inde.css";

import React, { useState, useEffect } from "react";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div  >
      <h2>Featured Products</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <div className="product-labels">
                <span className="product-label">GADGETS</span>
                <span className="product-heart">&#10084;</span>
              </div>
            <div className="product-image">
              <img src={product.images} alt={product.title} />
            </div>
            <h3>{product.title}</h3>
            <p>{product.price}€</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
