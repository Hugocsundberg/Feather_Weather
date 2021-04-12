import styled from "styled-components";
import Day from "./Components/Day";
import Hero from "./Components/Hero";
import Today from "./Components/Today";
import { getLocation, getCurrentWeather, getIcon, getBackground } from "./functions"
import { useEffect, useState } from "react"
import unknown from "./images/weather_icons/unknown.svg"
import Loading from "./Components/Loading";

const Main = styled.div`
  display: flex; 
  justify-content: center;
  background: ${props => props.background};
  min-height: 100vh;
  padding: 2rem;
` 

const Container = styled.div`
  max-width: 40rem;
  width: calc(100vw - 4rem);
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
//background={getBackground(weather.current.iconId)}
  return (
    <Main background={getBackground(weather ? weather.current.weather[0].icon : '')}>
      <Container>
        {weather ? "" : <Loading>Fetching data</Loading>}
        <Hero temperature={weather ? Math.round(weather.current.temp) : '-'}></Hero>
        <Today wind={weather ? weather.current.wind_speed : '-'} hourly={weather ? weather.hourly : undefined} icon={weather ? getIcon(weather.current.weather[0].icon) : unknown}/>
        {weather ? weather.daily.map((day, index)=>(
        <Day key={index} wind={day.wind_speed} icon={getIcon(day.weather[0].icon)} temperature={Math.round(day.temp.day)} day={weekDays[new Date(day.dt * 1000).getDay()]}/>
        )) : ""}
      </Container>
    </Main>
  );
}

export default App;
