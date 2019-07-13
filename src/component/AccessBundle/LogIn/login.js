//log in form
//check if username + password matched on our history.
//create authentication token, store in cookie/localstorage
//authentication token to help long time login
import React from 'react';

const LogIn = () => {
    return (
      <form className='left-label-form login-form' id='retrieve-password-form' action='#0'>
            <input name='utf8' type='hidden' value='✓' />
            <input type='hidden' name='authenticity_token' value='fsafaxvdsfs1aegaad' />
            <div id='login-username' className='field'>
                <label htmlFor='login-username-field'>UserName</label>
                <input type='text' name='username' id='login-username-field' required='required' />
                <div className='error-message'>The username or password you entered is incorrect, please try again.</div>
            </div>
            <div id='login-password' className='field'>
                <label htmlFor='login-password-filed'>PassWord</label>
                <input type='text' name='password' id='login-password-field' required='required' />
            </div>
            <div id='login-error'></div>
            <div>
                <label className='spacing-label'>&nbsp;</label>
                <button id='log-in-button' className='recaptcha-trigger-button button green action-button expand-right'>
                    <span className='label'>Log in</span>
                    <span className='spinner'></span>
                </button>
            </div>
    </form>
    );
}

export default LogIn;