import React from "react";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";

const Cart = (props) => {
    // Dummy array for now
    const cartItems = [{ id: "c1", name: "sushi", amount: 2, price: 120.99 }];

    return (
        <Modal onClose={props.onClose}>
            <ul className={classes["cart-items"]}>
                {cartItems.map((item) => (
                    <li>{item.name}</li>
                ))}
            </ul>
            <div className={classes["total"]}>
                <span>Total Amount</span>
                <span>350.62</span>
            </div>

            <div className={classes["actions"]}>
                <button
                    className={classes["button--alt"]}
                    onClick={props.onClose}
                >
                    Close
                </button>
                <button className={classes["button"]}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
