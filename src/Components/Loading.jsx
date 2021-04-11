import React from 'react';
import styled from 'styled-components';
import loader from '../images/weather_icons/loader.svg'

const Center = styled.div`
    height: calc(100vh - 4rem);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
`

// const P = styled.p`
//     color: white; 
//     font-size: 2rem;
// `

const Img = styled.img`
    height: 10rem;
    width: 10rem;
    animation: spin 1s linear infinite;
`

const Loading = (props) => {
    return (
        <Center>
            <Img src={loader} />
            {/* <P>{props.children}</P> */}
        </Center>
    );
}

export default Loading;
