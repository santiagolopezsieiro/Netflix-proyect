import React, { Component } from 'react';
import styled from 'styled-components';
import { generateMedia } from "styled-media-query"; // ¡¡

import logo from '../svg/logo.svg';

import LoginForm from '../components/login/LoginForm';
import LoginFooter from '../components/login/LoginFooter';
import { Link } from 'react-router-dom';


class Login extends Component {
    render() {
        return (
            <Logo className="main-login-container">
                <div className="header-top">
                    <Link to="/" className="logo">
                        <Logo src={logo} alt="logo"  />
                    </Link>
                </div>
                <LoginForm />
                <LoginFooter />
            </Logo>

        )
    }
}

export default Login;

// Media
const customMedia = generateMedia({
    tablet: '640px',
    lgTablet: '740px'
})


// Logo
const Logo = styled.div`
    .logo {
        width: 11rem;
        position: absolute;
        top: 25%;
        left: 11%;
        transform: translate(-50%);
        margin-left; 0;
        ${customMedia.lessThan('tablet')`
            top: 45%;
            left: 50%;
        `}
    
    }
     

`;