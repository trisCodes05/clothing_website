import React, { useContext } from "react";
import SHOP_DATA from "../../shop-data.json";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/products/product-card.component";
import './shop.styles.scss';

function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Shop;
