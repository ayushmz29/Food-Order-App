import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
    
    const [cartIsShown, setCartIsSHown] = useState(false);

    const showCartHandler = () => {
        setCartIsSHown(true);
    };
    
    const hideCartHandler = () => {
        setCartIsSHown(false);
    };

    return (
        <CartProvider>
            {/* Header contains Title, BG, Cart */}
            <Header onShowCart={showCartHandler} />

            {cartIsShown && <Cart onClose={hideCartHandler} />}

            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
