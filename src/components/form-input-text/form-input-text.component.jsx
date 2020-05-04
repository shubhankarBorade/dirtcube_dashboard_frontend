import React from 'react'

function FormInputText({formLabel, type, inputClass, placeholder}) {
    return (
        <div>
            <div className='form-group'>
                <label>{formLabel}</label>
                <input type={type} className={inputClass} placeholder={placeholder}/>
            </div>
        </div>
    )
}

export default FormInputText