import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';
import stores from './stores/index';

// eslint-disable-next-line
export default class App extends Component{
  render() {
    return (
      <Provider stores={stores}>
        <Routes />
      </Provider>
    );
  }
}
