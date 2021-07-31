import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    // Dummy array for now
    // const cartItems = [{ id: "c1", name: "sushi", amount: 2, price: 120.99 }];

    const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    };

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    // onRemove={() => cartItemRemoveHandler(item.id)}
                    // onAdd={() => cartItemAddHandler(item.item)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                    onRemove = {cartItemRemoveHandler.bind(null, item.id)}

                    /* We can't just write ...

                    onRemove={cartItemRemoveHandler(item.id)}
                    ... since this would call the function immediately (and not when the cart item is clicked).

                    So, if we want to pass params, we can either use bind (the first param is not used here, so we can write anything in this place) ...

                    onRemove={cartItemRemoveHandler.bind(null, item.id)}

                    ..., or we can create an anonymous function:

                    onRemove={() => cartItemRemoveHandler(item.id)}

                    Both options are equivalent. */

                />
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}

            <div className={classes["total"]}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>

            <div className={classes["actions"]}>
                <button
                    className={classes["button--alt"]}
                    onClick={props.onClose}
                >
                    Close
                </button>

                {/* render button only when items exists in the cart */}
                {hasItems && (
                    <button className={classes["button"]}>Order</button>
                )}
            </div>
        </Modal>
    );
};

export default Cart;
