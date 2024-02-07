import "./cart-icon.styles.scss";
import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

function CartIcon() {
  const { isOpen, setIsOpen, cartCount } = useContext(CartContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cart-icon-container" onClick={handleToggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;
