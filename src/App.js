import styled from "styled-components";
import Day from "./Components/Day";
import Hero from "./Components/Hero";
import Today from "./Components/Today";
import { getLocation, getCurrentWeather } from "./functions"
import { useEffect, useState } from "react"

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

const iconMap = {
  "10n": rain
}

const Main = styled.div`
  background: skyblue;
  min-height: 100vh;
  width: calc(100vw -4rem);
  padding: 2rem;
` 

function App() {
  const [today, settoday] = useState();

  useEffect(()=>{
    getLocation().then((data)=> {
      getCurrentWeather(data.coords.latitude, data.coords.longitude, (data)=>{
        settoday(data)
     })
   })
  }, [])

 useEffect(()=>{
  console.log('Today:')
  console.log(today)
}, [today])

  return (
    <Main>
      <Hero temperature={today ? today.main.temp : '-'}></Hero>
      <Today icon={iconMap["10n"]}/>
      <Day icon={sunny} temperature="22" day="Ti"/>
    </Main>
  );
}

export default App;
