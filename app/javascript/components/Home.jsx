import React from 'react';
import { createRoot } from 'react-dom/client';
import Selection from './Selection';

function Home() {
  return (<div className="home-container w-full h-full">
            <h2 className="font-semibold text-lg">Notre sélection du moment</h2>
            <Selection />
          </div>);
}
const container = document.getElementById('home');
const root = createRoot(container);
root.render(<Home />);

export default Home;
