import React from 'react';
import './App.css';
import navigationInit from './data/navigationInit';
import Router from './Router';
import routes from './Routes';
import PublicFooter from './components/publicFooter';

class App extends React.Component {

  componentDidMount() {
    navigationInit();
  }

  render() {
    return (
      <div className="App">
        <Router routes={ routes }>
        </Router>
        <PublicFooter></PublicFooter>
      </div>
      );
  }
}

export default App;
