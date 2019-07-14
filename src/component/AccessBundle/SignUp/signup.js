//signup form
//username
//password
//email
//profile pic?

//input change
//email validation

//store in localstorage to monitor database
// we should encryp user info, but inorder to simplifier it
// we just creat an simple encryption fun
//data format:
// {
//    username: '',
//    email: '',
//    password: '',
// }

import React, { useState } from 'react';


const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [passWord, setPassWord] = useState('');
    const [emailValid, setEmailValidation] = useState(true);
    const [errorStyle, setErrorStyle] = useState({display:'none'});
    
    const validation = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    const validateEmail = (e) => {
        if (!validation(e.target.value)) {
            setEmailValidation(false);
            setErrorStyle({display: 'show'});
        }
        else {
            setEmailValidation(true)
            setErrorStyle({display: 'none'});
        }
    };

    const SignUp = (e) => {
        const userInfo = JSON.stringify({
            username: userName,
            email: userEmail,
            password: passWord
        });
        const retrievedData = JSON.parse(localStorage.getItem("signedData") || "[]");
        retrievedData.push(userInfo);
        localStorage.setItem("signedData", JSON.stringify(retrievedData));

    }
    return (
        <div className="login-form right-label-form" id="login-login-form" acceptCharset='UTF-8' >
            <div id='signup-username' className='field'>
                <label htmlFor='signup-username-field'>UserName</label>
                <input type='text' name='username' value={userName} onChange={(e) => setUserName(e.target.value)} id='signup-username-field' required='required' />
            </div>
            <div id='signup-email' className='field'>
                <label htmlFor='signup-email-filed'>Email</label>
                <input type='text' name='email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} onBlur={(e) => validateEmail(e)} id='signup-email-field' required='required' />
                {
                    emailValid ? '' : <div className='error-message' style={errorStyle}>Please Type Correct Format Of Email(xxx@host.com).</div>
                }
                
            </div>
            <div id='signup-password' className='field'>
                <label htmlFor='signup-password-filed'>PassWord</label>
                <input type='text' name='password' value={passWord} onChange={(e) => setPassWord(e.target.value)} id='signup-password-field' required='required' />
            </div>
            <div id='signup-error'></div>
            <div>
                <label className='spacing-label'>&nbsp;</label>
                <button id='signup-in-button' onClick={() => SignUp()} className='recaptcha-trigger-button button green action-button expand-right'>
                    <span className='label'>Sign Up</span>
                    <span className='spinner'></span>
                </button>
            </div>

        </div>
    );
};

export default SignUp;