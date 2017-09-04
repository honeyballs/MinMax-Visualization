import React, { Component } from "react";
import "./App.css";
import Settings from "./components/Settings";
import PlayerInfo from "./components/PlayerInfo";
import  Status  from "./components/Status";
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
        <div className="content-container">
          <Settings />
          <MinMax />
          {/* <Status
            player={this.state.currentPlayer}
            maximizerValue={this.state.maximizerValue}
            minimizerValue={this.state.minimizerValue}
          /> */}
          <PlayerInfo />
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
