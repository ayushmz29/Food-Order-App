import React from 'react';

import classes from './Card.module.css';

// Custom Reusable wrapper component to 
//apply Card type styling to all children elements

const Card = (props) => {
    return (
        <div className={classes['card']}>
            {props.children}
        </div>
    );
};

export default Card;