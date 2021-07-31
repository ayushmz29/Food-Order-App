import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    // This component will be reevaluated whenever the context changes

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);

    const noOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    // object destructuring, to use it in the useState
    const { items } = cartCtx;

    const btnClasses = `${classes["button"]} ${
        btnIsHighlighted ? classes["bump"] : ""
    }`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        // to remove the bump class after animation(dur:300ms) ends:
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        // Cleanup function (when we add items rapidly this cleanup function will remove the old timer and
        // make sure that a new timer is added)
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <>
            <button className={btnClasses} onClick={props.onClick}>
                <span className={classes["icon"]}>
                    <CartIcon />
                </span>

                <span>Your Cart</span>

                <span className={classes["badge"]}>{noOfCartItems}</span>
            </button>
        </>
    );
};

export default HeaderCartButton;
