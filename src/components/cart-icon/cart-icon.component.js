
import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {CartIconContainer, ItemCount, ShoppingIconImg} from "./cart-icon.styles.jsx";

function CartIcon() {
  const { isOpen, setIsOpen, cartCount } = useContext(CartContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CartIconContainer onClick={handleToggle}>
      <ShoppingIconImg />
      <ItemCount >{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
