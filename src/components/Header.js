import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import { NavLink, Link } from 'react-router-dom'; // ¡¡
import styled from 'styled-components';// ¡¡
import { Icon } from 'react-icons-kit';

import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right';

import { Button } from './Button';

// Media Query
import { generateMedia } from "styled-media-query";


class Header extends Component {
    render() {
        return (
            <HeaderComponent className="header-container">
              <div className="header-top">
                <Logo src={logo}/>
                    <NavLink className="signIn-btn" to="/Login">Sing In</NavLink>
                </div>
                {/* {Header content} */}
                <div className="header-content">
                    <Title>See what's next</Title>
                    <Subtitle>WATCH ANYWHERE, CANCEL ANYTIME.</Subtitle>
                    <Button className="main-offer-btn" primary> 
                        try it now
                        <Icon className="Icon" icon={ic_keyboard_arrow_right} size={37} />
                    </Button>
                </div>
            </HeaderComponent> 
        )
    }
}

export default Header;

const customMedia = generateMedia({
    lgDesktop: '1350px',
    mdDesktop: '1150px',
    tablet: '960px',
    smTablet: '740px'
})


//Logo
const Logo = styled.img`
    width: 10rem;
    height: 3.5rem;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-left: 0;
    margin-top 2rem;
    ${customMedia.lessThan('tablet')`
        left:20%
    `}
`;


// Header Container
const HeaderComponent = styled.header`

.Icon svg {
    vertical-align: bottom !important;
    margin-left: 1.5rem;
    ${customMedia.lessThan('smTablet')`
        display: none !important;
    `}
}

    .signIn-btn {
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
            background: #d30913;
        }
        ${customMedia.lessThan('smTablet')`
            margin-top: 1.25rem;
            right: 5%;
        `}
    }

// Header top
    .header-top {
        position: relative;
        height: 3rem;
        z-index: 1;
    }

//Header content
    .header-content {
        width: 65%;
        position: relative;
        margin: 4.5rem auto 0;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        flex-direction: column;
        z-index: 2;
        ${customMedia.lessThan('smTablet')`
            display: grid;

        `}
    }

    .main-offer-btn{
        ${customMedia.lessThan('lgDesktop')`
            margin: 0 33%;
            font-size: 1.5rem;
        `}
            ${customMedia.lessThan('mdDesktop')`
            margin: 0 25%;
            font-size: 1.5rem;
        `}
            ${customMedia.lessThan('tablet')`
            margin: 0 20%;
            font-size: 1.3rem;
        `}
    }
 `;

//Main TItle
const Title = styled.h1`
    margin: 0 0 1.rem;
    font-size:5rem;
    font-weight: 700;
    line-height: 1.1em;
    ${customMedia.lessThan('tablet')`
        font-size: 2.6rem;
    `}
`;


//subtitle
const Subtitle = styled.h2`
    font-weight: 400;
    font-size: 1.875rem;
    line-height:1.25rem;
    margin:0 0 1.875rem;
    text-transform: uppercase;   
    ${customMedia.lessThan('smTablet')`
    font-size: 1.4rem;
    margin-bottom: 10px;
`} 
`;