import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

const API_KEY = "AIzaSyBIEihYCYgpf95thv2cBjvLYc02loHh-c0";

export default (props) => {
	console.log(props.lat);
	console.log(props.lon);
	return(
		<GoogleMapLoader
			containerElement = { <div style={{height: '500px'}} />}
			googleMapElement = {
				<GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat, lng: props.lon }} />
			}
		/>
	);
}