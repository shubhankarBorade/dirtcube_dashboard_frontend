import React from 'react'

function BtnComponent({primaryBtn, btnText}) {
    const btnClassname = `btn ${primaryBtn}`
    return (
        <div>
            <button type="submit" className={btnClassname}>{btnText}</button>
        </div>
    )
}

export default BtnComponent