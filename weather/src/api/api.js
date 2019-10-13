import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://community-open-weather-map.p.rapidapi.com/weather',
    headers: {
       'X-RapidAPI-Key': 'dc3ac879cemsh377f613678c2008p1541dbjsn784b533ffb37',
       'X-RapidAPI-Host' : 'community-open-weather-map.p.rapidapi.com'
    }
})

export const API = {
    getCurrentWeatherData: (city) => instance.get(`?q=${city}`)
}

