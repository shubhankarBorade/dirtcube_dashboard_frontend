import React from 'react'

function BtnComponent({type, classes, text, onClickFunction, ...otherProps}) {
    return (
        <div>
            <button type={type} className={`btn ${classes}`} onClick={onClickFunction} {...otherProps}>{text}</button>
        </div>
    )
}

export default BtnComponent