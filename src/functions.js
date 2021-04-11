import sunny from "./images/weather_icons/sunny.svg";
import cloudy from "./images/weather_icons/cloudy.svg";
import fog from "./images/weather_icons/fog.svg";
import mostlycloudy from "./images/weather_icons/mostlycloudy.svg";
import mostlysunny from "./images/weather_icons/mostlysunny.svg";
import rain from "./images/weather_icons/rain.svg";
import snow from "./images/weather_icons/snow.svg";
import tstorms from "./images/weather_icons/tstorms.svg";
//Nt
import nt_sunny from "./images/weather_icons/nt_sunny.svg";
import nt_cloudy from "./images/weather_icons/nt_cloudy.svg";
import nt_fog from "./images/weather_icons/nt_fog.svg";
import nt_mostlycloudy from "./images/weather_icons/nt_mostlycloudy.svg";
import nt_mostlysunny from "./images/weather_icons/nt_mostlysunny.svg";
import nt_rain from "./images/weather_icons/nt_rain.svg";
import nt_snow from "./images/weather_icons/nt_snow.svg";
import nt_tstorms from "./images/weather_icons/nt_tstorms.svg";
//Unknown
import unknown from "./images/weather_icons/unknown.svg"

export const getIcon = (weatherCode) => {
    switch(weatherCode) {
        case "01d": 
            return sunny;
        case "01n": 
            return nt_sunny;
        case "02d": 
            return mostlysunny;
        case "02n": 
            return nt_mostlysunny;
        case "03d": 
            return mostlycloudy;
        case "03n": 
            return nt_mostlycloudy;
        case "04d": 
            return cloudy;
        case "04n": 
            return nt_cloudy;
        case "09d": 
            return rain;
        case "09n": 
            return nt_rain;
        case "10d": 
            return rain;
        case "10n": 
            return nt_rain;
        case "11d": 
            return tstorms;
        case "11n": 
            return nt_tstorms;
        case "13d": 
            return snow;
        case "13n": 
            return nt_snow;
        case "50d": 
            return nt_sunny;
        case "50n": 
            return nt_sunny;
        default: return unknown;
    }
}

export const getLocation = () => {
    const p = new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(data => {
            resolve(data);
        }, ()=>{reject("Not able to get position")})
    })
    return p
}

export const getCurrentWeather = (lat, lon, callback) => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=57.643231&lon=11.935971&exclude=minutely&appid=b47c691c8a0f75f611910b34d9884500&units=metric`)
    .then(data => data.json()) //stream=> stream.json()
    .then(data => {
        callback(data)
    })
}
