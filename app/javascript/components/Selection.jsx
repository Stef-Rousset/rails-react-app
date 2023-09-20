import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Selection({cart, setCart}) {
  const [plantSelection, setPlantSelection] = useState([])
  //cart est un array d'objets
  const allPlants = document.getElementById('plants')
  let query = ""
  let url = ""
  if (allPlants){
    query = allPlants.getAttribute('data-target')
  }
  if (query){
    url = `/api/v1/plants/selection?query=${query}`
  } else if (allPlants){
    url = '/api/v1/plants/'
  } else {
    url = '/api/v1/plants/selection'
  }
  //const url = query ? `/api/v1/plants/selection?query=${query}` : allPlants ? '/api/v1/plants/' : '/api/v1/plants/selection'

  useEffect(() => {
    axios.get(url)
      .then(function (response) {
        // handle success
        //console.log(response);
        setPlantSelection(response.data);
        //console.log(plantSelection);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [])

  function addToCart(id, name, price) {
    const currentPlantAdded = cart.find(plant => plant.id === id)
    //si le cart contient déjà la plante
    if (currentPlantAdded) {
      //je crée une copie de mon array sans la plante
      const cartWithoutCurrentPlant = cart.filter(plant => plant.id !== id)
      // j'ajoute à cet array ma plante avec l'amount incrémenté de 1
      setCart([...cartWithoutCurrentPlant, { id, name, price, amount: currentPlantAdded.amount + 1 }])
      //sinon, j'ajoute ma plante au cart
    } else {
      setCart([...cart, { id, name, price, amount: 1 }])
    }
  }


  return (
    <div className="plant-container flex justify-between items-start w-full h-full overflow-y-scroll">
            {plantSelection.map(plant =>
              <div key={plant.id} className="w-1/4 h-3/4 mx-auto my-6 bg-white grid grid-cols-1 gap-4 grid-rows-[1fr_4fr_1fr_1fr] p-4 border rounded" >
                <h3 className="font-semibold text-lg">{plant.name}</h3>
                <p className="text-justify overflow-y-scroll">{plant.description}</p>
                <p>Prix: {plant.price}€</p>
                <button onClick={() => addToCart(plant.id, plant.name, plant.price)} className="font-semibold bg-green-200 border rounded w-full">Ajouter au panier</button>
              </div>
            )}
           </div>
          )
}
export default Selection;
