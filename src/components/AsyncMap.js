import _ from "lodash";

import React , {Component, PropTypes} from 'react';

import FaSpinner from 'react-fa';

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";

import 'bootstrap/dist/css/bootstrap.css';
/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Loaded using async loader.
 */
const AsyncGettingStartedExampleGoogleMap = _.flowRight(
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={5}
    defaultCenter={{ lat: -4.30429342, lng: 125.1884454 }}
    mapTypeId={'satellite'}
    onClick={props.onMapClick}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

export default class AsyncGettingStartedExample extends Component {

  static propTypes = {
    toast: PropTypes.func.isRequired,
  };

  state = {
    markers: [{
      position: {
        lat: 25.0112183,
        lng: 121.52067570000001,
      },
      key: `Taiwan`,
      defaultAnimation: 2,
    }],
  }

  handleMapLoad = this.handleMapLoad.bind(this);
  handleMapClick = this.handleMapClick.bind(this);
  handleMarkerRightClick = this.handleMarkerRightClick.bind(this);

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick(event) {
    const nextMarkers = [
      ...this.state.markers,
      {
        position: event.latLng,
        defaultAnimation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      },
    ];
    this.setState({
      markers: nextMarkers,
    });

  }

  handleMarkerRightClick(targetMarker) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
    this.setState({
      markers: nextMarkers,
    });
  }

  render() {
    return (
      <AsyncGettingStartedExampleGoogleMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBFuDU5rVlWPtp1tQd8smcA684sR2WOkOs"
        loadingElement={
          <div style={{ height: `100%` }}>
            <FaSpinner
              style={{
                display: `block`,
                width: `80px`,
                height: `80px`,
                margin: `150px auto`,
                animation: `fa-spin 2s infinite linear`,
              }}
            />
          </div>
        }

        containerElement={
          <div className="col-lg-11 col-sm-11 col-xs-11 col-md-11" style={{
            position: 'absolute',
            height: `100%`,
            // width: `100%`,
            }} />
        }
        mapElement={
          <div style={{ height: `80%`}} />
        }
        onMapLoad={this.handleMapLoad}
        onMapClick={this.handleMapClick}
        markers={this.state.markers}
        onMarkerRightClick={this.handleMarkerRightClick}
      />
    );
  }
}
