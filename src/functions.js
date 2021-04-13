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
//Other
import { WiSunrise, WiSunset } from "react-icons/wi";

export const getIcon = (iconId) => {
    switch(iconId) {
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
            return fog;
        case "50n": 
            return nt_fog;
        default: return unknown;
    }
}

export const getBackground = (iconId) => {
    switch(iconId) {
        case "01d": 
            return 'linear-gradient(180deg, #00A3FF 0%, rgba(255, 255, 255, 0) 100%)';
        case "01n": 
            return 'linear-gradient(180deg, #332F47 0%, rgba(255, 255, 255, 0) 100%)'
        case "02d": 
            return 'linear-gradient(180deg, #00A3FF 0%, rgba(255, 255, 255, 0) 100%)';
        case "02n": 
            return 'linear-gradient(180deg, #332F47 0%, rgba(255, 255, 255, 0) 100%)'
        case "03d": 
            return 'linear-gradient(180deg, #8A8A8A 0%, rgba(255, 255, 255, 0) 100%)';
        case "03n": 
            return 'linear-gradient(180deg, #332F47 0%, rgba(255, 255, 255, 0) 100%)'
        case "04d": 
            return 'linear-gradient(180deg, #8A8A8A 0%, rgba(255, 255, 255, 0) 100%)';
        case "04n": 
            return 'linear-gradient(180deg, #332F47 0%, rgba(255, 255, 255, 0) 100%)'
        case "09d": 
            return 'linear-gradient(180deg, #2F6380 0%, rgba(255, 255, 255, 0) 100%)';
        case "09n": 
            return 'linear-gradient(180deg, #332F47 0%, rgba(255, 255, 255, 0) 100%)'
        case "10d": 
            return 'linear-gradient(180deg, #2F6380 0%, rgba(255, 255, 255, 0) 100%)';
        case "10n": 
            return 'linear-gradient(180deg, #332F47 0%, rgba(255, 255, 255, 0) 100%)'
        case "11d": 
            return 'linear-gradient(180deg, #160054 0%, rgba(255, 255, 255, 0) 100%)';
        case "11n": 
            return 'linear-gradient(180deg, #332F47 0%, rgba(255, 255, 255, 0) 100%)'
        case "13d": 
            return 'linear-gradient(180deg, #8A8A8A 0%, rgba(255, 255, 255, 0) 100%)';
        case "13n": 
            return 'linear-gradient(180deg, #332F47 0%, rgba(255, 255, 255, 0) 100%)'
        case "50d": 
            return 'linear-gradient(180deg, #8A8A8A 0%, rgba(255, 255, 255, 0) 100%)';
        case "50n": 
            return 'linear-gradient(180deg, #332F47 0%, rgba(255, 255, 255, 0) 100%)'
        default: return 'linear-gradient(180deg, #00A3FF 0%, rgba(255, 255, 255, 0) 100%)'
        ;
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
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=57.643231&lon=11.935971&exclude=minutely&lang=se&appid=b47c691c8a0f75f611910b34d9884500&units=metric`)
    .then(data => data.json()) //stream=> stream.json()
    .then(data => {
        callback(data)
    })
}

export const getCityFromCoords = (lat, lon) => {
    const p = new Promise((resolve)=>{
        fetch(`https://eu1.locationiq.com/v1/reverse.php?key=pk.2cda453ffc73e0de3cd65863fccb3406&accept-language=native&lat=${lat}&lon=${lon}&format=json`)
        .then(data => data.json())
        .then(data => resolve(data))
    })
    return p
}

export const reload = () => {
    navigator.vibrate(30);
    window.location.reload();
}

export const getSunTime = (sunup, sundown, nextSunrise) => {
    //Returns hours until sun, and expects timestamp in seconds
    if(Date.now() < sunup * 1000) {
        //Before sunrise
        return `Soluppgång: ${Math.round(((sunup * 1000) - Date.now()) / 1000 / 60 / 60)}h`
    } else if(Date.now() > sunup * 1000 && Date.now() < sundown * 1000) {
        //after sunrise, before sunset
        return `Solnedgång: ${Math.round(((sundown * 1000) - Date.now()) / 1000 / 60 / 60)}h`
    } else {
        //after sunset
        return `Soluppgång: ${Math.round(((nextSunrise * 1000) - Date.now()) / 1000 / 60 / 60)}h`
    }
}
export const getSunIcon = (sunup, sundown, size) => {
    //Returns sunrise or sunset image, and expects timestamp in seconds
    if(Date.now() < sunup * 1000) {
        //Before sunrise
        return <WiSunrise size={size} color="white"/>
    } else if(Date.now() > sunup * 1000 && Date.now() < sundown * 1000) {
        //after sunrise, before sunset
        return <WiSunset size={size} color="white"/>
    } else {
        //after sunset
        return <WiSunrise size={size} color="white"/>
    }
}
