import React from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

// This component will render/contain all the components
// related to meals
const Meals = () => {
    return (
        <>
            <MealsSummary />

            <AvailableMeals />
        </>
    );
};

export default Meals;
