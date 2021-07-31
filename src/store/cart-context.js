import React from 'react';

const CartContext = React.createContext({
    // These default values and functions are here for better auto-completion
    items: [],
    totalAmount: 0,
    
    addItem: (item) => {},
    removeItem: (id) => {},
});

export default CartContext;