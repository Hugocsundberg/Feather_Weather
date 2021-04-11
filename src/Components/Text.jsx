import React from 'react';
import styled from 'styled-components';

const P = styled.p`
    font-size: 26px;
    color: #939393;
    margin: 0; 
`

const Text = (props) => {
    return (
        <P>{props.children}</P>
    );
}

export default Text;
