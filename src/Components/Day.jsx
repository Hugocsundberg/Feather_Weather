import React from 'react';
import styled from 'styled-components';
import DayContainer from './DayContainer';
import Text from './Text';

const Flex = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
`
const FlexHighLow = styled.div`
    display: flex; 
    justify-content: flex-start;
    align-items: baseline;
    column-gap: .3rem;
`

const Img = styled.img`
height: 4rem;
transform: translateX(-.6rem);
`

const FixWidth = styled.div`
    width: 4rem;
`

const High = styled.p`
    font-size: 1.5rem;
    color: rgba(240, 69, 26, 0.7);
    width: auto;
    margin: 0;
`
const Low = styled.p`
    font-size: 1rem;
    color: rgba(91, 170, 203, 0.7);
    width: auto;
    margin-left: 1rem;
    margin: 0;
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
                        <FlexHighLow>
                            <High>{`${props.high}°`}</High>
                            <Low>{`${props.low}°`}</Low>
                        </FlexHighLow>
                        <Text top=".3rem" align={'left'} size="1rem">{`${Math.round(props.wind)}m/s`}</Text>
                    </FixWidth>
                </Flex>
                <Text size="1rem">{props.description}</Text>
                <FixWidth>
                    <Text align={'right'}>{`${props.day}`}</Text>
                </FixWidth>
            </Flex>
        </DayContainer>        
    );
}

export default Day;
