import React from 'react';
import styled from 'styled-components';

const P = styled.p`
    font-size: ${props => props.size || '1.6rem'};
    color: #939393;
    margin: 0; 
    margin-top: ${props => props.top || "unset"};
    text-align: ${props => props.align};
`

const Text = (props) => {
    return (
        <P top={props.top} align={props.align} size={props.size}>{props.children}</P>
    );
}

export default Text;
