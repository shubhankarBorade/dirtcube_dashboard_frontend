import React, {useState} from "react";

import FormInputTextComponent from '../form-input-text/form-input-text.component'
import BtnComponent from "../btn-component/btn.component";
import "./sign-up.component.css";

import signUpFormData from "../../data/sign-up-form.data";

function SignUp() {
    function makeSignUpAPICall(event) {
        event.preventDefault();
    }

    const [data] = useState(signUpFormData)

    return (
        <div>
            <form>
                {
                    data.map(value => (
                        <FormInputTextComponent formLabel={value.formLabel} inputClass={value.inputClass}
                                                placeholder={value.placeholder} type={value.type}/>
                    ))
                }
                <BtnComponent btnText='Sign up' primaryBtn='btn-primary' onClick={makeSignUpAPICall}/>
            </form>
        </div>

    )
}

export default SignUp;