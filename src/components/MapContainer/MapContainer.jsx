import React, { useState } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = ({ google }) => {
  const [userAddress, setUserAddress] = useState('');
  const [userLocation, setUserLocation] = useState(null);
  const [shopLocation, setShopLocation] = useState(null);

  const handleMapClick = (mapProps, map, clickEvent) => {
    const { latLng } = clickEvent;
    const { lat, lng } = latLng;
    const location = { lat, lng };
    setUserLocation(location);
    reverseGeocode(lat, lng);
  };

  const handleAddressChange = event => {
    setUserAddress(event.target.value);
  };

  const handleAddressSubmit = event => {
    event.preventDefault();
    geocode(userAddress);
  };

  const geocode = address => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        const { lat, lng } = results[0].geometry.location;
        const location = { lat: lat(), lng: lng() };
        setUserLocation(location);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  const reverseGeocode = (lat, lng) => {
    const geocoder = new google.maps.Geocoder();
    const latLng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          const address = results[0].formatted_address;
          setUserAddress(address);
        }
      } else {
        alert('Reverse geocode was not successful for the following reason: ' + status);
      }
    });
  };

  return (
    <div>
      <Map
        google={google}
        zoom={14}
        initialCenter={{ lat: 0, lng: 0 }}
        onClick={handleMapClick}
      >
        {userLocation && (
          <Marker
            position={userLocation}
            icon={{
              url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
              scaledSize: new google.maps.Size(32, 32),
            }}
          />
        )}
        {shopLocation && (
          <Marker
            position={shopLocation}
            icon={{
              url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
              scaledSize: new google.maps.Size(32, 32),
            }}
          />
        )}
      </Map>
      <form onSubmit={handleAddressSubmit}>
        <input
          type="text"
          placeholder="Enter address"
          value={userAddress}
          onChange={handleAddressChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'YOUR_API_KEY_GOES_HERE',
})(MapContainer);

