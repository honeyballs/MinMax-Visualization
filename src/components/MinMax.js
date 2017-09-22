import React, { Component } from "react";
import { connect } from "react-redux";
import { setTree, updateOption, changePlayer } from "../redux";
import { generateTree } from "../lib/treeHelper";
import Tree from "./Tree/Tree"
import { evaluate } from "../lib/minMaxHelper";
import Instructions from "./Instructions";

class MinMax extends Component {

  //Define an Object to keep the size of the tree. 
  //Only updated when the algorithm is started and the tree is generated.
  treeSize = {
    depth: 0,
    options: 0
  }

  startMinMax = () => {
    //Set the display variables
    this.treeSize = { depth: this.props.maxDepth, options: this.props.maxOptions }
    //Generate the tree to display
    var displayTree = [];
    //Add the starting point manually. Afterwards the options are created in the generateTree function.
    const startPoint = [{ id: 1, value: 0, active: false }];
    displayTree.push(startPoint);
    displayTree = generateTree(
      displayTree,
      this.props.maxDepth,
      this.props.maxOptions
    );
    //Map the display tree to the state
    this.props.setTree(displayTree);
    //Initialize an array with 0's
    //This array is used to count how often the algorithm is called at one depth
    var iterationCounter = [];
    for (var i = 0; i <= this.props.maxDepth; i++) {
      iterationCounter[i] = 0;
    }
    //The timeout makes sure that the tree is initialized before we try to update it in the algorithm.
    setTimeout(() => {
      //Start the algorithm
      var evaluation = this.max(1, 1, iterationCounter);
      //Set the starting point value
      //Fetch the option object from the displayed tree and create an updated option with the minMax value
      const optionObj = this.props.tree[0][0];
      const updatedOption = {
        ...optionObj,
        value: evaluation,
        active: true
      };
      //update the displayed tree
      this.props.updateOption(this.props.tree, 0, updatedOption, 0);
    }, 2000);
  };

  //Maximizer
  max = (player, depth, iterationCounter) => {
    if (depth === this.props.maxDepth + 1) {
      return evaluate();
    }
    var max = -1000;
    //We keep track on the iteration number on a specific depth so we can determine the indizes of the options we need to update
    iterationCounter[depth] += this.props.maxOptions;
    //The indizes need to be determined before the loop that starts further recursions
    //Because the count will be updated in these iterations and we won't get the correct index anymore
    var optionIndizes = [];
    var loopCounter = this.props.maxOptions - 1;
    for (var o = 0; o < this.props.maxOptions; o++) {
      optionIndizes[loopCounter] = iterationCounter[depth] - o;
      loopCounter--;
    }
    //Recursion of the algorithm
    for (var i = 1; i <= this.props.maxOptions; i++) {
      var value = this.min(-player, depth + 1, iterationCounter);
      if (value > max) {
        max = value;
      }
      //Fetch the option object from the displayed tree and create an updated option with the minMax value
      const optionObj = this.props.tree[depth][optionIndizes[i - 1] - 1];
      const updatedOption = {
        ...optionObj,
        value: value,
        active: true
      };
      //Update the displayed tree
      this.props.updateOption(
        this.props.tree,
        depth,
        updatedOption,
        optionIndizes[i - 1] - 1
      );
    }
    this.props.changePlayer(this.props.currentPlayer);
    return max;
  };

  //Minimizer
  min = (player, depth, iterationCounter) => {
    if (depth === this.props.maxDepth + 1) {
      return evaluate();
    }
    var min = 1000;
    //We keep track on the iteration number on a specific depth so we can determine the indizes of the options we need to update
    iterationCounter[depth] += this.props.maxOptions;
    //The indizes need to be determined before the loop that starts further iterations
    //Because the count will be updated in these iterations and we won't get the correct nr
    var optionIndizes = [];
    var loopCounter = this.props.maxOptions - 1;
    for (var o = 0; o < this.props.maxOptions; o++) {
      optionIndizes[loopCounter] = iterationCounter[depth] - o;
      loopCounter--;
    }

    for (var i = 1; i <= this.props.maxOptions; i++) {
      var value = this.max(-player, depth + 1, iterationCounter);
      if (value < min) {
        min = value;
      }
      //Fetch the option object from the displayed tree and create an updated option with the minMax value
      const optionObj = this.props.tree[depth][optionIndizes[i - 1] - 1];
      const updatedOption = {
        ...optionObj,
        value: value,
        active: true
      };
      //Update the displayed tree
      this.props.updateOption(
        this.props.tree,
        depth,
        updatedOption,
        optionIndizes[i - 1] - 1
      );
    }
    this.props.changePlayer(this.props.currentPlayer);
    return min;
  };

  //If the tree is not yet generated we display instructions on how to use this tool.
  instructionsOrTree = () => {
    if (this.props.tree !== undefined && this.props.tree.length > 0) {
      return <Tree
          tree={this.props.tree}
          maxDepth={this.treeSize.depth}
          maxOptions={this.treeSize.options}
          width={1400}
          height={400}
        />
    } else {
      return <Instructions />
    }
  }

  render() {
    return (
      <div className="minmax-tree">
        <h2>Game tree</h2>
        {this.instructionsOrTree()}
        <button onClick={this.startMinMax}>Start</button>
      </div>
    );
  }
}

//Redux
const mapDispatchToProps = {
  setTree: setTree,
  updateOption: updateOption,
  changePlayer: changePlayer
};

const enhance = connect(state => {
  return {
    ...state.settings,
    ...state.minmax
  };
}, mapDispatchToProps);

export default enhance(MinMax);
