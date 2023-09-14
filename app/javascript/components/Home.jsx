import React from 'react';
import ReactDOM from 'react-dom';
import Selection from './Selection';

function Home() {
  return (<div>
            <h2 className="font-semibold">Notre sélection du moment</h2>
            <Selection />
          </div>);
}

ReactDOM.render(
  <Home />,
  document.getElementById('home'),
);

export default Home;
