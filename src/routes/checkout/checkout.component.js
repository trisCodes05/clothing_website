import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from "./checkout.styles.jsx";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} item={item} />;
      })}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
}

export default Checkout;
