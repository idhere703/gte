import React, { Component } from 'react';
import logo from './house-logo.jpg';
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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome!</h2>
          <h3>Why is there a picture of a house? Shut up.</h3>
        </div>
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
