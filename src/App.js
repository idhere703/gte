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
              <Thumbnail src="http://placekitten.com/200/350" alt="242x200">
                <h3>Cats...</h3>
                <p>Not food. </p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="http://placekitten.com/200/350" alt="242x200">
                <h3>Who the heck designed this?</h3>
                <p>I'm hungry!</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="http://placekitten.com/200/350" alt="242x200">
                <h3>Perhaps I should use google maps.</h3>
                <p>Then again I use that for everything. I feel like I overuse it.</p>
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

        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src="http://placekitten.com/200/350" alt="242x200">
                <h3>Where am I anyway...</h3>
                <p>Looks strange.</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="http://placekitten.com/200/350" alt="242x200">
                <h3>I suppose it really doesn't matter...</h3>
                <p>Still, it's starting to freak me out.</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="http://placekitten.com/200/350" alt="242x200">
                <h3>Help!!!!</h3>
                <p>Don't panic, remember your training... Oh no! I don't have any training!</p>
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

  getHealthContent = () => {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src="http://placekitten.com/200/350" alt="242x200">
                <h3>What do you mean I'm not covered?!</h3>
                <p>I had coverage just last week!</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="http://placekitten.com/200/350" alt="242x200">
                <h3>I'll sue!</h3>
                <p>There'll be hell to pay!</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="http://placekitten.com/200/350" alt="242x200">
                <h3>... What do you mean I need coverage to sue!?</h3>
                <p>This is ridiculous, I'm leaving. Where is the exit? ... I need coverage to use that too? I hate you all.</p>
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
