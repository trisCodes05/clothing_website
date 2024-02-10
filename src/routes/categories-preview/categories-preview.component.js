import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context.js";
import CategoryPreview from "../../components/category-preview/category-preview.component.js";

function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview title={title} products={products} />;
      })}
    </Fragment>
  );
}

export default CategoriesPreview;
