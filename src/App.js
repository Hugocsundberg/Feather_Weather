import styled from "styled-components";
import Day from "./Components/Day";
import Hero from "./Components/Hero";
import Today from "./Components/Today";
import { getLocation, getCurrentWeather, getIcon } from "./functions"
import { useEffect, useState } from "react"
import unknown from "./images/weather_icons/unknown.svg"

const Main = styled.div`
  background: skyblue;
  min-height: 100vh;
  width: calc(100vw -4rem);
  padding: 2rem;
` 

function App() {
  const [weather, setweather] = useState();

  useEffect(()=>{
    getLocation().then((data)=> {
      console.log(`lat: ${data.coords.latitude} long: ${data.coords.longitude}`)
      getCurrentWeather(data.coords.latitude, data.coords.longitude, (data)=>{
        setweather(data)
     })
   })
  }, [])

 useEffect(()=>{
   if(weather) {
     console.log('Weather:')
     console.log(weather)
   }
}, [weather])

const weekDays = [
  'Må', 
  'Ti',
  'On',
  'To',
  'Fr',
  'Lö',
  'Sö',
]

  return (
    <Main>
      {/* {weather ? "" : <Loading></Loading>} */}
      <Hero temperature={weather ? Math.round(weather.current.temp) : '-'}></Hero>
      <Today wind={weather ? weather.current.wind_speed : '-'} hourly={weather ? weather.hourly : undefined} icon={weather ? getIcon(weather.current.weather[0].icon) : unknown}/>
      {weather ? weather.daily.map((day)=>(
      <Day wind={day.wind_speed} icon={getIcon(day.weather[0].icon)} temperature={Math.round(day.temp.day)} day={weekDays[new Date(day.dt * 1000).getDay()]}/>
      )) : ""}
    </Main>
  );
}

export default App;
