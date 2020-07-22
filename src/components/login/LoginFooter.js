import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { iosWorld } from 'react-icons-kit/ionicons/iosWorld/';
import {ic_arrow_drop_down} from 'react-icons-kit/md/ic_arrow_drop_down';
import { generateMedia } from "styled-media-query";



 class Footer extends Component {

state = {
    langContent: false
}

handleToggle = e => {
    e.preventDefault();
    this.setState({
        langContent : !this.state.langContent
    })
}

    render() {
        return (
            <FooterContainer>
                <span style={{marginLeft: '10.7rem', color: '#999'}}>Questions?&nbsp;<Link>Call 1-877-742-1335</Link>
                </span>
                <div className="footer-columns">
                    <ul>
                        <li>
                            <Link>Gift Card Terms</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Terms of use</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>    
                            <Link>Privacy Statement</Link>
                        </li>
                    </ul>
                    </div>

                    {/* Language Button */}
                    <div className="lang-btn" onClick={this.handleToggle}>
                        <Icon icon={iosWorld} size={20}/>
                        &nbsp;&nbsp;English&nbsp;&nbsp;
                        <Icon icon={ic_arrow_drop_down} />
                    </div>    

                {/* Toggle Language Content  */}
                {  this.state.langContent && ( 
                <div className="lang-toggle" >
                    <ul className="lang-ul">
                        <li>English</li>
                    </ul>
                    <ul className="lang-ul">
                        <li>French</li>
                    </ul>
                </div>
                )}
            </FooterContainer>
        )
    }
}

export default Footer;

// Media query
const customMedia = generateMedia({
   tablet: '740px'
})

const FooterContainer = styled.footer`
justify-content: center;
background: rgba(0, 0, 0, 0.8);
padding-top: 3rem;
padding-bottom: 6rem;
margin-top: 6rem;
position: relative;
z-index: 5;


.footer-columns{
    width: 80%;
    margin: 1rem auto 0;
    color: #999;
    font-size: 0.9rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    ${customMedia.lessThan('tablet')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    `}

}

ul li {
    list-style: none;
    line-height: 2.5;
}

a {
    color: #999;
    font-size: 0.9rem;
}

a:hover{
    text-decoration: underline;
    cursor: pointer;
}

p {
    text-decoration: underline;
    cursor: pointer;
}

// Language Button

.lang-btn {
    background: transparent;
    border: 0.9px solid #333;
    padding: 1rem;
    width: 8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem 0 2rem;
    margin-left: 10%;
    cursor: pointer;

}

//Toggle Language Content

.lang-toggle {
    margin-left: 10%;
    position: absolute;
    margin-top: -2rem;
}

.lang-toggle ul {
    background: var(--main-deep-dark);
    width: 8.125rem;
    border: 1px solid #333;
    text-align: center;
    &:hover {
        background: #0085ff; 
        color: #fff;
    }
}




.lang-ul {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
}
`;