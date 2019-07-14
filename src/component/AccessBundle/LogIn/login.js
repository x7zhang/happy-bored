//log in form
//check if username + password matched on our history.
//create authentication token, store in cookie/localstorage
//authentication token to help long time login

//input change

import React, { useState } from 'react';

const LogIn = () => {
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const [usernameValid, setUserNameValid] = useState(true);
    const [passwordValid, setPassWordValid] = useState(true);
    const [errorStyle, setErrorStyle] = useState({display:'none'});
    const [userPassed, SetUserPassed] = useState(false);

    const validation = (userInfo, name, password) => {
      if (password === userInfo.password && name === userInfo.username) {
        setErrorStyle({display:'none'})
        return true;
      }
      if (password === userInfo.password) {
        if (name !== userInfo.username) {
          setUserNameValid(false);
          setErrorStyle({display:'show'});
          return false;
        }
      }

      if (name === userInfo.username) {
        if (password !== userInfo.password) {
          setPassWordValid(false);
          setErrorStyle({display:'show'});
          return false;
        }
      }
      
    };
    //logic problem, fix tomorrow
    const getUserInfo = () => {
      //simple way to check if info valid
      const userData = JSON.parse(localStorage.getItem('signedData'));
      for (let i = 0; i < userData.length; i++) {
        const userInfo = JSON.parse(userData[i]);
        const name = userName;
        const password = passWord;

        if (password === userInfo.password && name === userInfo.username) {
          console.log('1111');
          setErrorStyle({display:'none'});
          SetUserPassed(true);
          
        }

        if (password === userInfo.password) {
          if (name !== userInfo.username) {
            console.log('222');
            setUserNameValid(false);
            setErrorStyle({display:'show'});
          }
        }
  
        if (name === userInfo.username) {
          if (password !== userInfo.password) {
            console.log('333');
            setPassWordValid(false);
            setErrorStyle({display:'show'});
          }
        }
        
        //console.log('sadasd', item.username);
      }
      
    };
    return (
      <div className='left-label-form login-form' id='retrieve-password-form' action='#0'>
            <input name='utf8' type='hidden' value='✓' />
            <input type='hidden' name='authenticity_token' value='fsafaxvdsfs1aegaad' />
            <div id='login-username' className='field'>
                <label htmlFor='login-username-field'>UserName/Email</label>
                <input type='text' name='username' value={userName} onChange={(e) => setUserName(e.target.value)} id='login-username-field' required='required' />
                {
                  usernameValid ? '' : <div className='error-message' style={errorStyle}>The Username Or Email You Entered is Incorrect, Please Try Again.</div>
                }
            </div>
            <div id='login-password' className='field'>
                <label htmlFor='login-password-filed'>PassWord</label>
                <input type='password' name='password' onChange={(e) => setPassWord(e.target.value)} value={passWord} id='login-password-field' required='required' />
                <div className='error-message' style={errorStyle}>The PassWord You Entered is Incorrect, Please Try Again.</div>
                {
                  passwordValid ? '' : <div className='error-message' style={errorStyle}>The PassWord You Entered is Incorrect, Please Try Again.</div>
                }
            </div>
            <div id='login-error'></div>
            <div>
                <label className='spacing-label'>&nbsp;</label>
                <button id='log-in-button' onClick={() => getUserInfo()} className='recaptcha-trigger-button button green action-button expand-right'>
                    <span className='label'>Log in</span>
                    <span className='spinner'></span>
                </button>
            </div>
    </div>
    );
}

export default LogIn;