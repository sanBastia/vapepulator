
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CalculatorPage from './pages/Calculator';
import Navigation from './modules/Navigation';


// eslint-disable-next-line
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ height: '100%' }}>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/calculator" component={CalculatorPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default Routes;
