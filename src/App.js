import React, { Component } from "react";
import "./App.css";
import { generateId } from "./lib/treeHelper";
import { Tree } from "./components/Tree";
import {Settings} from "./components/Settings";

class App extends Component {

  state = {
      maxDepth: 3,
      currentDepth: 3,
      maxOptions: 2,
      currentOption: 2,
      currentPlayer: 1,
      tree: [
        [{ id: 11, value: 3 }, { id: 12, value: 7 }],
        [
          { id: 21, value: 5 },
          { id: 22, value: 1 },
          { id: 23, value: 2 },
          { id: 24, value: 6 }
        ],
        [
          { id: 31, value: 2 },
          { id: 32, value: 9 },
          { id: 33, value: 3 },
          { id: 34, value: 5 },
          { id: 35, value: 5 },
          { id: 36, value: 1 },
          { id: 37, value: 7 },
          { id: 38, value: 8 }
        ]
      ]
    };

  handleMaxDepthChange = (evt) => {
    this.setState({
      maxDepth: evt.target.value
    })
  }

  handleMaxOptionsChange = (evt) => {
    this.setState({
      maxOptions: evt.target.value
    })
  }

  /*
  render() {
    return (
        <div className="rootDiv">
          { this.state.tree.map( (element, position) => {
            return ( <div key={generateId()} className="row">{
            element.map( (element) => {
              return <div key={generateId()} className="option">{element.value}</div>
            })}
            </div>
            )
          })}
        </div>

    );
  } */

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
      </div>
    );
  }
}

export default App;
