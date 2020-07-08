import React from 'react'
import Img from '../images/tab-1-pic.png'
import styled from 'styled-components'

import { Button } from './Button'

function TabContentOne() {
    return (
        <TabContentContainer>
            <div className="container">
                <div className="tab-content">
                    <div>
                    <span style={{marginBottom: '2rem'}}>
                        If you decide netflix isn't for you - no problem. No comjitment. Cancel online anytime.</span>
                    <br />
                        <Button style={{marginTop: '2rem'}}>try it now</Button>
                    </div>   
                        <img src={Img} />
                </div>
            </div>
        </TabContentContainer>
    )
}

export default TabContentOne;

// Main Content Container

const TabContentContainer = styled.div`
background: var(--main-deep-dark);

.container{
    margin: 0 10%;
}

img{
    width: 31.875rem
}


.tab-content{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
    font-size: 2re,;
    padding: 2.5rem;
}
`