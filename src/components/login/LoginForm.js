import React, { Component } from 'react';
import styled from 'styled-components';

import FBlogo from '../../images/fb-logo.png'


import { Link } from 'react-router-dom'; // ¡¡


class LoginForm extends Component {
    render() {
        return (
            <FormContainer>
                <div className="form-container">
                    <form>
                        <h1>Sign in</h1>
                        <div className="input-container">
                            <input className="input-empty" type="email" required/>
                            <label>e-mail or phone number</label>
                        </div>
                        <div className="input-container">
                            <input className="input-empty" type="password" required/>
                            <label>password</label>
                        </div>
                        <div className="input-container">
                            <Button type="submit">Sing in</Button>
                        </div>
                    <label className="checkbox-container">
                        remember me
                        <input type="checkbox" checked/>
                        <span className="checkmark"></span>
                    </label>
                    <Link to='/' className="need-help">Need help?</Link>
                    <div className="bottom-form">
                        <img src={FBlogo} alt="facebook" />
                        <Link to="/" className="login-fb-text">
                            login with facebook
                        </Link>
                        <br />
                        <br />
                        <span style={{color: '#999'}}>New to Netflix?</span>&nbsp;
                        <Link to="/" className="sign-up-text">
                            Sign up now
                        </Link>
                    </div>
                    </form>
                </div>
            </FormContainer>
        )
    }
}

export default LoginForm;

// form container

const FormContainer = styled.div`
    display: grid;
    justify-content: center;
    position: relative;
    z-index: 5;



.form-container {
    background: rgba(0, 0, 0, 0.8);
    position: relative;
    width: 28.125rem;
    height: 41.25rem;
    padding: 4rem;
}


.input-container {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 1.2rem; 
}


.input-empty {
    color: #fff;
    background: #333;
    border: 0;
    border-radius: 0.25rem;
    height: 3rem;
    padding: 0.9rem 1.25rem 0;
}

form div label {
    position: absolute;
    top: 0.625rem;
    left: 1.25rem;
    pointer-events: none;
    color: #8a8a8a;
    font-size: 1rem;
    transition: transform 150ms ease-out, font-size 150ms ease-out;
}

form div {
    position: relative;
}

input:focus ~ label {
    top: 0.4375rem;
    font-size: 0.7rem; 
} 

input:focus {
    outline: none;
}

// Checkbox
.checkbox-container {
    margin-left: 0.75rem;
    padding-left: 1.875rem;
    position: relative;
    font-size: 0.9rem;
    color: #999;
    cursor: pointer;
}

.checkbox-container input {
    display: none; 
}

.checkbox-container .checkmark {
    position: absolute;
    display: inline-block;
    background: #454545;
    width: 1.1rem;
    height: 1.1rem;
    left: 0;
    top: 0;
    border-radius: 0.1rem;
}

.checkbox-container input:checked + .checkmark:after {
    content: '';
    position: absolute;
    height: 0.25rem;
    width: 0.625rem;
    border-left: 2px solid #000;
    border-bottom: 2px #000;
    top: 25%;
    left: 21%;
    transform: rotate(-45deg);
}


.need-help {
    text-decoration: none;
    color: #828282;
    margin-left: 6rem;
    font-size: 0.9rem;
}


// Button form
.bottom-form img {
    width: 1.5625rem;
    margin: 0.625rem 0.625rem -0.4375rem 0;

.login-fb-text {
    color: #828282;
    font-size : 0.9rem; 
}

.bottom-form {
    position: absolute;
    bottom: 0rem;
    margin-bottom: 4rem;
}

.sign-up-text {
    font-size: 1.1rem;
    color: #fff;
    &:hover {
        text-decoration: underline;
    }
}

`;

// Button

const Button = styled.button`
    color: white;
    background: rgba(229, 9, 20);
    border: none;
    outline: none;
    padding: 0.8rem 1.3rem;
    border-radius: 0.125rem;
    font-size: 1rem;
    text-align: center;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    transition: opacity 0.2s ease-in;
    cursor: pointer;
    text-decoration: none;
    margin: 1rem 0; 
`;