import React, { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/products/product-card.component";
import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";

function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((produt) => (
            <ProductCard key={produt.id} product={produt} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
}

export default Category;
