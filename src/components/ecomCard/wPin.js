import React from 'react';
import styled from 'styled-components';

const StylePin = styled.div`
    visibility: ${props => props.hoverStyle ? "visible" : "hidden"};
    position: relative;
    width: 1.5em;
    height: 1.5em;
    background-color: cadetblue;
`;

export default function Wpin(props){

    return(
        <StylePin hoverStyle={props.hoverStyle}></StylePin>
    )

}