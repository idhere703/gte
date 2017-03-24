import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  Grid,
  Row,
  Col
 } from 'react-bootstrap'
import logo from './space-logo.jpg';
import './App.css';
import { render } from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class App extends Component {

  constructor(props) {
    super(props);
    // Don't like the defaults?
    // Tabs.setUseDefaultStyles(false);
  }

  handleSelect = (index, last) => {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  };

  render() {
    return (
      <div className="App">

        <Grid>
          <Row className="show-grid App-logo">
            <Col>
              <div className="App-header">
                <Navbar collapseOnSelect>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="#">(GTE) Got To Eat</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                    <Nav>
                      <NavItem eventKey={1} href="#">Link</NavItem>
                      <NavItem eventKey={2} href="#">Link</NavItem>
                    </Nav>
                    <Nav pullRight>
                      <NavItem eventKey={1} href="#">Link Right</NavItem>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>

                <h2>Welcome!</h2>
                <h3>Why is there a picture of space? Shut up.</h3>

              </div>
            </Col>

          </Row>

          <Row>

          </Row>

        </Grid>

        <div className="App-body">
          <Tabs
            onSelect={this.handleSelect}
            selectedIndex={2}
          >
            <TabList>
              {/* Actual tabs that you click on. */}
              <Tab>Food</Tab>
              <Tab>Health</Tab>
              <Tab>Travel</Tab>
            </TabList>
            {/* Content for tabs. */}
            <TabPanel>
              Yum food.
            </TabPanel>
            <TabPanel>
              What do you mean I'm not covered?!
            </TabPanel>
            <TabPanel>
              Where am I anyway...
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default App;
