import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import createStore from '../../Store/store.js'
import Dashboard from '../Dashboard/Dashboard';

const store = createStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={Dashboard}/>
        </BrowserRouter>
      </Provider>
    );
  }
}