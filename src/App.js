import React, { Component } from "react";
import "./App.css";
import { generateTree } from "./lib/treeHelper";
import { Tree } from "./components/Tree";
import { Settings } from "./components/Settings";
import { Status } from "./components/Status";
import MinMax from "./components/MinMax";

class App extends Component {
  state = {
    maxDepth: 3,
    currentDepth: 0,
    maxOptions: 2,
    currentOption: 0,
    startingPlayer: 1,
    currentPlayer: 1,
    maximizerValue: -1000,
    minimizerValue: 1000,
    tree: [],
    savedId: 0
  };

  //set the max depth and update the tree accordingly
  handleMaxDepthChange = evt => {
    this.setState({
      maxDepth: evt.target.value
    });
  };

  //set the max options and update the tree accordingly
  handleMaxOptionsChange = evt => {
    this.setState({
      maxOptions: evt.target.value
    });
  };

  render() {
    return (
      <div className="app-div">
        <h1>MinMax Visualization</h1>
        <Settings
          maxDepth={this.state.maxDepth}
          onChangeDepth={this.handleMaxDepthChange}
          maxOptions={this.state.maxOptions}
          onChangeOptions={this.handleMaxOptionsChange}
          startMinMax={this.startMinMax}
        />
        <MinMax
          maxDepth={this.state.maxDepth}
          maxOptions={this.state.maxOptions}
          startingPlayer={this.state.startingPlayer}
        />
        <Status
          player={this.state.currentPlayer}
          maximizerValue={this.state.maximizerValue}
          minimizerValue={this.state.minimizerValue}
        />
      </div>
    );
  }
}

export default App;
