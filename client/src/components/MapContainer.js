import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useCallback, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import Cuboid from './Cuboid';

function MapContainer(props) {
const [mapCenter, setMapCenter] = useState({ lat: 12.9716, lng: 77.5946 });
const [markers, setMarkers] = useState([]);
const [selected, setSelected] = useState(null);
const [image, setImage] = useState(null);

const mapRef = useRef();

const onMapLoad = useCallback((map) => {
  mapRef.current = map;
}, []);



const captureScreenshot = useCallback(() => {
  const bounds = mapRef.current.getBounds();
  mapRef.current.fitBounds(bounds);
  html2canvas(mapRef.current.getDiv()).then((canvas) => {
    setImage(canvas.toDataURL());
    
  });
}, []);


const onMapClick = useCallback(
  (e) => {
  setMarkers((current) => [
  ...current,
  {
    lat: e.latLng.lat(),
    lng: e.latLng.lng(),
    time: new Date(),
  },
  ]);
  },
  []
);

const { isLoaded } = props;

const containerStyle = {
width: '80vw',
height: '80vh',
};

const center = {
lat: 12.9716,
lng: 77.5946,
};

return isLoaded && (
<div id='mapBox'>
<GoogleMap
     mapContainerStyle={containerStyle}
     center={mapCenter}
     zoom={10}
     onClick={onMapClick}
     onLoad={onMapLoad}
   >
  {markers.map((marker) => (
    <Marker
    key={marker.lat + '-' + marker.lng}
    position={{ lat: marker.lat, lng: marker.lng }}
    onClick={() => setSelected(marker)}
  />
  ))}
</GoogleMap>
<button onClick={captureScreenshot}>Capture Screenshot</button>
{image && <Cuboid image={image} />}
</div>
);
}

export default MapContainer;