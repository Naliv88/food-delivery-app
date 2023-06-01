import React, { useState, useEffect, useContext } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { NotesContext } from 'context/notesContext';
import { getAddressFromCoordinates } from '../../Axios/getAddressFromCoordinates';

const MapComponent = () => {
  const mapContainerStyle = {
    width: 'auto',
    height: '350px',
  };

  const mapOptions = {
    disableDefaultUI: true,
  };

  const center = {
    lat: 50.4501,
    lng: 30.5234,
  };

  const [selectedLocation, setSelectedLocation] = useState(null);

  const { setAddress } = useContext(NotesContext);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAn6yCYR7-TXsSvS2UfJISAaKdoTzMrIIg',
  });

  useEffect(() => {
    if (selectedLocation) {
      getAddressFromCoordinates(selectedLocation.lat, selectedLocation.lng)
        .then((address) => {
          setAddress(address);
        })
        .catch((error) => {
          console.error('Error fetching address from coordinates:', error);
        });
    }
  }, [selectedLocation, setAddress]);

  const handleMapClick = (event) => {
    const { latLng } = event;
    const latitude = latLng.lat();
    const longitude = latLng.lng();

    setSelectedLocation({ lat: latitude, lng: longitude });
  };

  

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        onClick={handleMapClick}
        options={mapOptions}
      >
        {selectedLocation && <Marker position={selectedLocation} />}
      </GoogleMap>
    </div>
  ) : (
    <div>Loading Google Maps...</div>
  );
};

export default MapComponent;








