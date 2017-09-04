import React from 'react';
import {connect} from 'react-redux';

const PlayerInfo = (props) => {
    return(
        <div className="playerinfo">
            <h2>Player Info</h2>
            <div className="Aktuell am Zug">Actual Player </div>
        </div>
    )
}


const enhance = connect()

export default enhance(PlayerInfo);