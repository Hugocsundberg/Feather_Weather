import React from 'react';
import styled from 'styled-components';
import loader from '../images/weather_icons/loader.svg'
import loadercloud from '../images/weather_icons/loadercloud.svg'


const Center = styled.div`
    height: calc(100vh - 4rem);
    width: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
`

// const P = styled.p`
//     color: white; 
//     font-size: 2rem;
// `

const TravelImg = styled.img`
    height: 10rem;
    width: 10rem;
    animation: travel 4s linear infinite;
    position: absolute;
    left: -10rem;
    top: 50%;
`
const TravelImg2 = styled.img`
    height: 10rem;
    width: 10rem;
    animation: travel 4s 2s linear infinite;
    position: absolute;
    left: -10rem;
    top: 30%;
`

const Img = styled.img`
    height: 10rem;
    width: 10rem;
    animation: spin 1s linear infinite;
`

const Loading = (props) => {
    return (
        <Center>
            <Img src={loader} />
            <TravelImg src={loadercloud} />
            <TravelImg2 src={loadercloud} />
            {/* <P>{props.children}</P> */}
        </Center>
    );
}

export default Loading;
