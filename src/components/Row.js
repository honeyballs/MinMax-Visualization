import React from 'react';
import { Option } from './Option'

export const Row = (props) => {
    return (
        <div className="row">
            {props.options.map( (element, position) => 
                <Option key={element.id}
                    option={element} 
                    currentDepth={props.currentDepth} 
                    currentOption={props.currentOption} 
                    currentPlayer={props.currentPlayer} 
                    inRow={props.rowToRender}
                    optionNr={position}
                />
            )}
        </div>
    )
}