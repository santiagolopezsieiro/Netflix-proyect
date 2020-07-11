import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import { NavLink, Link } from 'react-router-dom'; // ¡¡
import styled from 'styled-components';// ¡¡
import { Icon } from 'react-icons-kit';

import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right'

import { Button } from './Button'


class Header extends Component {
    render() {
        return (
            <HeaderComponent className="header-container">
              <div className="header-top">
                <Logo src={logo}/>
                    <NavLink className="signIn-btn" to="/">Sing In</NavLink>
                </div>
                {/* {Header content} */}
                <div className="header-content">
                    <Title>See what's next</Title>
                    <Subtitle>WATCH ANYWHERE, CANCEL ANYTIME.</Subtitle>
                    <Button primary> 
                        try it now
                        <Icon className="iconbtn" icon={ic_keyboard_arrow_right} size={37} />
                    </Button>
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

//Header content
    .header-content {
        width:65%;
        position: relative;
        margin: 4.5rem auto 0;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        flex-direction: column;
        z-index: 1;
    }


    .iconbtn{
        display: inline-block;
        position: absolute;
    }
`;

//Main TItle

const Title = styled.h1`
    margin: 0 0 1.rem;
    font-size:5rem;
    font-weight: 700;
    line-height: 1.1em;
`;


//subtitle

const Subtitle = styled.h2`
    font-weight: 400;
    font-size: 1.875rem;
    line-height:1.25rem;
    margin:0 0 1.875rem;
    text-transform: uppercase;    
`;