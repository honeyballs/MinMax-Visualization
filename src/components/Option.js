import React from 'react';

const setClassName = (id, rowNr, optionNr, player) => {
    const classNameInactive = "option"
    const classNameActiveMax = "optionMax"
    const classNameActiveMin = "optionMin"
    const generatedId = rowNr * 10 + optionNr
    if(id === generatedId) {
        if(player === 1) {
            return `${classNameInactive} ${classNameActiveMax}`
        } else {
            return `${classNameInactive} ${classNameActiveMin}`
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