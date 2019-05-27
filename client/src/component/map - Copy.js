import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { GoogleComponent } from 'react-google-location'
import './style.css'
const API_KEY = 'AIzaSyBZQF7mgCxj1CNWQDM5-VpvGIhK1h546so0'



export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {},

          place: null,

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
        return (
            <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
            async defer></script>
            <div>
                <div style={{width: 500, 'marginLeft': 'auto', 'marginRight': 'auto',display: 'flex', 'flexDirection': 'row'}}>
                <h4 style={{marginTop: 'auto', marginBottom:'auto',marginRight:10}}>Chọn điểm xuất phát</h4>
                <GoogleComponent         
                apiKey={API_KEY}
                language={'en'}
                country={'country:vn'}
                coordinates={true}
                locationBoxStyle={'height:100px !important'}
                //locationListStyle={'custom-style-list'}
                onChange={(e) => { this.setState({ place: e }) }} />
                <div>{place.lat}</div>
                </div>
                <Map
                google={this.props.google}
                zoom={14}
                style={style}
                initialCenter={{lat: 10.8205137,lng: 106.5908536
                }}
                >
                    <Marker
                    onClick = { this.onMarkerClick }
                    //title = { 'Changing Colors Garage' }
                    position = {{lat: 10.8205137, lng: 106.5908536}}
                    name = {'Vị trí'}
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
  apiKey: 'AIzaSyBZQF7mgCxj1CNWQDM5-VpvGIhK1h546so0'
})(MapContainer);

