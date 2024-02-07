import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

function CheckoutItem({ item }) {
  const { addItemToCart, decreaseQuan ,removeItem} = useContext(CartContext);

  const { name, imageUrl, quantity, price } = item;

  const handleIncrement = () =>addItemToCart(item)
  const handleDecrement = () =>decreaseQuan(item)

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img className="img" src={imageUrl} alt={`${name}`} />
      </div>
      <div className="name">
        <span>{name}</span>
      </div>
      <div className="quantity">
        <div className="arrow " onClick={handleDecrement}>
        &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow " onClick={handleIncrement}>&#10095;</div>
      </div>
      <div className="price">
        <span>${price}</span>
      </div>
      <div >
      <span className="remove-button" onClick={()=>removeItem(item)}>&#10005;</span>
      </div>
    </div>
  );
}

export default CheckoutItem;
