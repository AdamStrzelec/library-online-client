import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


class Map extends Component {
    static defaultProps = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };
   
    render() {
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '50vh', width: '50vh' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key:'AIzaSyDfSUrepC9L85metzW93D8Bq6kFZSi-IDA'}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <div
              lat={12.955413}
              lng={12.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      );
    }
  }
  export default Map;