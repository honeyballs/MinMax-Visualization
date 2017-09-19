import React, { Component } from "react";
import "./App.css";
import Settings from "./components/Settings";
import MinMax from "./components/MinMax";
import store from './redux';
import { Provider } from 'react-redux';
import DevTools from './components/DevTools';

class App extends Component {


  render() {
    return (
      <Provider store={store}>
      <div className="app-div">
        <h1>MinMax Visualization</h1>
        <DevTools />
        <Settings />
        <div className="content-container">
          <MinMax />
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
