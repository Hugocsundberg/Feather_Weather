import React from 'react';
import styled from 'styled-components';
import DayContainer from './DayContainer';
import Text from './Text';

const Flex = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
`

const Img = styled.img`
height: 4rem;
transform: translateX(-.6rem);
`

const FixWidth = styled.div`
    width: 4rem;
    text-align: right;
`

const Day = (props) => {
    return (
        <DayContainer top={"2rem"}>
            <Flex>
                <Img src={props.icon} alt={props.icon_Alt}/>
                <Flex>
                    <FixWidth>
                        <Text>{`${props.temperature}°`}</Text>
                    </FixWidth>
                    <FixWidth>
                        <Text>{`${props.day}`}</Text>
                    </FixWidth>
                </Flex>
            </Flex>
        </DayContainer>        
    );
}

export default Day;
