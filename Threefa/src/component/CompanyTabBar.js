import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './Company.css';

export default class CompanyTabBar extends React.Component {
        
    render() {
        return (
            <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                <Tab eventKey={1} title="Fund information">
                    Benefits  
                </Tab>
                <Tab eventKey={2} title="Project Overview">
                    More about the company
                </Tab>
            </Tabs>
        )
    }
}
    
