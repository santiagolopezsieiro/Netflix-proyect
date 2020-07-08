import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'; // ¡

// Style
import '../css/TabsNav.css';

// Tab
import TabDoor from './tabs_nav/TabDoor';
import TabDevices from './tabs_nav/TabDevices';
import TabPrices from './tabs_nav/TabPrices'

// TabPanel
import TabContentOne from './TabContentOne'

class TabComponent extends Component {
    
    state = {
        tabIndex: 0
    }

    render() {
        return (
            <div>
                <Tabs className="tabs" 
                selectedIndex={this.state.tabIndex} 
                onSelect={tabIndex => this.setState({tabIndex})}>
                    <TabList className="tab-nav-container">
                        <Tab className={`${this.state.tabIndex === 0 ? 'tab-selected active' : null}`}>
                            <TabDoor />
                            <p style={{marginBottom: '1.875rem'}}>
                                <strong>no comitments<br />
                            Cancel online at anytime
                                </strong>
                            </p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}>
                            <TabDevices />
                            <p style={{marginTop: '-5.3125rem' }}>
                                <strong>Watch anywhere
                                </strong>
                            </p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? 'active' : null}`}>
                            <TabPrices />
                            <p>
                                <strong>Pick your price
                                </strong>
                            </p>
                        </Tab>
                    </TabList>
                    {/* {TABS CONTENT} */}
                    <TabPanel>
                        <TabContentOne />
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}


export default TabComponent;
