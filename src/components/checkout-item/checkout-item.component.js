import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton
} from "./checkout-item.styles.jsx";

function CheckoutItem({ item }) {
  const { addItemToCart, decreaseQuan, removeItem } = useContext(CartContext);

  const { name, imageUrl, quantity, price } = item;

  const handleIncrement = () => addItemToCart(item);
  const handleDecrement = () => decreaseQuan(item);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={handleDecrement}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleIncrement}>
          &#10095;
        </Arrow>
      </Quantity>
      <BaseSpan>${price}</BaseSpan>
        <RemoveButton onClick={() => removeItem(item)}>
          &#10005;
        </RemoveButton>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;
