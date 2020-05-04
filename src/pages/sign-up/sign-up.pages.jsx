import React from 'react'
import SignUp from "../../components/signup/sign-up.component";
import './sign-up.page.css'

function SignUpPage() {
    return (
        <div className="row align-items-center fullHeight">
            <div className="col"/>
            <div className="col">
                <div>
                    <h1>Welcome to Dirtcube Interactive</h1>
                </div>
                <div>
                    <SignUp/>
                </div>
            </div>
            <div className="col"/>
        </div>
    )
}

export default SignUpPage;