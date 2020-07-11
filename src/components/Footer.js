import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


 class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <span style={{ marginLeft: '15rem', fontSize: '1.125rem'}}>Questions? <Link>call 1-877-742-1335</Link></span>
                <div className="footer-columns">
                    <ul>
                        <li>
                            <Link>FAQ</Link>
                        </li>
                        <li>
                            <Link>Investor relations</Link>
                        </li>
                        <li>
                            <Link>Ways yo watch</Link>
                        </li>
                        <li>
                            <Link>Corporate information</Link>
                        </li>
                        <li>
                            <Link>Netflix originals</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Help center</Link>
                        </li>
                        <li>
                            <Link>Jobs</Link>
                        </li>
                        <li>
                            <Link>Terms of Use</Link>
                        </li>
                        <li>
                            <Link>Contact Us</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>    
                            <Link>Account</Link>
                        </li>
                        <li>
                            <Link>Reedem Gift Cards</Link>
                        </li>
                        <li>
                            <Link>Privacy</Link>
                        </li>
                        <li>
                            <Link>Speed Test</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Media Center</Link>
                        </li>
                        <li>
                            <Link>Buy Gift Cards</Link>
                        </li>
                        <li>
                            <Link>Coolie Preferences</Link>
                        </li>
                        <li>
                            <Link>Legal Notices</Link>
                        </li>
                    </ul>

                </div>
            </FooterContainer>
        )
    }
}

export default Footer;

const FooterContainer = styled.footer`
 background: var(--main-deep-dark);
padding-top: 10rem;
padding-bottom: 3rem;
color #999;


.footer-columns{
    width:70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display:grid;
    grid-template-columns: repeat(4, 1fr);
}

ul li {
    list-style: none;
    line-height: 2.5;
}

a {
    color: #999;
}

a:hover{
    text-decoration: underline;
    cursor:pointer;
}
`;