import styled from "styled-components";
import Day from "./Components/Day";
import Hero from "./Components/Hero";
import Today from "./Components/Today";
import { getLocation, getCurrentWeather, getIcon, getBackground, getCityFromCoords, reload } from "./functions"
import { useEffect, useState } from "react"
import Loading from "./Components/Loading";

const Main = styled.div`
  display: flex; 
  justify-content: center;
  background: ${props => props.background};
  min-height: 100vh;
  padding: 2rem;
` 

const Location = styled.p`
  color: white; 
  font-size: 0.9rem;
  margin: 0;
`

const Container = styled.div`
  max-width: 40rem;
  width: calc(100vw - 4rem);
`

function App() {
  const [weather, setweather] = useState();
  const [city, setcity] = useState();
  const [lastReload] = useState(Date.now());

    const onFocus = () => {
        if(Date.now() - lastReload > (10 * 60 * 1000)) {
          reload()
        }
    }
  
  useEffect(()=>{
    getLocation().then((data)=> {
      console.log(`lat: ${data.coords.latitude} long: ${data.coords.longitude}`)
      getCurrentWeather(data.coords.latitude, data.coords.longitude, (data)=>{
        setweather(data)
      })
      getCityFromCoords(data.coords.latitude, data.coords.longitude)
      .then(data => setcity(data))
   })

   window.addEventListener('focus', onFocus)
   
   return () => {
    window.removeEventListener('focus', onFocus)
   };
  }, [])

  //Logs for debugging purpuse
 useEffect(()=>{
   if(weather) {
     console.log('Weather:')
     console.log(weather)
   }
}, [weather])
 useEffect(()=>{
   if(city) {
     console.log('City:')
     console.log(city)
   }
}, [city])

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
        {weather ?
        <>
          <Location>{city ? (city.address.neighbourhood ?? city.address.suburb ?? city.address.city) : ''}</Location>
          <Hero dayafter={weather.daily[1]} sunup={weather.current.sunrise} sundown={weather.current.sunset} temperature={Math.round(weather.current.temp)}></Hero>
          <Today wind={weather.current.wind_speed} hourly={weather.hourly} icon={getIcon(weather.current.weather[0].icon)}/>
          {weather.daily.map((day, index)=>(
          <Day description={day.weather[0].description} key={index} wind={day.wind_speed} icon={getIcon(day.weather[0].icon)} temperature={Math.round(day.temp.day)} day={weekDays[new Date(day.dt * 1000).getDay()]}/>  
          ))}
          <p>Källa: <a href="https://openweathermap.org/">Openweathermap</a></p>
        </> 
        : <Loading>Fetching data</Loading>}
      </Container>
    </Main>
  );
}

export default App;
