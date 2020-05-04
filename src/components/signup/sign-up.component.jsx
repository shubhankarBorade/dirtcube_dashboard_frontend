import React from "react";

import FormInputTextComponent from '../form-input-text/form-input-text.component'
import BtnComponent from "../btn-component/btn.component";
import "./sign-up.component.css";

function SignUp() {
    return (
        <div>
            <form>
                <FormInputTextComponent formLabel="First Name" type='text' inputClass='form-control'
                                        placeholder='First Name'/>
                <FormInputTextComponent formLabel='Last Name' type='text' inputClass='form-control'
                                        placeholder='Last Name'/>
                <FormInputTextComponent formLabel='Email' type='email' inputClass='form-control'
                                        placeholder='Email'/>
                <FormInputTextComponent formLabel='Password' type='password' inputClass='form-control'
                                        placeholder='Password'/>
                <FormInputTextComponent formLabel='Confirm password' type='password' inputClass='form-control'
                                        placeholder='Confirm password'/>
                <BtnComponent btnText='Sign up' primaryBtn='btn-primary'/>
            </form>
        </div>
    )
}

export default SignUp;