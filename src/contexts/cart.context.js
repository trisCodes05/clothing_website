import { createContext, useState, useEffect } from "react";

//helper function for cart
const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems already has productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //if found increament count
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //return new array with modifies cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decreaseCart = (cartItems, removeItemToCart) => {
  //find the item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === removeItemToCart.id
  );

  //check quantity equal to 1 and remove item from cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== removeItemToCart.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === removeItemToCart.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteItem = (cartItems, removeItem) => {
  return cartItems.filter((cartItem) => cartItem.id !== removeItem.id);
};

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  decreaseQuan: () => {},
  removeItem: () => {},
  total: 0,
});

export const CartContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const decreaseQuan = (removeItem) => {
    setCartItems(decreaseCart(cartItems, removeItem));
  };

  const removeItem = (dltItem) => {
    setCartItems(deleteItem(cartItems, dltItem));
  };
  useEffect(() => {
    const newCartItem = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartItem);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const value = {
    isOpen,
    setIsOpen,
    addItemToCart,
    cartItems,
    cartCount,
    decreaseQuan,
    removeItem,
    cartTotal
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
