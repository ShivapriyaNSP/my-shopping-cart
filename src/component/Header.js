import React from "react";
import { CartModal } from "../CartModal";
import userLogo from "../assets/user.png";
import { Link } from "react-router-dom";

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
          <Link to="/">JacandoShop</Link>{" "}
        </h1>
        <div>
          <h3 className="row margin">
            <img src={userLogo} alt="User"></img>
            <Link to="/"> Shiva</Link>
            <Link
              to="#/cart"
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
            </Link>
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
