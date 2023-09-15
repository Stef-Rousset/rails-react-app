import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Selection() {
  const [plantSelection, setPlantSelection] = useState([])

  useEffect(() => {
    axios.get('/api/v1/plants/selection')
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

  return (
           <div className="selection-container flex justify-between items-start w-11/12 h-full mx-auto">
            {plantSelection.map(plant =>
              <div key={plant.id} className="w-1/4 h-3/4 mx-auto my-6 bg-white grid grid-cols-1 gap-4 grid-rows-[1fr_5fr_1fr] p-4 border rounded" >
                <h3 className="font-semibold text-lg">{plant.name}</h3>
                <p className="text-justify">{plant.description}</p>
                <p>Prix: {plant.price}€</p>
              </div>
            )}
           </div>
          )
}
export default Selection;
