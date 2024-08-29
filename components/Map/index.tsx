"use client";

import { GoogleMap, Marker } from "@react-google-maps/api";

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "satellite",
};

const defaultMapZoom = 16;

export const defaultMapContainerStyle = {
  width: "600px",
  height: "300px",
  borderRadius: "15px",
};

interface IMapComponentProps {
  location: google.maps.LatLngLiteral;
}

const MapComponent = ({ location }: IMapComponentProps) => {
  return (
    <div className="w-full">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={location}
        zoom={defaultMapZoom}
        options={defaultMapOptions}>
        <Marker position={{ lat: location.lat, lng: location.lng }} />
      </GoogleMap>
    </div>
  );
};

export { MapComponent };
