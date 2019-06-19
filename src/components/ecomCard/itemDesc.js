import React from 'react';
import styled from 'styled-components';

const DescStyle = styled.div`
    visibility: ${props => props.hoverStyle ? "visible" : "hidden"};
    position: absolute;
    bottom: 0;
    width: 10em;
    height: 5em;
    background-color: azure;
`;

const pinStyles = {
    position: 'absolute',
    bottom: '0',
    width: '13vw',
    height: '5em',
    backgroundColor: 'azure'
}

export default function ItemDesc(props) {

    //(props.hoverStyle) ? console.log(props.hoverStyle): console.log("this check did not work");

    return (
        <DescStyle hoverStyle={props.hoverStyle}></DescStyle>
    )
}
