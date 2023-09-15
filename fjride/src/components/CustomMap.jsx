// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
//   DirectionsRenderer,
// } from "react-google-maps";
// import { compose, withProps } from "recompose";
// import { API_URL } from "../assets/config";
// import { useEffect, useState } from "react";

// const CustomMap = compose(
//   withProps({
//     googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_URL}&v=3.exp&libraries=geometry,drawing,places`,
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: "537px" }} />,
//     mapElement: <div style={{ height: "500px", width: "1000px" }} />,
//     isMarkerShown: true,
//   }),
//   withScriptjs,
//   withGoogleMap
// )((props) => {
//   const [directions, setDirections] = useState(null);
//   useEffect(() => {
//     if (props.pickup && props.destination) {
//       const directionsService = new window.google.maps.DirectionsService();

//       directionsService.route(
//         {
//           origin: props.pickup,
//           destination: props.destination,
//           travelMode: window.google.maps.TravelMode.DRIVING,
//         },
//         (result, status) => {
//           if (status === window.google.maps.DirectionsStatus.OK) {
//             setDirections(result);
//           } else {
//             console.error("Error fetching directions:", status);
//           }
//         }
//       );
//     }
//   }, [props.pickup, props.destination]);

//   return (
//     <div>
//       <GoogleMap
//         defaultZoom={7}
//         defaultCenter={new window.google.maps.LatLng(41.85073, -87.65126)}
//       >
//         {props.pickup && <Marker position={props.pickup} label="Pickup" />}
//         {props.destination && (
//           <Marker position={props.destination} label="Destination" />
//         )}
//         {directions && (
//           <DirectionsRenderer
//             directions={directions}
//             options={{ suppressMarkers: true }}
//           />
//         )}
//       </GoogleMap>
//     </div>
//   );
// });
// export default CustomMap;
