import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Map() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/getLocations')
      .then(response => {
        setLocations(response.data.locations);
        // console.log(response.data.locations)
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div id='map_comp'>
      <h2>Map Component</h2>
      {locations && locations.map(location => (
        <div key={location._id} id='loc'>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      ))}
    </div>
  );
}

export default Map;