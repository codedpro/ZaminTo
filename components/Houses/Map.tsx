"use client"
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

interface MapProps {
  latitude: number;
  longitude: number;
}

const defaultIcon = L.Icon.Default.prototype as any;
if (defaultIcon._getIconUrl) {
  delete defaultIcon._getIconUrl;
}
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
  const position = [latitude, longitude] as [number, number];

  const openGoogleMaps = () => {
    if (typeof window !== "undefined") {
      window.open(
        `https://www.google.com/maps?q=${latitude},${longitude}`,
        "_blank"
      );
    }
  };

  return (
    <div className="h-full w-full"> 
      <MapContainer
        center={position}
        zoom={13}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <button onClick={openGoogleMaps}>باز کردن در گوگل مپ</button>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
