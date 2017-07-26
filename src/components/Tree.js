import React from 'react';
import { Row } from './Row';

export const Tree = (props) => {
    return (
        <div className="rootDiv">
            {props.tree.map((element, position) => 
                <Row key={position} 
                    options={element}
                    currentDepth={props.currentDepth}
                    currentOption={props.currentOption}
                    currentPlayer={props.currentPlayer}
                    rowToRender={position}
                />
            )}
        </div>
    )
}