import React from 'react';
import {DepthSetting} from './DepthSetting';
import {OptionSetting} from './OptionSetting';

export const Settings = (props) => {
    return(
        <div className="settings">
            <h2>Settings</h2>
            <DepthSetting maxDepth={props.maxDepth} onChange={props.onChangeDepth}/>
            <OptionSetting maxOptions={props.maxOptions} onChange={props.onChangeOptions} />
            <button>Start MinMax</button>
        </div>
    )
}