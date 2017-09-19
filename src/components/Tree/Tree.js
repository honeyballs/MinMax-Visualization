import React from 'react';
import { Cluster } from '@vx/hierarchy';
import { hierarchy } from 'd3-hierarchy';
import { LinearGradient } from '@vx/gradient';
import Node from './Node'
import Link from './Link'

//Convert the data saved as arrays into the root object format required for the hierarchy
const convertData = (tree, maxDepth, maxOptions) => {
    //Create the root
    var rootObject = {
        name: "",
        children: []
    }
    //Iterate through the array row
    tree.map( (row, rowIndex) => {
        //The index of the lowest level children to insert new objects into
        var indexToInsert = -1
        //The index of the level above the lowest level, needed for the deepest iteration
        var indexToInsertParent = 0
        //Count how many objects have been inserted. After maxOptions^2 we need to switch the parent index
        var insertionCounter = 0;
        //Iterate through the rows
        row.map( (object, index) => {
            //Just edit the top level object
            if (rowIndex === 0) {
                rootObject = {...rootObject, name: object.value}
            } else {
                var treeObj = {
                    name: object.value,
                    children: []
                }
                //Just insert the next objects 
                if (rowIndex === 1) {
                    rootObject.children.push(treeObj);
                } else {
                    //Switch the children after the maxOptions amount of objects was added
                    if(index % maxOptions === 0) {
                        indexToInsert++;
                    }
                    if (rowIndex === 2) {
                        rootObject.children[indexToInsert].children.push(treeObj)
                    } else {
                        rootObject.children[indexToInsertParent].children[indexToInsert].children.push(treeObj)
                        //Switch branches one level above after maxOptions^2 has been added
                        insertionCounter++;
                        if (insertionCounter === (maxOptions * maxOptions)) {
                            indexToInsert = -1
                            indexToInsertParent++;
                            insertionCounter = 0;
                        }
                    }
                }
            }
        })
    })    
    console.log({rootObject})
    return rootObject;
}

const margin = {
    top: 40,
    left: 0,
    right: 0,
    bottom: 110
}

const Tree = props => {
    if(props.tree[0] != null) {
        const data = convertData(props.tree, props.maxDepth, props.maxOptions)
        const nodeData = hierarchy(data)
        return (
            <svg width={props.width} height={props.height} style={{margin: "0 auto"}}>
                <LinearGradient id="top" from="#79d259" to="#37ac8c"/>
                <rect
                    width={props.width}
                    height={props.height}
                    rx={14}
                    fill="white"
                />
                <Cluster
                    top={margin.top}
                    left={margin.left}
                    root={nodeData}
                    size={[
                        props.width - margin.left - margin.right,
                        props.height - margin.top - margin.bottom
                    ]}
                    nodeComponent={Node}
                    linkComponent={Link}
                />
            </svg>
        )
    } else {
        return (
            <h1>No Tree calculated</h1>
        )
    }
    
    
}

export default Tree;