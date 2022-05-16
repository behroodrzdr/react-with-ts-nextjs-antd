import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Menu from './Menu';

const Navbar = () => {
    const Wrapper = styled.div`
        z-index: 999;
    `;
    return (
        <Wrapper>
          <Header />
          <Menu />
        </Wrapper>
    )
};

export default Navbar;