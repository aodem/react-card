import React from 'react';
import styled from 'styled-components';


const StyledItem = styled.li`
    display: block;
    float: left;
    background: ${props => props.primary ? "grey" : "blue"};
    color: white;


`;

const ListItem = (props) => {

    return (
        <StyledItem>{props.children}</StyledItem>
    )

}

export default ListItem;