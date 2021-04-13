import React from 'react';
import styled from 'styled-components';
import reloadIcon from '../images/reload.svg'
import { reload } from '../functions'
import { getSunTime, getSunIcon } from '../functions';


const Temperature = styled.p`
font-size: 9.2rem;
color: white;
margin: 0;
`

const Reload = styled.img`
position: absolute;
right: 0.5rem;
top: 3.2rem;
height: 1.4rem;
transition: .5s;
:hover {
    transform: rotate(90deg);
}
:active {
    transform: rotate(360deg);
}
`

const Container = styled.div`
    position: relative;
`

const IconContainer = styled.div`
    position: absolute;
    right: 0.3rem;
    bottom: 1.2rem;
`

const P = styled.p`
    color: white; 
    position: absolute;
    right: 2.9rem;
    bottom: 0.9rem;
`

const ReloadButtonContainer = styled.button`

`

const Hero = (props) => {
    return (
        <Container>
            <Temperature>{`${props.temperature}°`}</Temperature>
            <P>{`${getSunTime(props.sunup, props.sundown, props.dayafter)}`}</P>
            <IconContainer>{getSunIcon(props.sunup, props.sundown, '2rem')}</IconContainer> 
            <ReloadButtonContainer onClick={reload} onTouchStart={reload}><Reload src={reloadIcon}></Reload></ReloadButtonContainer>
        </Container>
    );
}

export default Hero;
