//signup form
//username
//password
//email
//profile pic?

import React from 'react';


const SignUp = () => {
    return (
        <form className="login-form right-label-form" id="login-login-form" action='/login' acceptCharset='UTF-8' >
            <div id='signup-username' className='field'>
                <label htmlFor='signup-username-field'>UserName</label>
                <input type='text' name='username' id='signup-username-field' required='required' />
                <div className='error-message'>The username or password you entered is incorrect, please try again.</div>
            </div>
            <div id='signip-email' className='field'>
                <label htmlFor='signup-email-filed'>Email</label>
                <input type='text' name='email' id='signup-email-field' required='required' />
            </div>
            <div id='signip-password' className='field'>
                <label htmlFor='signup-password-filed'>PassWord</label>
                <input type='text' name='password' id='signup-password-field' required='required' />
            </div>
            <div id='signup-error'></div>
            <div>
                <label className='spacing-label'>&nbsp;</label>
                <button id='signup-in-button' className='recaptcha-trigger-button button green action-button expand-right'>
                    <span className='label'>Sign Up</span>
                    <span className='spinner'></span>
                </button>
            </div>

        </form>
    );
};

export default SignUp;