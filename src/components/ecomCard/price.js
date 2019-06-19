import React from 'react';
import styled from 'styled-components';

const StylePrice = styled.div`
    visibility: ${props => props.hoverStyle ? "visible" : "hidden"};
    position: relative;
    width: 2em;
    height: 10em;
    background-color: aliceblue;
    z-index: 100;
    float: right;
`;

const priceStyle = {
    position: 'relative',
    width: '2em',
    height: '14em',
    backgroundColor: 'aliceblue',
    zIndex: '100',
    float: 'right'
}

export default function Price(props) {
    //(props.hoverStyle) ? console.log(props.hoverStyle) : console.log("this check did not work");
    
    return (
        <StylePrice hoverStyle={props.hoverStyle}></StylePrice>
    )
}
