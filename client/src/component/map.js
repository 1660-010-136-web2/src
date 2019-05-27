import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import GoogleComponent from './GoogleComponent.js' //COPIED RIGHT: https://github.com/anil-sidhu/react-google-location
import './mapStyle.css'












const API_KEY = 'AIzaSyCPFbOomrgWfaF9utA9-yfSlC2rzhPOo9g'

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      startPlace: { coordinates: { lat: null, lng: null } },
      destPlace: { coordinates: { lat: null, lng: null } }
      

    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }



















  render() {
    const style = {
      width: 1000,
      height: 500,
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }

    var startPlace = { lat: parseFloat(this.state.startPlace.coordinates.lat), lng: parseFloat(this.state.startPlace.coordinates.lng) }
    var destPlace = { lat: parseFloat(this.state.destPlace.coordinates.lat), lng: parseFloat(this.state.destPlace.coordinates.lng) }
    var bounds = new this.props.google.maps.LatLngBounds();
    bounds.extend(startPlace);
    bounds.extend(destPlace);

    
    return (

      <div>
        <div style={{ width: 700, 'marginLeft': 'auto', 'marginRight': 'auto', display: 'flex', 'flexDirection': 'row' }}>
          <h4 style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: 10 }}>Chọn điểm xuất phát</h4>
          <GoogleComponent

            apiKey={API_KEY}
            language={'vi'}
            //locationBoxStyle={'customStyle'}
            country={'country:vn'}
            coordinates={true}
            onChange={(e) => {
              this.setState({ startPlace: e })

              

              //console.log("Result", this.state.place.coordinates.lat)
            }}


          />
        </div>

        <div style={{ width: 700, 'marginLeft': 'auto', 'marginRight': 'auto', display: 'flex', 'flexDirection': 'row' }}>
          <h4 style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: 10 }}>Chọn điểm đến</h4>
          <GoogleComponent

            apiKey={API_KEY}
            language={'vi'}
            //locationBoxStyle={'customStyle'}
            country={'country:vn'}
            coordinates={true}
            onChange={(e) => {
              this.setState({ destPlace: e })
              //console.log("Result", this.state.place.coordinates.lat)
            }}


          />
        </div>

        <div style={{ width: 700, 'marginLeft': 'auto', 'marginRight': 'auto', display: 'flex', 'flexDirection': 'row' }}>
          <form id='form1'>
            Tên: <input id='name' class='required' name="fullName"></input>
            Số điện thoại: <input class='required' name="phoneNumber"></input>
            startLat: <input class='required' name="startLat" value={this.state.startPlace.coordinates.lat} readOnly></input>
            startLgn: <input class='required' name="startLng" value={this.state.startPlace.coordinates.lng} readOnly></input>
            destLat: <input class='required' name="destLat" value={this.state.destPlace.coordinates.lat} readOnly></input>
            destLgn: <input class='required' name="destLng" value={this.state.destPlace.coordinates.lng} readOnly></input>
            <button type='submit'>Đặt</button>
          </form>
        </div>

        <Map
          google={this.props.google}
          onReady={this.fetchPlaces}
          zoom={14}
          style={style}
          initialCenter={{
            lat: 10.8205137, lng: 106.5908536
          
          }}
          bounds={bounds}
        >
         
          <Marker
            onClick={this.onMarkerClick}
            //title = { 'Changing Colors Garage' }
            
            position={{ lat: this.state.startPlace.coordinates.lat, lng: this.state.startPlace.coordinates.lng }}
            name={'Vị trí'}
          />

<Marker
            onClick={this.onMarkerClick}
            //title = { 'Changing Colors Garage' }
            position={{ lat: this.state.destPlace.coordinates.lat, lng: this.state.destPlace.coordinates.lng }}
            name={'Vị trí'}
          />


          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>



      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCPFbOomrgWfaF9utA9-yfSlC2rzhPOo9g'
})(MapContainer);

