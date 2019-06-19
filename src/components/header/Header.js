import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.p`
    background: yellow;
    color: black;
    width: 100%;
    margin: 0;
`;

class Header extends React.Component {
    render() {
        return (
            <div>
            <StyledHeader>Header</StyledHeader>
            </div>
        )
    }
}

export default Header;