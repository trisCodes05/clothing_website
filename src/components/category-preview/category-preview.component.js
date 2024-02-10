import React from "react";
import { Link } from 'react-router-dom'
import ProductCard from "../products/product-card.component";

import {CategoryPreviewContainer, Title, PreviewContainer} from "./category-preview.styles.jsx";

function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <h2>
       <Link to={title}>
       <Title >{title.toUpperCase()}</Title>
       </Link> 
      </h2>
      <PreviewContainer>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewContainer>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;
