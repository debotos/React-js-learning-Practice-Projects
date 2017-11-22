import React from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MapView = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
      <Marker position={{ lat: props.lat, lng: props.lng }} />
    </GoogleMap>
  ))
);

export default MapView;

// Alternative way [check the WeatherList.js for some addetional props are comming thats required]
// [/*global google*/] just uncomment this line as it is (with /* */ important don't remove it)
// if you remove it, it will occure problems due to eslint configuration in create-react-app cli

// /* global google */
// export default class MapView extends Component {
//   componentDidMount() {
//     new google.maps.Map(this.refs.map, {
//       zoom: 12,
//       center: {
//         lat: this.props.lat,
//         lng: this.props.lng
//       }
//     })
//   }
//   render() {
//     return <div ref="map" />
//   }
// }

// Just checking the props value
// export default (props) => {
//   console.log('I got latitude: ', props.lat)
//   console.log('I got longitude: ', props.lng)
//   return(
//     <div>Checking...</div>
//   )
// }
