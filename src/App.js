import styled from "styled-components";
import Day from "./Components/Day";
import Hero from "./Components/Hero";
import Today from "./Components/Today";
import { getLocation, getCurrentWeather, getIcon, getBackground, getCityFromCoords, reload } from "./functions"
import { useEffect, useState } from "react"
import Loading from "./Components/Loading";
import Error from "./Components/Error";

const Main = styled.div`
  display: flex; 
  justify-content: center;
  background: ${props => props.background};
  min-height: 100vh;
  padding: 2rem;
  animation: fadeIn 2s both;
` 

const Location = styled.p`
  color: white; 
  font-size: 0.9rem;
  margin: 0;
`

  const Container = styled.div`
    max-width: 40rem;
    width: calc(100vw - 4rem);
    opacity: 0;
    ${props => props.weather ? `opacity: 1; transition: 2s;` : `opacity: 0;`
  }
  `

function App() {
  const [weather, setweather] = useState();
  const [city, setcity] = useState();
  const [lastReload] = useState(Date.now());
  const [errorMessage, seterrorMessage] = useState(undefined);
  const [weatherLoaded, setweatherLoaded] = useState(false);
  const [dailyForecast, setdailyForecast] = useState();

    const onFocus = () => {
        if(Date.now() - lastReload > (10 * 60 * 1000)) {
          reload()
        }
    }
  
  useEffect(()=>{
    // console.log(weatherLoaded)
    getLocation().then(data=> {
      getCurrentWeather(data.coords.latitude, data.coords.longitude, (data)=>{
        setweather(data)
        let dailyArray = []
        for(let i = 1; i < 8; i++) {
          dailyArray.push(data.daily[i])
        }
        setdailyForecast(dailyArray)
        setTimeout(() => {
          setweatherLoaded(true)        
        }, 1);
      })
      getCityFromCoords(data.coords.latitude, data.coords.longitude)
      .then(data => setcity(data))
   }).catch(data=>seterrorMessage(data))

   window.addEventListener('focus', onFocus)
   
   return () => {
    window.removeEventListener('focus', onFocus)
   };
  }, [])

  //Logs for debugging purpuse
//  useEffect(()=>{
//    if(weather) {
//      console.log('Weather:')
//      console.log(weather)
//    }
// }, [weather])
//  useEffect(()=>{
//    if(city) {
//      console.log('City:')
//      console.log(city)
//    }
// }, [city])
//  useEffect(()=>{
//    if(city) {
//      console.log('WeatherLoaded:')
//      console.log(weatherLoaded)
//    }
// }, [weatherLoaded])

const weekDays = [
  'Sö',
  'Må', 
  'Ti',
  'On',
  'To',
  'Fr',
  'Lö',
]
//background={getBackground(weather.current.iconId)}
  return (
    <Main background={getBackground(weather ? weather.current.weather[0].icon : '')}>
        {weather ?
      <Container weather={weatherLoaded}>
        <>
          <Location>{city ? (city.address.suburb && city.address.city ? `${city.address.suburb}, ${city.address.city}` : city.address.suburb ?? city.address.city ?? city.address.neighbourhood) : ''}</Location>
          <Hero dayafter={weather.daily[1]} sunup={weather.current.sunrise} sundown={weather.current.sunset} temperature={Math.round(weather.current.temp)}></Hero>
          <Today description={weather.current.weather[0].description} wind={weather.current.wind_speed} hourly={weather.hourly} icon={getIcon(weather.current.weather[0].icon)}/>
          {dailyForecast ? dailyForecast.map((day, index)=>(
            <Day description={day.weather[0].description} key={index} wind={day.wind_speed} icon={getIcon(day.weather[0].icon)} temperature={Math.round(day.temp.day)} day={weekDays[new Date(day.dt * 1000).getDay()]}/>  
            )) : ''}
          <p>Källa: <a href="https://openweathermap.org/">Openweathermap</a></p>
        </> 
      </Container>
        :
        <Container weather={true}>
          <Loading>Fetching data</Loading>
          {errorMessage ? <Error>{errorMessage}</Error> : ''}
        </Container>}
    </Main>
  );
}

export default App;
