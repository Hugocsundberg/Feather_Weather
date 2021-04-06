import React from 'react';
import styled from 'styled-components';
import DayContainer from './DayContainer';
import Text from './Text';

const Flex = styled.div`
    display: flex; 
    justify-content: space-between;
`

const Img = styled.img`
height: 4rem;
transform: translateX(-.6rem);
`

const Day = (props) => {
    return (
        <DayContainer top={"2rem"}>
            <Flex>
                <Img src={props.icon} alt={props.icon_Alt}/>
                <Text>{`${props.temprature}° ${props.day}`}</Text>
            </Flex>
        </DayContainer>        
    );
}

export default Day;
