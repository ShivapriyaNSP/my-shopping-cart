import "./assets/model.css";
import React from "react";
import styled from "styled-components";
export const CartModal = ({
  handleClose,
  show,
  cartItems,
  onAdd,
  onRemove
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  // eslint-disable-next-line
  const checkoutButton = styled.button`
    position: absolute;
    float: right;
  `;
  return (
    <div className={showHideClassName}>
      <section className="modal-main ">
        <h2>CartItems</h2>
        <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <h3>{item.name}</h3>
            <div>{item.price} CHF</div>
            <div>
              <button className="button" onClick={() => onAdd(item)}>
                +
              </button>
              <button className="button" onClick={() => onRemove(item)}>
                -
              </button>
            </div>
            <div>
              {item.qty} x {item.price.toFixed(2)} CHF
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <div className="row flex-direction-right">
            <strong>Total Price</strong>
            <strong>{totalPrice.toFixed(2)} CHF</strong>
          </div>
        )}

        <button
          type="button"
          className="display-topright"
          onClick={handleClose}
        >
          X
        </button>
        <button className="button" onClick={() => alert("Proceed to checkout")}>
          Checkout
        </button>
      </section>
    </div>
  );
};
