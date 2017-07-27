import React from 'react';

export const Status = (props) => {
    const player = (props.player === 1) ? "Maximizer" : "Minimizer";
    return (
        <div className="status">
            <h2>Status</h2>
            <p>
                Current player:
                <span className={`player-text ${player}`}> {player}</span>
            </p>
            <p>Maximizer value: {props.maximizerValue}</p>
            <p>Minimizer value: {props.minimizerValue}</p>
        </div>
    )
}