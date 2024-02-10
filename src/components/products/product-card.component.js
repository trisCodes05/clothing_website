import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  ProducrCardContainer,
  Footer,
  Price,
  Name,
} from "./product-card.styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <ProducrCardContainer>
      <img src={imageUrl} alt={`this is ${name}`} />
      <Footer>
        <Name >{name}</Name>
        <Price >${price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart{" "}
      </Button>
    </ProducrCardContainer>
  );
}

export default ProductCard;
