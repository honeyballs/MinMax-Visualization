import React, { Component } from "react";
import "./App.css";
import { generateTree } from "./lib/treeHelper";
import { Tree } from "./components/Tree";
import { Settings } from "./components/Settings";
import { Status } from "./components/Status";

class App extends Component {
  state = {
    maxDepth: 3,
    currentDepth: 0,
    maxOptions: 2,
    currentOption: 0,
    currentPlayer: 1,
    maximizerValue: -1000,
    minimizerValue: 1000,
    tree: []
  };

 
  //initialize the tree with default options
  componentWillMount() {
    generateTree(this.state.maxDepth, this.state.maxOptions, this.setTree)
  }
 
  //set the max depth and update the tree accordingly
  handleMaxDepthChange = evt => {
    this.setState(
      {
        maxDepth: evt.target.value
      },
      () => {
        generateTree(this.state.maxDepth, this.state.maxOptions, this.setTree)
      }
    );
  };

  //set the max options and update the tree accordingly
  handleMaxOptionsChange = evt => {
    this.setState(
      {
        maxOptions: evt.target.value
      },
      () => {
        generateTree(this.state.maxDepth, this.state.maxOptions, this.setTree)
      }
    );
  };

  //callback to set the tree state to a new tree
  setTree = tree => {
    this.setState({
      tree: tree
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
        />
        <Tree
          tree={this.state.tree}
          currentDepth={this.state.currentDepth}
          currentOption={this.state.currentOption}
          currentPlayer={this.state.currentPlayer}
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
