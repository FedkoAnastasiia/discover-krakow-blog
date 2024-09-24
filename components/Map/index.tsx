import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

interface IMapComponentProps {
  location: google.maps.LatLngLiteral;
}

const MapComponent = ({ location }: IMapComponentProps) => {
  return (
    <MapContainer
      center={location}
      zoom={13}
      scrollWheelZoom={false}
      className="mapComponentContainer">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={location} />
    </MapContainer>
  );
};

export default MapComponent;
