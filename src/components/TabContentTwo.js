import React from 'react';
import { Button } from './Button';
import styled from 'styled-components';

import ImgTv from '../images/tab-tv.png';
import ImgTablet from '../images/tab-tablet.png';
import ImgMacbook from '../images/tab-macbook.png';

import { generateMedia } from "styled-media-query";
import { Link } from 'react-router-dom';

function TabContentTwo() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className='tab-top-content'>
                    <span style={{fontSize: '1.5rem'}}>Watch TV sows and movies anytime, anywhere - personalized for you
                    </span>
                    <Link className="btn" to="/choose-plan">
                        <Button className="btn">try it now</Button>
                    </Link>
                </div>
                {/* Tab Bottom content */}
                    <div className="tab-bottom-content">
                        {/* Tv image container */}
                        <div>
                            <img src={ImgTv} style={{width: '18.75rem'}}/>
                            <h3>Watch on your TV</h3>
                            <p>
                                Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                            </p>
                        </div>
                        {/* Tablet image container */}
                        <div>
                            <img src={ImgTablet} style={{width: '18.75rem', paddingTop: '0.625rem'}}/>
                            <h3>Watch on your TV</h3>
                            <p>
                                Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                            </p>
                        </div>
                        {/* Macbook image container */}
                        <div>
                            <img src={ImgMacbook} style={{width: '18.75rem', paddingTop: '0.625rem', paddingBottom: '0.625rem'}}/>
                            <h3>Watch on your TV</h3>
                            <p>
                                Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                            </p>
                        </div>

                    </div>
                </div>
        </TabContainer>
    )
}

export default TabContentTwo;

//Media Query

const customMedia = generateMedia({
    smDesktop: '1440px',
    tablet: '900px'
})


//main tab content container

const TabContainer = styled.div`
    background: var(--main-deep-dark);

    .tab-content{
        margin:0 15%;
    }

    //tab top content
    .tab-top-content{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        justify-content: center;
        align-items: center;
        padding: 2.5rem 0;
        ${customMedia.lessThan('smDesktop')`
            grid-template-columns: repeat(2 ,1fr)
    `}

    ${customMedia.lessThan('tablet')`
        display: grid;
        grid-template-columns: 1fr;
        text-align: center;
        row-gap: 1.5rem;
    `}
    }

    span{
        grid-column: 1 / 8;
        ${customMedia.lessThan('tablet')`
            grid-column: 1 / -1;
            font-size: 1.5rem;
`}
        
    }

    .btn{
        margin: 0 1.25rem 1.25rem;
        grid-column: 10 /  12;
        ${customMedia.lessThan('tablet')`
            grid-column: 1 / -1;
            margin-left: 30%;
            margin-right: 30%;
        `}
    }

    img {
        width: 100%;
    }

    //tab bottom content
    .tab-bottom-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        text-align: center;
        margin-top: 2rem
        ${customMedia.lessThan('tablet')`
        display: block
        `}
    }

    h3{
        margin: 0.5rem 0;
    }

    p{
        color: var(--main-grey)
    }
`;
