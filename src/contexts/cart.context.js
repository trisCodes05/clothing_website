import { createContext, useState ,useEffect} from "react";

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

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount:0
});

export const CartContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount,setCartCount]= useState(0)

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  useEffect(()=>{
    const newCartItem = cartItems.reduce((total,cartItem)=>
      total + cartItem.quantity,0);
    setCartCount(newCartItem)
  },[cartItems])

  const value = { isOpen, setIsOpen, addItemToCart, cartItems ,cartCount};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
