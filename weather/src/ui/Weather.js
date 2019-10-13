import React from 'react'

import GoogleMap from 'google-map-react';
import WeatherRequestForm from "./WeatherRequestForm";

let Weather = (props) => {
    return (
        <div style={{height: '100vh', width: '100%'}}>
            <GoogleMap onClick={(e) => {console.log(e)}}
                       bootstrapURLKeys={{key: 'AIzaSyC2fqKZapPvpfprkOs_sPPDJYhnEW5iHT0'}}
                       center={props.mapCenter}
                       zoom={props.mapZoom}
                       yesIWantToUseGoogleMapApiInternals>
                <WeatherRequestForm {...props}
                                    lat={props.mapCenter.lat}
                                    lng={props.mapCenter.lng}
                />
            </GoogleMap>
        </div>
    )
}


export default Weather