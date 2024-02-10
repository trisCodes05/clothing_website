import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signAuthUserOut } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  NavigationContainer,
  LogoContainer,
  NavLinkContainer,
  NavLink,
} from "./navigation.styles.js";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signAuthUserOut();
  };
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to="/shop">SHOP</NavLink>

          <NavLink to="/contact">CONTACT</NavLink>

          {currentUser ? (
            <NavLink  as='span' to="/auth" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}

          <CartIcon />
        </NavLinkContainer>
        {isOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
