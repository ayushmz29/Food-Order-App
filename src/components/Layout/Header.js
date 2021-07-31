import React from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

// Importing image files are supported in this project setup
import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
    return(
        <>
            <header className={classes['header']}>
                <h1> React Meals </h1>
                
                {/* <button>--CART--</button> */}
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>

            <div className={classes['main-image']}>
                <img src={mealsImage} alt="meal" />
            </div>
        </>
    );
};

export default Header;