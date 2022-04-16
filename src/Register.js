import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

function Register() {

    const [isRegistered, setisRegistered] = useState(false);
    const [userName, setUserName] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setcConfirmedPassword] = useState('')

    const renderAuthButton = () => {
        if (isRegistered) {
            return (
                <Link to='/chat'>
                    <input type="submit" value="Register" className="btn btn-outline-secondary" />
                </Link>
            );
        } else {
            return (
                <input type="button" value="Register" className="btn btn-outline-secondary" />
            );
        }
    }

    const Valid = () => {
        if (userName.length > 0 && password.length > 0 && displayName.length > 0 
            && document.getElementById('pass1').value === document.getElementById('pass2').value && checkPassword()) {
            setisRegistered(bool => bool = true)
        } else {
            setisRegistered(bool => bool = false)
        }
    }

    function checkPassword() {
        return /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
    }

    return (
        <div className='login'>
            <div className='login_page'>
                <div className='login_header'>
                    <div>NTM</div>
                </div>
                <div className='login_body'>
                    <h2> Register </h2>

                    <form id="RegisterForm" className="form" action="/chat">
                        <div className='login_body_input'>
                            <input placeholder="Username" className="login_input" type="text" value={userName}
                                onChange={e => {
                                    setUserName(e.target.value);
                                    setisRegistered(false);
                                    Valid();
                                }} />
                        </div>

                        <div className='login_body_input'>
                            <input placeholder='Display Name' className="login_input" type="text" value={displayName}
                                onChange={e => {
                                    setDisplayName(e.target.value);
                                    setisRegistered(false);
                                    Valid();
                                }} />
                        </div>

                        <div className='login_body_input'>
                            <input placeholder="Password" className="login_input" id='pass1' type="password" value={password}
                                onChange={e => {
                                    setPassword(e.target.value);
                                    setisRegistered(false);
                                    Valid();
                                }} />
                        </div>

                        <div className='login_body_input'>
                            <input placeholder="Confirm Password" className="login_input" id='pass2' type="password" value={confirmedPassword}
                                onChange={e => {
                                    setcConfirmedPassword(e.target.value);
                                    setisRegistered(false);
                                    Valid();
                                }} />
                        </div>

                        <div className='login_body_input'>
                            <label for="img" class="btn btn-dark">Click To Upload Profile Picture </label>
                            <input id="img" type="file" accept="image/png, image/jpeg" hidden />
                        </div>


                        <div className='login_buttom'>
                            {renderAuthButton()}
                        </div>

                    </form>

                    <div id='notregistered'>Already Registered?&nbsp;
                        <span>
                            <Link to='/' id="forRegister">
                                click here
                            </Link>
                            &nbsp;to Login.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;