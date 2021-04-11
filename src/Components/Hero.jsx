import React from 'react';
import styled from 'styled-components';

const Temperature = styled.p`
font-size: 9.2rem;
color: white;
margin: 0;
`

const Hero = (props) => {
    return (
        <div>
            <Temperature>{`${props.temperature}°`}</Temperature>
        </div>
    );
}

export default Hero;
