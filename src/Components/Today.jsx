import { React } from 'react';
import { useEffect, useState } from "react"
import styled from 'styled-components';
import DayContainer from './DayContainer';
import Text from './Text';
import { getIcon } from '../functions';


const FlexContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
`

const Img = styled.img`
height: 4rem;
transform: translateX(-.6rem);
`

const ImgSmall = styled.img`
height: 2rem;
`

const Top = styled.div`
    width: 100%;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    margin-top: -.5rem;
`

const BottomIcons = styled.div`
    width: 100%;
    display: flex; 
    justify-content: space-between;
`

const BottomTemperature = styled.div`
    margin-top: 1rem;
    width: calc(100% - 14px);
    display: flex; 
    justify-content: space-between;
    transform: translateX(4px)
`

const BottomHours = styled.div`
    width: calc(100% - 17px);
    display: flex; 
    justify-content: space-between;
    margin-top: .8rem;
    color: gray;
`

const CenterDiv = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;
`

const P = styled.p`
    margin: 0;
`

const Today = (props) => {

    const nineHours = []
    if(props.hourly) {
        for(let i = 1; i < 10; i++) {
            nineHours.push(props.hourly[i])
            console.log(props.hourly[i])
        }
    }
    
    return (
        <DayContainer>
            <FlexContainer>
                <Top>
                    <Img src={props.icon} alt={props.icon_Alt}/>
                    <Text>Nu</Text>
                </Top>
                <CenterDiv>
                    <BottomTemperature>
                    {nineHours.map((day, index) => (
                            <P key={index}>{`${Math.round(day.temp)}°`}</P>
                        ))}
                    </BottomTemperature>
                </CenterDiv>
                <BottomIcons>
                    {nineHours.map((day, index) => (
                        <ImgSmall key={index} src={getIcon(day.weather[0].icon)} alt={`weather is: ${day.weather[0].description}`}/>                
                    ))}
                </BottomIcons>
                <CenterDiv>
                    <BottomHours>
                    {nineHours.map((day, index) => (
                        <P key={index}>{new Date(day.dt * 1000).getHours() < 10 ? `0${new Date(day.dt * 1000).getHours()}` : new Date(day.dt * 1000).getHours()}</P> //<ImgSmall  src={getIcon(day.weather[0].icon)} alt={`weather is: ${day.weather[0].description}`}/>                
                    ))}
                    </BottomHours>
                </CenterDiv>
            </FlexContainer>
        </DayContainer>
    );
}

export default Today;
