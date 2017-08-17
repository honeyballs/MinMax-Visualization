import React from 'react';
import {DepthSetting} from './DepthSetting';
import {OptionSetting} from './OptionSetting';
import {connect} from 'react-redux';
import {setMaxDepth, setMaxOptions} from '../redux'

const Settings = (props) => {
    return(
        <div className="settings">
            <h2>Settings</h2>
            <DepthSetting maxDepth={props.maxDepth} onChange={props.onChangeDepth}/>
            <OptionSetting maxOptions={props.maxOptions} onChange={props.onChangeOptions} />
            <div>Starting Player: {props.startingPlayer}</div>
            <button onClick={props.startMinMax}>Start MinMax</button>
        </div>
    )
}

const mapDispatchToProps = {
    onChangeDepth: setMaxDepth, // onChangeDepth: (maxDepth) => setMaxDepth(maxDepth)
    onChangeOptions: setMaxOptions,
}

const enhance = connect((state) => state.settings , mapDispatchToProps)

export default enhance(Settings);