import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  return (
    <CartProvider>
      {isCartShown && <Cart onClose={() => setIsCartShown(false)} />}
      <Header onShowCart={() => setIsCartShown(true)} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
