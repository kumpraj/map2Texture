import { useJsApiLoader } from '@react-google-maps/api'
import React from 'react'
import './App.css'
import Map from './components/Map'
import { mapOptions } from './components/MapConfigurations'
import MapContainer from './components/MapContainer'

function App() {

  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  });

  return (
    <div>
      <h1>Map2Texture</h1>
      <MapContainer isLoaded={isLoaded} />
    </div>
  )
}

export default App