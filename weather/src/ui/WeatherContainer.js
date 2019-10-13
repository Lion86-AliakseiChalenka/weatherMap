import React from 'react'
import {connect} from 'react-redux'
import Weather from "./Weather";
import {setCityTitle, getCurrentWeatherTC} from "../redux/reducer";

class WeatherContainer extends React.PureComponent {
    render() {
        return (
            <Weather {...this.props}/>
        )
    }
}

const mstp = (state) => ({
        city: state.reducer.city,
        mapCenter: state.reducer.mapCenter,
        mapZoom: state.reducer.mapZoom,
        editCityMode: state.reducer.editCityMode
    }
)

export default connect(mstp, {setCityTitle, getCurrentWeatherTC})(WeatherContainer)