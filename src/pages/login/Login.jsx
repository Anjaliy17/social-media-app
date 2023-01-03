import React from 'react';
import "./login.css";

export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Chit Chat</h3>
                <span className="loginDesc">
                    Connect with friends andthe world around you on Chit Chat.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Logi In</button>
                    <span className="loginForget">Forget Password?</span>
                    <button className="loginRegisterButton">
                        Create a New Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
