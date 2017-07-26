import React from 'react';

const setClassName = (id, rowNr, optionNr, player) => {
    const classNameInactive = "option"
    const classNameActiveMax = "optionMax"
    const classNameActiveMin = "optionMin"
    const generatedId = rowNr * 10 + optionNr
    console.log({generatedId, id})
    if(id === generatedId) {
        if(player === 1) {
            return classNameActiveMax
        } else {
            return classNameActiveMin
        }
    } else {
        return classNameInactive
    }
}

export const Option = (props) => {
    return (
        <div className={setClassName(props.option.id, props.currentDepth, props.currentOption, props.currentPlayer)}>{props.option.value}</div>
    )
}