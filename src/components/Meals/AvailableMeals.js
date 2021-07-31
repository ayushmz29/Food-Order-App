import React from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

// Dummy data for now
const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 220.99,
    },
    {
        id: "m2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 160.5,
    },
    {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 120.99,
    },
    {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 180.99,
    },
];

// This component will supply the available meals list
const AvailableMeals = () => {
    // const mealsList = DUMMY_MEALS.map((meal) => <MealItem />);

    return (
        <section className={classes["meals"]}>
            <Card>
                <ul>
                    {/* Dynamically rendering all the meal items from the list of meals */}
                    {DUMMY_MEALS.map((meal) => (
                        <MealItem
                            key={meal.id}
                            id={meal.id}
                            name={meal.name}
                            description={meal.description}
                            price={meal.price}
                        />
                    ))}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
