import React from 'react';
import styled from 'styled-components';
import DayContainer from './DayContainer';
import Text from './Text';
import sunny from "../images/weather_icons/sunny.svg";

const FlexContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
`

const Img = styled.img`
height: 4rem;
transform: translateX(-.6rem);
`

const ImgSmall = styled.img`
height: 2rem;
`

const Top = styled.div`
    width: 100%;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    margin-top: -.5rem;
`

const BottomIcons = styled.div`
    width: 100%;
    display: flex; 
    justify-content: space-between;
`

const BottomHours = styled.div`
    width: calc(100% - 17px);
    display: flex; 
    justify-content: space-between;
`

const CenterDiv = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;
`

const P = styled.p`
    margin: 0;
`

const Today = (props) => {
    return (
        <DayContainer>
            <FlexContainer>
                <Top>
                    <Img src={props.icon} alt={props.icon_Alt}/>
                    <Text>Idag</Text>
                </Top>
                <BottomIcons>
                    <ImgSmall src={sunny} alt={'sun is shining bro'}/>
                    <ImgSmall src={sunny} alt={'sun is shining bro'}/>
                    <ImgSmall src={sunny} alt={'sun is shining bro'}/>
                    <ImgSmall src={sunny} alt={'sun is shining bro'}/>
                    <ImgSmall src={sunny} alt={'sun is shining bro'}/>
                    <ImgSmall src={sunny} alt={'sun is shining bro'}/>
                    <ImgSmall src={sunny} alt={'sun is shining bro'}/>
                    <ImgSmall src={sunny} alt={'sun is shining bro'}/>
                    <ImgSmall src={sunny} alt={'sun is shining bro'}/>
                </BottomIcons>
                <CenterDiv>
                    <BottomHours>
                        <P>09</P>
                        <P>10</P>
                        <P>11</P>
                        <P>12</P>
                        <P>13</P>
                        <P>14</P>
                        <P>15</P>
                        <P>16</P>
                        <P>17</P>
                    </BottomHours>
                </CenterDiv>
            </FlexContainer>
        </DayContainer>
    );
}

export default Today;
