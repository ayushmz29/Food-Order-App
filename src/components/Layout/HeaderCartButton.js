import React, {useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    // This component will be reevaluated whenever the context changes

    const cartctx = useContext(CartContext);
    
    const noOfCartItems = cartctx.items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    }, 0)

    return (
        <>
            <button className={classes['button']} onClick={props.onClick}>
                <span className={classes['icon']}>
                    <CartIcon />
                </span>
                
                <span>Your Cart</span>
                
                <span className={classes['badge']}>{noOfCartItems}</span>
            </button>
        </>
    );
};

export default HeaderCartButton;