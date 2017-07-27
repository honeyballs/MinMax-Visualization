import React from 'react';

export const DepthSetting = (props) => {
    return(
        <div className="depth-setting">
            <p>Select how many turns ahead the algorithm calculates</p>
            <select value={props.maxDepth} onChange={props.onChange}>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
        </div>
    )
}