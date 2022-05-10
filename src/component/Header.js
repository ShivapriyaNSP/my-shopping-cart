import React from "react";
import { CartModal } from "../CartModal";
import userLogo from "../assets/user.png";

export default function Header(Props) {
  const { cartItems, onAdd, onRemove, countCartItems } = Props;
  const [isShow, setIsShow] = React.useState(false);

  function handleClick() {
    setIsShow(!isShow);
  }

  return (
    <header>
      <div className="row block ">
        <h1>
          <a href="#/">JacandoShop</a>{" "}
        </h1>
        <div>
          <h3 className="row margin">
            <img src={userLogo} alt="User"></img>
            <a href="#/"> Shiva</a>
            <a
              href="#/cart"
              type="button"
              className="flexDisplay"
              onClick={handleClick}
            >
              {" "}
              cart
              {countCartItems ? (
                <button className="badge"> {countCartItems}</button>
              ) : (
                ""
              )}
            </a>
          </h3>
          <CartModal
            show={isShow}
            handleClose={handleClick}
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          >
            <p>Cart</p>
          </CartModal>
        </div>
      </div>
    </header>
  );
}
