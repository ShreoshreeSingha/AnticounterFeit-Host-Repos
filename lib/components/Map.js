import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import loadjs from "loadjs";
const AnyReactComponent = ({
  text
}) => /*#__PURE__*/React.createElement("div", null, text);
const Map = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [map, setMap] = useState(null);
  useEffect(() => {
    loadjs(`https://maps.googleapis.com/maps/api/js?key=AIzaSyCHrY_zXvUIDBsL7ENiJWeumRybYUCGkZQ`, () => {
      setMapLoaded(true);
    });
  }, []);
  const onMapLoad = (map, maps) => {
    setMap(map);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, mapLoaded && /*#__PURE__*/React.createElement(GoogleMapReact, {
    bootstrapURLKeys: {
      key: "YOUR_API_KEY"
    },
    defaultCenter: {
      lat: 32.5934,
      lng: 77.2223
    },
    defaultZoom: 1,
    yesIWantToUseGoogleMapApiInternals: true,
    onGoogleApiLoaded: ({
      map,
      maps
    }) => onMapLoad(map, maps)
  }, /*#__PURE__*/React.createElement(AnyReactComponent, {
    lat: 12.9716,
    lng: 77.5946,
    text: "My Marker"
  })));
};
export default Map;