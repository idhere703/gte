import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PublicHeader from './components/publicHeader';
import LandingPage from './components/main';

class Router extends React.Component {
    render() {
        return (<BrowserRouter>
                  <div>
                    <PublicHeader></PublicHeader>
                    <Switch>
                      <Route exact path='/' component={ LandingPage } />
                      { this.props.routes.map((route) => {
                            return (<Route path={ route.path } component={ route.component } />);
                        }) }
                    </Switch>
                  </div>
                </BrowserRouter>);
    }
}

export default Router;