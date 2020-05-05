import React from 'react'

function BtnComponent({primaryBtn, btnText, onClickFunction}) {
    const btnClassname = `btn ${primaryBtn}`
    return (
        <div>
            <button type="submit" className={btnClassname} onClick={onClickFunction}>{btnText}</button>
        </div>
    )
}

export default BtnComponent