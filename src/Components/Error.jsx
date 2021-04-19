import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
    background: rgba(255, 35, 27, 0.881);
    backdrop-filter: blur(3px);
    position: absolute; 
    height: 3rem; 
    top: 0;
    left: 0;
    width: 100%;
    color: white;
    text-align: center;
    font-weight: bold;
`

const Error = (props) => {
    return (
        <ErrorContainer>
            <p>{props.children}</p>
        </ErrorContainer>
    );  
}

export default Error;
