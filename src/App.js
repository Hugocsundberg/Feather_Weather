import styled from "styled-components";
import Day from "./Components/Day";
import Hero from "./Components/Hero";
import Today from "./Components/Today";
import { getLocation, getCurrentWeather } from "./functions"
import useEffect from "react"

import sunny from "./images/weather_icons/sunny.svg";
let temperature = 0;
  
 getLocation().then((data)=> {
    getCurrentWeather(data.coords.latitude, data.coords.longitude, (data)=>{
      console.log(data)
   })
 })

const Main = styled.div`
  background: skyblue;
  min-height: 100vh;
  width: calc(100vw -4rem);
  padding: 2rem;
` 

function App() {
  return (
    <Main>
      <Hero temperature="19"></Hero>
      <Today icon={sunny}/>
      <Day icon={sunny} temperature="22" day="Ti"/>
    </Main>
  );
}

export default App;
