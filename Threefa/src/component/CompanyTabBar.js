import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';


export default class CompanyTabBar extends React.Component {
        
    render() {
        return (
            <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                <Tab eventKey={1} title="Tab 1">
                    Put stuff here. Preferably another component!! @Aitong
                </Tab>
                <Tab eventKey={2} title="Tab 2">
                    And here.
                </Tab>
                <Tab eventKey={3} title="Tab 3">
                    And here.
                </Tab>
            </Tabs>
        )
    }
}
    
