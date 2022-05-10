import Header from "./component/Header";
import Main from "./component/Main";
import Sidebar from "./component/Sidebar";
import { data } from "./data";
import "./assets/style.css";
import { useState, React } from "react";
import { BrowserRouter } from "react-router-dom";
function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <BrowserRouter>
      <div>
        <Header
          products={products}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          countCartItems={cartItems.length}
        ></Header>
        <div className="flex-flow-left">
          <Sidebar></Sidebar>
        </div>
        <div className="flex-flow-right">
          <Main
            products={products}
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
