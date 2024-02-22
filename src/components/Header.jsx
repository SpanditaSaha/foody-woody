import React, { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, items) => {
    return totalNumberOfItems + items.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
    console.log("Clicked");
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Food Logo" />
        <h1>Foody Woody</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
