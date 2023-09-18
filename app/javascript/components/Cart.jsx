import React from 'react';
//import { useState, useEffect } from 'react';


function Cart(props){
  const total = props.cart.reduce((acc, plant) => acc + (plant.price * plant.amount), 0)
  const emptyCart = () => {
    props.setCart([])
  }
  return (
    <div className="cart-container flex flex-col w-2/12 justify-between h-3/4 bg-green-200 mt-12 p-4 mx-auto">
      <h3 className="font-semibold text-center text-lg">Panier</h3>
      {props.cart.map(plant =>
        <div key={plant.id}>
          {plant.name} {plant.price}€ x {plant.amount}
        </div>
      )}
      <p>Total: {total}€</p>
      <button onClick={emptyCart} className="font-semibold text-lg bg-gray-100">Vider le panier</button>
    </div>
  )
}
export default Cart;
