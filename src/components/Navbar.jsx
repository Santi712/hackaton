import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
h2 {
    font-weight: 400;
    span {
    font-weight: bold;
    }
    }
    padding: 0.4rem;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

function Navbar() {
    return (
        <NavContainer>
            <h2>
                NavBar
                <span>Responsive</span>
            </h2>
            <div>
                <a href="/">Home</a>
                <a href="/">Contact</a>
                <a href="/">Blog</a>
            </div>
        </NavContainer>
    );
}

export default Navbar;
