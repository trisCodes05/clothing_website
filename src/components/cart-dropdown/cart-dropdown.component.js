import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.components";
import { CartContext } from "../../contexts/cart.context";
import {CartDropdownContainer, CartItems, EmptyCart} from "./cart-dropdown.styles.jsx";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
      {cartItems.length ? cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        )): <EmptyCart> Your Cart is empty</EmptyCart>}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
