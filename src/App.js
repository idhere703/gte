import React from 'react';
import './App.css';
import navigationInit from './data/navigationInit';
import Router from './Router';
import routes from './Routes';

class App extends React.Component {

  componentDidMount() {
    navigationInit();
  }

  render() {
    return (
      <div className="App">
        <Router routes={ routes }>
        </Router>
      </div>
      );
  }
}

export default App;
