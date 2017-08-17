import React, { Component } from "react";
import { connect } from "react-redux";
import { setTree, updateOption, insertOptionsIntoTree } from "../redux";
import { Tree } from "./Tree";
import {
  generateOptions,
  insertNewOptions,
  evaluate,
  findOption,
  updateOptionInTree
} from "../lib/minMaxHelper";
class MinMax extends Component {

  /*
  state = {
    tree: [],
    currentPlayer: this.props.startingPlayer,
    currentMaxValue: -1000,
    currentMinValue: 1000,
    currentDepth: 0,
    currentOption: 0,
    savedId: 0
  };*/

  minMaxTree = [];

  startMinMax = () => {
    //initialize the tree filled by the algorithm
    for (var i = 0; i <= this.props.maxDepth; i++) {
      this.minMaxTree = [...this.minMaxTree, []];
    }
    //generate the tree to display
    const displayTree = [];
    //add the starting point manually. afterwards the options are created in the loop
    const startPoint = [{ id: 1, value: 0 }];
    displayTree.push(startPoint);
    for (var depth = 1; depth <= this.props.maxDepth; depth++) {
      var options = [];
      for (
        var option = 1;
        option <= Math.pow(this.props.maxOptions, depth);
        option++
      ) {
        var obj = {
          id: depth * 10 + option,
          value: 0
        };
        options.push(obj);
      }
      displayTree.push(options);
    }

    this.props.setTree(displayTree);

    setTimeout(() => {
      var evaluation = this.max(1, 1);
      //set the starting point
      this.minMaxTree[0].push(evaluation)
      console.log(this.minMaxTree)
      this.animateState()
    }, 2000);
  };

  //maximizer
  max = (player, depth) => {
    if (depth === this.props.maxDepth + 1) {
      return evaluate();
    }
    var max = -1000;
    for (var i = 1; i <= this.props.maxOptions; i++) {
      var value = this.min(-player, depth + 1, i);
      //insert the values into the minMaxTree
      this.minMaxTree[depth].push(value)
      if (value > max) {
        max = value;
      }
    }

    return max;
  };

  //minimizer
  min = (player, depth, index) => {
    if (depth === this.props.maxDepth + 1) {
      return evaluate();
    }
    var min = 1000;
    for (var i = 1; i <= this.props.maxOptions; i++) {
      var value = this.max(-player, depth + 1, i);
      //insert the values into the minMaxTree
      this.minMaxTree[depth].push(value)
      if (value < min) {
        min = value;
      }
    }
    return min;
  };

  //update the state tree to match the minMaxTree like the algorithm itself would update it
  animateState = () => {
    for (var depth = this.props.maxDepth; depth >= 0; depth--) {
      for (var option = 0; option < Math.pow(this.props.maxOptions, depth); option++) {
        //fetch the option object from the displayed tree and create an updated option with the minMax value
        const optionObj = this.props.tree[depth][option]
        const updatedOption = {...optionObj, value: this.minMaxTree[depth][option]}
        //update the displayed tree
        this.props.updateOption(this.props.tree, depth, updatedOption, option)
        console.log(this.props.tree)
      }
    }
  }

  render() {
    return (
      <div className="minmax-tree">
        <h2>Game tree</h2>
        <Tree
          tree={this.props.tree}
          currentDepth={this.props.currentDepth}
          currentOption={this.props.currentOption}
          currentPlayer={this.props.currentPlayer}
        />
        <button onClick={this.startMinMax}>Start</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setTree: setTree,
  updateOption: updateOption,
  insertOptionsIntoTree: insertOptionsIntoTree
};

const enhance = connect(state => {
  return {
    ...state.settings,
    ...state.minmax
  };
}, mapDispatchToProps);

export default enhance(MinMax);
