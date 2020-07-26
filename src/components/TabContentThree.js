import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit' // ¡

//icons
import {cross} from 'react-icons-kit/icomoon/cross';
import {checkmark} from 'react-icons-kit/icomoon/checkmark'

import { generateMedia } from "styled-media-query";

function TabContentThree() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span style={{fontSize: '1.5rem'}}>
                        Choose one plan and watch everything on Netflix.
                    </span>
                    <Link className="btn" to="/choose-plan">
                        <Button>Try it now</Button>
                    </Link>
                </div>
                {/* TAb Button Content */}
                <div className="tab-bottom-content">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Basic</th>
                                <th>Standar</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monthly price</td>
                                <td>$9.99</td>
                                <td>$13.99</td>
                                <td>$16.99</td>
                            </tr>
                            <tr>
                                <td>HD available</td>
                                <td><Icon icon={cross} size={10} /></td>
                                <td><Icon icon={checkmark} size={10} /></td>
                                <td><Icon icon={checkmark} size={10} /></td>
                            </tr>
                            <tr>
                                <td>ultra HD available</td>
                                <td><Icon icon={cross} size={10} /></td>
                                <td><Icon icon={cross} size={10} /></td>
                                <td><Icon icon={checkmark} size={10} /></td>
                            </tr>
                            <tr>
                                <td>screens you can watch on at the same time</td>
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>watch on your laptop, YV, phone and tablet</td>
                                <td><Icon icon={checkmark} size={10} /></td>
                                <td><Icon icon={checkmark} size={10} /></td>
                                <td><Icon icon={checkmark} size={10} /></td>
                            </tr>
                            <tr>
                                <td>unlimited movies and TV shows</td>
                                <td><Icon icon={checkmark} size={10} /></td>
                                <td><Icon icon={checkmark} size={10} /></td>
                                <td><Icon icon={checkmark} size={10} /></td>
                            </tr>
                            <tr>
                                <td>cancel anytime</td>
                                <td><Icon icon={checkmark} size={10} /></td>
                                <td><Icon icon={checkmark} size={10} /></td>
                                <td><Icon icon={checkmark} size={10} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </TabContainer>
    )
}


export default TabContentThree;

// Media query
const customMedia = generateMedia({
    lrDesktop: '1350px',
    mdDesktop: '1000px'
})


//main container
const TabContainer = styled.div`
    background: var(--main-dark);

.tab-top-content{
    display:grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 3rem 0 0;
    ${customMedia.lessThan('lgDesktop')`
        display: grid;
        grid-template-column: 1fr;
        row-gap: 1.5rem;
        text-align: center;
    `}
}

.tab-content{
    margin: 0 15%;
    padding-bottom: 1%;
}

span{
    grid-column: 3 / 9;
    ${customMedia.lessThan('lgDesktop')`
    display: grid;
    grid-column: 1 / -1;
`}
}

.btn {
    grid-column: 9 /12;
    margin-left: 3rem;
    margin-right: 5.1rem
    ${customMedia.lessThan('mdDesktop')`
    display: grid;
    grid-column: 1 / -1;
    margin-left: 30%;
    margin-rigth: 30%;
`}
}

// tab Bottom Content
.tab-bottom-content{
    margin. 2rem auto;
}

// TAble
table{
    width:100%;
    margin-top:2rem;
    border-collapse: collapse;
}

table thead th{
    text-transform: uppercase;
    padding: 0.8rem;
}

table tbody{
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit
}

table tbody tr td{
    color: #999;
    padding: 0.8rem 1.2rem;
    text-align: center;
}

table tbody tr td:first-child {
    text-align: left;
}

table tbody tr:nth-child(even) {
    background: #222;   
}
`;