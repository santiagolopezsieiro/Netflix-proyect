import React from 'react';
import styled from 'styled-components';
import Logo from '../svg/logo.svg';
import { Link, NavLink } from 'react-router-dom';

import CheckmarkLogo from '../images/Checkmark.png';

import { Button } from '../components/Button';

const ChoosePlan = () => {
    return (
        <MainContainer>
            {/* Header-Top */}
            <div className="header-top">
                <Link to="/">
                    <Logo src={Logo} alt="logo" />
                </Link>
                <NavLink to="/login" className="btn singIn-btn">
                    Sign In
                </NavLink>
            </div>
            {/* Header content */}
            <div className="header-content">
                <img className="checkmark-logo" src={CheckmarkLogo} alt="checkmark img" />
                <p>
                    Step<strong>1</strong> of <strong>3</strong>
                </p>
                <h2>Choose your plan.</h2>
                <div className="checked-list">
                    <div className="bullet">No commitments, cancel anytime</div>
                    <div className="bullet">Everything on Netflix for one low price</div>
                    <div className="bullet">Unlimited viewing on all your devices</div>
                </div>
                <Button>See the plans</Button>
            </div>
        </MainContainer>
    )
}

export default ChoosePlan;

// Main container
const MainContainer = styled.div`
background: #fff;

// header-top
.header-top {
    background: #fff;
    height: 6rem;
    border-bottom: 1px solid #6e6e6e;
}

.header-content {
    display: grid;
    justify-content: center;
    background: #fff;
    color: var(--main-dark);
    margin-bottom: 6rem;
    width: 65%;
    position: relative;
    margin: auto;
    margin-top: 4.5rem;
    text-align: center;
    align-content: center;
    flex-direction: column;
    z-index: 2;
}

//checkmark
.checkmark-logo {
    width: 3rem;
    margin-top: 3.125rem;
    margin-bottom: 2rem;
}
`;

// logo
const Logo = styled.img`
    width: 10.5rem;
    height: 3.5rem;
    position: absolute;
    top: 49%;
    left: 8%;
    transform: translate(-50%, -50%);
    margin-left: 0;
`;
