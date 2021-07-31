import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmount < 1 ||
            enteredAmount > 5
        ) {
            // when entered amount is not valid:
            setAmountIsValid(false);
            return;
        }

        // When entered amount is valid:
        // run below function which is expected to come through props
        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={classes["form"]} onSubmit={submitHandler}>
            {/* Passing object as props to Input Component */}
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: "amount" + props.id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button>+ Add</button>

            {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    );
};

export default MealItemForm;
