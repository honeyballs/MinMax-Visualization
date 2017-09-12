import React from 'react';
import {DepthSetting} from './DepthSetting';
import {OptionSetting} from './OptionSetting';
import {connect} from 'react-redux';
import {setMaxDepth, setMaxOptions} from '../redux';
import LineTo from 'react-lineto';
import Line from 'react-lineto';


const Settings = (props) => {
    return(
        <div className="settings">
            <h2>Settings</h2>
            <DepthSetting maxDepth={props.maxDepth} onChange={props.onChangeDepth}/>
            <OptionSetting maxOptions={props.maxOptions} onChange={props.onChangeOptions} />
            <div className="player-label">Starting Player: {props.startingPlayer}</div>
            <button onClick={props.startMinMax}>Start MinMax</button>

            {/*Test react-lineto*/}
            <div className="A">Element A</div>
            <div className="B">Element B</div>
            <LineTo from="A" to="B" border="3px solid black" />
            <Line x0={0} y0={0} x1={1000} y1={1000} border="5px solid black" />
        </div>
    )
}

const mapDispatchToProps = {
    onChangeDepth: setMaxDepth, // onChangeDepth: (maxDepth) => setMaxDepth(maxDepth)
    onChangeOptions: setMaxOptions,
}

const enhance = connect((state) => state.settings , mapDispatchToProps)

export default enhance(Settings);