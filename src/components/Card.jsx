import React from 'react'
import styled from 'styled-components';

const Container=styled.div`
position: fixed;
    top: 0;
    left: 0;
    transform: translate(calc(50vw - 50%), calc(50vh - 50%));

`
const CardImg=styled.img`
background: no-repeat;
    height: 150px;
    width: 200px;

`
const Description=styled.p`
width: 42%;
font-size: 16px;
`
const LearnMore=styled.button`
height: 30px;
    color: #fff;
    background-color: #3da942;
    outline: none;
    border: none;
    border-radius: 7px;`

export const Card = () => {
    return (
        <Container >
            <div>
                <CardImg  src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752" alt=""/>
            </div>
            <div>
                <Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid voluptas alias sequi ducimus? </Description>

            </div>
            <div>
                <LearnMore>Learn More</LearnMore>
            </div>
        </Container>
    )
}
