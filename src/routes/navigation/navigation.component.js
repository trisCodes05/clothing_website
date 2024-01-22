import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "../navigation/navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { signAuthUserOut } from "../../utils/firebase/firebase.utils";

function Navigation() {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signAuthUserOut();
  
  }
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          {currentUser ? (
            <Link className="nav-link" to="/auth" onClick={signOutHandler}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
