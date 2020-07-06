import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

  

class Header extends Component {
    render() {
        return (
            <HeaderComponent className="header-container">
              <div className="header-top">
                <Logo src={logo}/>
                    <NavLink className="signIn-btn" to="/">Sing In</NavLink>
                </div>
            </HeaderComponent> 
        )
    }
}

export default Header;

//Logo
const Logo = styled.img`
    width: 10rem;
    height: 3.5rem;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate (-50%, -50%);
`;


// Header Container
const HeaderComponent = styled.div`
    .signIn-btn{
        right: 0;
        margin 1.125rem 3% 0;
        padding: 0.4375rem 1.0625rem;
        font-weight: 400;
        line-height: normal;
        border-radius: 0.1875rem;
        font-size: 1rem;
        background: var(--main-red);
        position: absolute;
        translate: transform(-50%, -50%);
        cursor: pointer;
        transition: background 0.2s ease-in;
        &:hover {
            background: var(--main-red-hover);
        }
    }

// Header top

    .header-top {
        position: relative;
        height: 3rem;
        z-index: 1;
    }

`

