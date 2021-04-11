import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: rgba(255, 255, 255, 0.90);
    border-radius: 10px;
    min-height: 2rem;
    margin-top: ${props => props.top};
    /* padding:.5rem 1.5rem 1rem 1.5rem; */
    padding: 1rem 1.5rem;
    margin-bottom: 1rem;
`

const DayContainer = (props) => {
    return (
        <Container>{props.children}</Container>
    );
}

export default DayContainer;