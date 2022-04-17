import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import LoginModal from './LoginModal'
import dataBase from './DataBase'

function Login() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [openModel, setOpenModel] = useState(false);

    useEffect(() => {
        setIsLoggedIn(false)
        Valid();
    }, [userName, password])

    const renderAuthButton = () => {
        if (isLoggedIn) {
            return (
                <Link to='/chat'>
                    <input type="submit" value="login" className="btn btn-outline-secondary" />
                </Link>
            );
        } else {
            return (
                <input type="button" value="login" className="btn btn-outline-secondary" onClick={() => {setOpenModel(true);}} />
            );
        }
    }

    const Valid = () => {
        if (userName.length > 0 && password.length > 0 && (dataBase.usersDataBase.has(userName) && dataBase.usersDataBase.get(userName).password === String(password))) {
            setIsLoggedIn(bool => bool = true)
        }
    }

    return (
        <div className='login'>
            <div className='login_page'>
                <div className='login_header'>
                    NTM
                </div>
                <div className='login_body'>
                    <h2> Login </h2>
                    <form id="loginForm" className="form" >
                        <div className='login_body_input'>
                            <input placeholder="Username" className="login_input" type="text" value={userName}
                                onChange={e => {
                                    setUserName(e.target.value);
                                }} />
                        </div>
                        <div className='login_body_input'>
                            <input placeholder="Password" className="login_input" id="pass" type="password" value={password} onChange={e => {setPassword(e.target.value);}} />
                        </div>
                        <div className='login_buttom'>
                            {renderAuthButton()}
                        </div>
                    </form>

                    <div id='notregistered'>Not registered?&nbsp;
                        <span>
                            <Link to='/register' id="forRegister">
                                click here
                            </Link>
                            &nbsp;to Register.
                        </span>
                    </div>
                </div>
            </div >
            {openModel && <LoginModal close_modal={setOpenModel} />}
        </div >
    );

}


export default Login;
