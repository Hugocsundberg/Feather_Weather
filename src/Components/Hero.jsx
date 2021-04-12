import React from 'react';
import styled from 'styled-components';
import reloadIcon from '../images/reload.svg'
import { reload } from '../functions'

const Temperature = styled.p`
font-size: 9.2rem;
color: white;
margin: 0;
`

const Reload = styled.img`
position: absolute;
right: 0.5rem;
top: 3.2rem;
transition: .5s;
cursor: pointer;
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

const Hero = (props) => {
    return (
        <Container>
            <Temperature>{`${props.temperature}°`}</Temperature>
            <Reload onClick={reload} onTouchStart={reload} src={reloadIcon}></Reload>
        </Container>
    );
}

export default Hero;
