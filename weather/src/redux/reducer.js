import {API} from "../api/api";

const SET_CITY_TITLE = 'SET_CITY_TITLE/weather'
const GET_CITY_COORD = 'GET_CITY_COORD/weather'
const GET_CITY_ID = 'GET_CITY_ID/weather'
const GET_CITY_CURRENT_TIME = 'GET_CITY_CURRENT_TIME/weather'
const GET_CITY_MAIN_WEATHER = 'GET_CITY_MAIN_WEATHER/weather'
const SET_MAP_CENTER = 'SET_MAP_CENTER/weather'

//Creation Action Creators
export const setCityTitle = (cityTitle) => ({type: SET_CITY_TITLE, cityTitle})
const getCityCoord = (cityCoord) => ({type: GET_CITY_COORD, cityCoord})
const getCityId = (cityId) => ({type: GET_CITY_ID, cityId})
const getCityTime = (cityTime) => ({type: GET_CITY_CURRENT_TIME, cityTime})
const getCityMainWeather = (mainWeather) => ({type: GET_CITY_MAIN_WEATHER, mainWeather})
const setMapCenter = (mapCenterCoordX, mapCenterCoordY) => ({type: SET_MAP_CENTER, mapCenterCoordX, mapCenterCoordY})



const initialState = {
    city: {
        title: null,
        coord: null,
        id: null,
        time: null},
        mapCenter: {lat:53.54, lng:27.30},
        mapZoom: 1,
        editCityMode: false
}

export const getCurrentWeatherTC = (cityTitle) => (dispatch) => {
    API.getCurrentWeatherData(cityTitle)
        .then(response => {
            console.log(response)
            dispatch(getCityCoord(response.data.coord))
            dispatch(getCityId(response.data.id))
            dispatch(getCityTime(response.data.dt))
            dispatch(getCityMainWeather(response.data.main))
            dispatch(setMapCenter(response.data.coord.lat, response.data.coord.lon))
        })
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY_TITLE:
            return {...state, city: {...state.city, title: action.cityTitle}}
        case GET_CITY_COORD:
            return {...state, city: {...state.city, coord: action.cityCoord}}
        case GET_CITY_ID:
            return {...state, city: {...state.city, id: action.cityId}}
        case GET_CITY_CURRENT_TIME:
            return {...state, city: {...state.city, time: action.cityTime}}
        case GET_CITY_MAIN_WEATHER:
            return {...state, city: {...state.city, mainWeather: action.mainWeather}}
        case SET_MAP_CENTER:
            return {...state, mapCenter: {lat: action.mapCenterCoordX, lng: action.mapCenterCoordY}, mapZoom: 7}
        default:
            return {...state}
    }
}

export default reducer