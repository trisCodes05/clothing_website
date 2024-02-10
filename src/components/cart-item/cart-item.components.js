import React from "react";
import {CartItemContainer, ImgContainer, ItemDetails, Name} from "./cart-item.styles.jsx";

function CartItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <ImgContainer src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name >{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
}

export default CartItem;
