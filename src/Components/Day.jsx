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
`

const Day = (props) => {
    return (
        <DayContainer top={"2rem"}>
            <Flex>
                <Flex>
                    <FixWidth>
                        <Img src={props.icon} alt={props.icon_Alt}/>
                    </FixWidth>
                    <FixWidth>
                        <Text align={'left'}>{`${props.temperature}°`}</Text>
                        <Text top=".3rem" align={'left'} size="1rem">{`${Math.round(props.wind)}m/s`}</Text>
                    </FixWidth>
                </Flex>
                    <FixWidth>
                        <Text align={'right'}>{`${props.day}`}</Text>
                    </FixWidth>
            </Flex>
        </DayContainer>        
    );
}

export default Day;
