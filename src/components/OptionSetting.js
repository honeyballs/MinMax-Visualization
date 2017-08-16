import React from 'react';

export const OptionSetting = (props) => {
    return(
        <div className="option-setting">
            <p>Select how many options per turn are available to the algorithm</p>
            <select value={props.maxOptions} onChange={(evt) => props.onChange(parseInt(evt.target.value))}>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select>
        </div>
    )
}