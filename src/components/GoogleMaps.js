import React , {Component} from 'react';
import _ from 'lodash';

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Helmet from "react-helmet";

/*
* This is the modify version of:
* https://developers.google.com/maps/documentation/javascript/examples/event-arguments
*
* Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
*/
// const GettingStartedGoogleMap = withGoogleMap(props => (
//   <GoogleMap
//     ref={props.onMapLoad}
//     defaultZoom={3}
//     defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
//     onClick={props.onMapClick}
//     >
//       {props.markers.map(marker => (
//         <Marker
//           {...marker}
//           onRightClick={() => props.onMarkerRightClick(marker)}
//         />
//       ))}
//     </GoogleMap>
//   ));
//
//   export default class GettingStartedExample extends Component {
//
//     state = {
//       markers: [{
//         position: {
//           lat: 25.0112183,
//           lng: 121.52067570000001,
//         },
//         key: `Taiwan`,
//         defaultAnimation: 2,
//       }],
//     };
//
//     handleMapLoad = this.handleMapLoad.bind(this);
//     handleMapClick = this.handleMapClick.bind(this);
//     handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
//
//     handleMapLoad(map) {
//       this._mapComponent = map;
//       if (map) {
//         console.log(map.getZoom());
//       }
//     }
//
//     /*
//     * This is called when you click on the map.
//     * Go and try click now.
//     */
//     handleMapClick(event) {
//       const nextMarkers = [
//         ...this.state.markers,
//         {
//           position: event.latLng,
//           defaultAnimation: 2,
//           key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
//         },
//       ];
//       this.setState({
//         markers: nextMarkers,
//       });
//
//       if (nextMarkers.length === 3) {
//         this.props.toast(
//           `Right click on the marker to remove it`,
//           `Also check the code!`
//         );
//       }
//     }
//
//     handleMarkerRightClick(targetMarker) {
//       /*
//       * All you modify is data, and the view is driven by data.
//       * This is so called data-driven-development. (And yes, it's now in
//       * web front end and even with google maps API.)
//       */
//       const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
//       this.setState({
//         markers: nextMarkers,
//       });
//     }
//
//     render() {
//       return (
//         <div style={{height: `100%`, width: `100%`}}>
//           <Helmet
//             title="Getting Started"
//           />
//           <GettingStartedGoogleMap
//             containerElement={
//               <div style={{ height: `100%` }} />
//             }
//             mapElement={
//               <div style={{ height: `100%` }} />
//             }
//             onMapLoad={this.handleMapLoad}
//             onMapClick={this.handleMapClick}
//             markers={this.state.markers}
//             onMarkerRightClick={this.handleMarkerRightClick}
//           />
//         </div>
//       );
//     }
//   }

/*
* Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
*/
const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  />
));

/*
* Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
*/
export default class SimpleMapExample extends Component {

  render() {
    return (
              <div style={{ height: `100%`, width: `100%`}}>
                <SimpleMapExampleGoogleMap
                  containerElement={
                    <div style={{  height: `10%`,  position: 'absolute',
                      top: `0px`,
                      left: 0,
                      right: `100px`,
                      bottom: 0,

                    }} />
                  }
                  mapElement={
                    <div style={{ position: 'relative',
                      height: `50%`}} />
                  }
                />
              </div>

      // <SimpleMapExampleGoogleMap
      //   containerElement={
      //     <div style={{    position: 'absolute',
      //       top: `200px`,
      //       left: `100px`,
      //       right: `100px`,
      //       bottom: 0
      //     }} />
      //   }
      //   mapElement={
      //     <div style={{ position: 'relative',
      //       height: `50%`}} />
      //   }
      // />

    );
  }
}
