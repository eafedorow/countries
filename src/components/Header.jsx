import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {Container} from "./Container";
import {IoMoon, IoMoonOutline} from 'react-icons/io5'
import {Link} from "react-router-dom";

const HeaderElement = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
  transition: 0.3s ease-in-out;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
`;

const Title = styled(Link).attrs({
    to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
`;

const ThemeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    text-transform: capitalize;
`;

const Header = () => {

    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <HeaderElement>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ThemeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? (
                            <IoMoonOutline size="14px"/>
                        ) : (
                            <IoMoon size="14px"/>
                        )}
                        <span style={{marginLeft: '0.75rem'}}>{theme} Theme</span>
                    </ThemeSwitcher>
                </Wrapper>
            </Container>
        </HeaderElement>
    );
};

export default Header;