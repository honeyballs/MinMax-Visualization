import React, { Component } from "react";
import "./App.css";
import { generateTree } from "./lib/treeHelper";
import { Tree } from "./components/Tree";
import Settings from "./components/Settings";
import { Status } from "./components/Status";
import MinMax from "./components/MinMax";
import store from './redux';
import { Provider } from 'react-redux';

class App extends Component {
  state = {
    currentOption: 0,
    startingPlayer: 1,
    currentPlayer: 1,
    maximizerValue: -1000,
    minimizerValue: 1000,
    tree: [],
    savedId: 0
  };

  render() {
    return (
      <Provider store={store}>
      <div className="app-div">
        <h1>MinMax Visualization</h1>
        <Settings />
        <MinMax />
        {/* <Status
          player={this.state.currentPlayer}
          maximizerValue={this.state.maximizerValue}
          minimizerValue={this.state.minimizerValue}
        /> */}
      </div>
      </Provider>
    );
  }
}

export default App;
