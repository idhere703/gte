import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  Grid,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Thumbnail,
  Button
 } from 'react-bootstrap'
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import socialLinks from './socialMediaLinks';

class App extends Component {
  getFoodContent = () => {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src="http://placekitten.com/200/300" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="http://placekitten.com/200/350" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="http://placekitten.com/300/300" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            </Row>
        </Grid>
      </div>
    );
  };

  getTravelContent = () => {
    return (
      <div>
        <ListGroup>
          <ListGroupItem>Where am I anyway...</ListGroupItem>
          <ListGroupItem>I suppose it really doesn't matter...</ListGroupItem>
          <ListGroupItem>Help!!!!</ListGroupItem>
        </ListGroup>
      </div>
    );
  };

  getHealthContent = () => {
    return (
      <div>
        <ListGroup>
          <ListGroupItem>What do you mean I'm not covered?!</ListGroupItem>
          <ListGroupItem>I'll sue!</ListGroupItem>
          <ListGroupItem>... What do you mean I need coverage to sue!</ListGroupItem>
        </ListGroup>
      </div>
    );
  };

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
                <Navbar bsStyle="inverse" collapseOnSelect>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="#">(GTE) Got To Eat</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                    <Nav pullRight>
                      {
                        Object.keys(socialLinks).map((socialLink) => {
                          console.log(socialLink);
                          return (
                            <NavItem href={socialLinks[socialLink].siteLink} onClick={() => {window.open(socialLinks[socialLink].siteLink);}}>
                              <i className={`${socialLinks[socialLink].classInfo} social-links`} aria-hidden="true"></i>
                            </NavItem>
                          );
                        })
                      }
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>

                <h2>Welcome!</h2>
                <h3>Why is there a picture of space? Shut up.</h3>

              </div>
            </Col>

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
              {this.getFoodContent()}
            </TabPanel>
            <TabPanel>
              {this.getHealthContent()}
            </TabPanel>
            <TabPanel>
              {this.getTravelContent()}
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default App;
