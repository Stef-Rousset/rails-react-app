import React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Selection from './Selection';
import Cart from './Cart';

function Home() {
  //useState sera un tableau d'objets, avec pr chq plante un objet qui
  //contient l'id, le nom, le prix et l'amount
  const [cart, setCart] = useState([]);

  return (
          <div className="home-container w-full h-full flex justify-between">
            <div className="flex flex-col w-4/5 h-full">
              <h2 className="font-semibold text-lg">Notre sélection du moment</h2>
              <div className="flex justify-between items-start w-full h-full">
                <Selection cart={cart} setCart={setCart} />
              </div>
            </div>
            <div className="flex flex-col w-1 h-full bg-black"></div>
            <Cart cart={cart} setCart={setCart} />
          </div>
        );
}
const container = document.getElementById('home');
const root = createRoot(container);
root.render(<Home />);

export default Home;
