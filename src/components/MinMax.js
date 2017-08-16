import React, { Component } from "react";
import {connect} from 'react-redux';

import { Tree } from "./Tree";
import {
  generateOptions,
  insertNewOptions,
  evaluate,
  findOption,
  updateOptionInTree
} from "../lib/minMaxHelper";

class MinMax extends Component {
  state = {
    tree: [],
    currentPlayer: this.props.startingPlayer,
    currentMaxValue: -1000,
    currentMinValue: 1000,
    currentDepth: 0,
    currentOption: 0,
    savedId: 0
  };

  startMinMax = () => {
    var tree = [];
    for (var i = 0; i <= this.props.maxDepth; i++) {
      tree = [...tree, []];
    }
    //call the algorithm as callback to guarantee the state to be set
    this.setState({ tree: tree }, () => {
      var evaluation = this.min(-1, 0, 1);
    });
  };

  //maximizer
  max = (player, depth, index) => {
    if (depth === this.props.maxDepth + 1) {
      return evaluate();
    }
    var max = -1000;
    //generate the available game options and insert them into the tree
    var options = [];
    if (depth === 0) {
      options = generateOptions(depth, 1, index);
    } else {
      options = generateOptions(depth, this.props.maxOptions, index);
    }
    //get the values and set the values for the options accordingly.
    //insert the finished options into the tree
    var updatedOptions = [];
    for (var i = 1; i <= options.length; i++) {
      var value = this.min(-player, depth + 1, i);
      var optionToUpdate = options[i - 1];
      var updatedOption = { ...optionToUpdate, value: value };
      updatedOptions.push(updatedOption);
      if (value > max) {
        max = value;
      }
    }
    var updatedTree = insertNewOptions(this.state.tree, updatedOptions, depth);
    this.setState({ tree: updatedTree });
    return max;
  };

  //minimizer
  min = (player, depth, index) => {
    if (depth === this.props.maxDepth + 1) {
      return evaluate();
    }
    var min = 1000;
    //generate the available game options and insert them into the tree
    var options = [];
    if (depth === 0) {
      options = generateOptions(depth, 1, index);
    } else {
      options = generateOptions(depth, this.props.maxOptions, index);
    }
    //get the values and set the values for the options accordingly.
    //insert the finished options into the tree
    var updatedOptions = [];
    for (var i = 1; i <= options.length; i++) {
      var value = this.max(-player, depth + 1, i);
      var optionToUpdate = options[i - 1];
      var updatedOption = { ...optionToUpdate, value: value };
      updatedOptions.push(updatedOption);
      if (value < min) {
        min = value;
      }
    }
    var updatedTree = insertNewOptions(this.state.tree, updatedOptions, depth);
    this.setState({ tree: updatedTree });
    return min;
  };

  render() {
    return (
      <div className="minmax-tree">
        <h2>Game tree</h2>
        {JSON.stringify(this.state.tree, null, 2)}
        <Tree
          tree={this.state.tree}
          currentDepth={this.state.currentDepth}
          currentOption={this.state.currentOption}
          currentPlayer={this.state.currentPlayer}
        />
        <button onClick={this.startMinMax}>Start</button>
      </div>
    );
  }
}

const enhance = connect((state) => state.settings)

export default enhance(MinMax);
