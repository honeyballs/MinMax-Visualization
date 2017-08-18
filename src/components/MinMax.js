import React, { Component } from "react";
import { connect } from "react-redux";
import { setTree, updateOption } from "../redux";
import { generateTree } from "../lib/treeHelper";
import { Tree } from "./Tree";
import { evaluate } from "../lib/minMaxHelper";
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
    this.minMaxTree = []
    for (var i = 0; i <= this.props.maxDepth; i++) {
      this.minMaxTree = [...this.minMaxTree, []];
    }
    //generate the tree to display
    var displayTree = [];
    //add the starting point manually. afterwards the options are created in the loop
    const startPoint = [{ id: 1, value: 0 }];
    displayTree.push(startPoint);
    displayTree = generateTree(
      displayTree,
      this.props.maxDepth,
      this.props.maxOptions
    );
    //map the display tree to the state
    this.props.setTree(displayTree);

    setTimeout(() => {
      var evaluation = this.max(1, 1);
      //set the starting point value
      this.minMaxTree[0].push(evaluation);
      console.log(this.minMaxTree);
      //this.animateState();
      this.animateStateRealistic();
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
      this.minMaxTree[depth].push(value);
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
      this.minMaxTree[depth].push(value);
      if (value < min) {
        min = value;
      }
    }
    return min;
  };

  //update the state tree to match the minMaxTree like the algorithm itself would update it
  /*animateState = () => {
    for (var depth = this.props.maxDepth; depth >= 0; depth--) {
      for (
        var option = 0;
        option < Math.pow(this.props.maxOptions, depth);
        option++
      ) {
        //fetch the option object from the displayed tree and create an updated option with the minMax value
        const optionObj = this.props.tree[depth][option];
        const updatedOption = {
          ...optionObj,
          value: this.minMaxTree[depth][option]
        };
        //update the displayed tree
        this.props.updateOption(this.props.tree, depth, updatedOption, option);
        console.log(this.props.tree);
      }
    }
  };*/

  //start a realistic animation of the algorithm using recursion
  animateStateRealistic = optionOfBreak => {
    var iterationCounter = [];
    for (var i = 0; i <= this.props.maxDepth; i++) {
      iterationCounter[i] = 0;
    }
    var done = this.recursiveAnimation(1, iterationCounter);
    if (done) {
      //fetch the option object from the displayed tree and create an updated option with the minMax value
      const optionObj = this.props.tree[0][0];
      const updatedOption = {
        ...optionObj,
        value: this.minMaxTree[0][0]
      };
      //update the displayed tree
      this.props.updateOption(
        this.props.tree,
        0,
        updatedOption,
        0
      );
    }
  };

  //imitate the algorithm to get a realistic animation
  recursiveAnimation = (depth, iterationCounter) => {
    if (depth === this.props.maxDepth + 1) {
      return true;
    }
    var done = false;
    //we keep track on the iteration number on a specific depth so we can determine the indizes of the options we need to update
    iterationCounter[depth] += this.props.maxOptions;
    //the indizes need to be determined before the loop that starts further iterations 
    //because the count will be updated in these iterations and we won't get the correct nr
    var optionIndizes = [];
    var loopCounter = this.props.maxOptions -1
    for (var o = 0; o < this.props.maxOptions; o++) {
      optionIndizes[loopCounter] = iterationCounter[depth] - o;
      loopCounter--
    }
    //call the recursive function again for further depths
    for (var i = 0; i < this.props.maxOptions; i++) {
      done = this.recursiveAnimation(depth + 1, iterationCounter);
      //fetch the option object from the displayed tree and create an updated option with the minMax value
      const optionObj = this.props.tree[depth][optionIndizes[i] - 1];
      const updatedOption = {
        ...optionObj,
        value: this.minMaxTree[depth][optionIndizes[i] - 1]
      };
      //update the displayed tree
      this.props.updateOption(
        this.props.tree,
        depth,
        updatedOption,
        optionIndizes[i] - 1
      );
    }
    return done;
  };

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
  updateOption: updateOption
};

const enhance = connect(state => {
  return {
    ...state.settings,
    ...state.minmax
  };
}, mapDispatchToProps);

export default enhance(MinMax);
