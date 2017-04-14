import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

class Router extends React.Component {
    render() {
        return (<BrowserRouter>
                  <div>
                    { this.props.children }
                    { this.props.routes.map((route) => {
                          return (<Route path={ route.path } component={ route.component } />);
                      }) }
                  </div>
                </BrowserRouter>);
    }
}

export default Router;