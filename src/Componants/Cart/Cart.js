import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let TotalPopulation = 0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        TotalPopulation = TotalPopulation + country.population;
    }

    return (
        <div>
            <h1>Cart Items:  {cart.length}</h1>
            <p>Total Population: {TotalPopulation}</p>
        </div>
    );
};

export default Cart;