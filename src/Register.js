import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import RegisterErrorModal from './RegisterErrorModal';
import RegisterSuccessModal from './RegisterSuccessModal';

import User from './User';
import a from './DataBase'

function Register() {

    const [isRegistered, setisRegistered] = useState(() => false);
    const [userName, setUserName] = useState(() => '')
    const [displayName, setDisplayName] = useState(() => '')
    const [password, setPassword] = useState(() => '')
    const [confirmedPassword, setcConfirmedPassword] = useState(() => '')
    const [openErrorModel, setOpenErrorModel] = useState(() => false);
    const [openSuccessModel, setOpenSuccessModel] = useState(() => false);
    const [errorDescription, seterrorDescription] = useState(() => 'please fill all the fields');

    useEffect(() => {
        setUserName(userName)
    }, [userName])

    useEffect(() => {
        setisRegistered(false)
        Valid();
    }, [userName, password, displayName, confirmedPassword])


    const renderAuthButton = () => {
        if (isRegistered) {
            return (
                <input type="button" value="Register" className="btn btn-outline-secondary" onClick={() => {
                    Valid();
                    setOpenSuccessModel(true);
                    new User(userName, displayName, password, './noadog.jpg');
                    a.addUserToDataBase(userName, User)
                }} />
            );
        } else {
            return (
                <input type="button" value="Register" className="btn btn-outline-secondary" onClick={() => {setOpenErrorModel(true); Valid(); }} />
            );
        }
    }

    const Valid = () => {
        if (userName.length > 0 && password.length > 0 && displayName.length > 0
            && String(password) === String(confirmedPassword) && checkPassword() && !(a.usersDataBase.has(userName))) {
            setisRegistered(bool => bool = true)
            console.log("username len " + userName.length);
            console.log("username " + userName);
            console.log("password " + password.length);
            console.log("displayname " + displayName.length);
            console.log("password " + String(password));
            console.log("confirm password " + String(confirmedPassword));
            console.log("check password " + checkPassword());
            console.log("check user exist: " + (a.usersDataBase.has(userName)));
            console.log("map size: " + (a.usersDataBase.size));
        }
        else {
            if (userName.length === 0 || confirmedPassword.length === 0 || displayName.length === 0 || password.length === 0) {
                seterrorDescription('please fill all the fields');
                console.log("....................................................................................");
                console.log("LEN 0:");
                console.log("username len " + userName.length);
                console.log("username " + userName);
                console.log("password " + password.length);
                console.log("displayname " + displayName.length);
                console.log("password " + String(password));
                console.log("confirm password " + String(confirmedPassword));
                console.log("check password " + checkPassword());
                console.log("check user exist: " + (a.usersDataBase.has(userName)));
                console.log("map size: " + (a.usersDataBase.size));
                console.log("....................................................................................");
            } else if (checkPassword() !== true) {
                seterrorDescription('password must contain at least one letter a-z or A-Z and one digit 0-9');
                console.log("....................................................................................");
                console.log("username len " + userName.length);
                console.log("username " + userName);
                console.log("password " + password.length);
                console.log("displayname " + displayName.length);
                console.log("password " + String(password));
                console.log("confirm password " + String(confirmedPassword));
                console.log("check password " + checkPassword());
                console.log("check user exist: " + (a.usersDataBase.has(userName)));
                console.log("map size: " + (a.usersDataBase.size));
                console.log("....................................................................................");
            } else if (String(password) !== String(confirmedPassword)) {
                console.log("....................................................................................");
                console.log("username len " + userName.length);
                console.log("username " + userName);
                console.log("password " + password.length);
                console.log("displayname " + displayName.length);
                console.log("password " + String(password));
                console.log("confirm password " + String(confirmedPassword));
                console.log("check password " + checkPassword());
                console.log("check user exist: " + (a.usersDataBase.has(userName)));
                console.log("map size: " + (a.usersDataBase.size));
                console.log("....................................................................................");
                seterrorDescription('Incompatible passwords');
            } else {
                console.log("....................................................................................");
                console.log("username len " + userName.length);
                console.log("username " + userName);
                console.log("password " + password.length);
                console.log("displayname " + displayName.length);
                console.log("password " + String(password));
                console.log("confirm password " + String(confirmedPassword));
                console.log("check password " + checkPassword());
                console.log("check user exist: " + (a.usersDataBase.has(userName)));
                console.log("map size: " + (a.usersDataBase.size));
                console.log("....................................................................................");
                seterrorDescription('username already exists, pls pick another One');
            }
        }
    }

    const checkPassword = () => {
        return /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
    }

    return (
        <div className='login'>
            {openSuccessModel && <RegisterSuccessModal close_modal={setOpenSuccessModel} />}
            {openErrorModel && <RegisterErrorModal close_modal={setOpenErrorModel} message={errorDescription} />}

            <div className='login_page'>
                <div className='login_header'>
                    <div>NTM</div>
                </div>
                <div className='login_body'>
                    <h2> Register </h2>


                    <form id="RegisterForm" className="form" action="/chat">
                        <div className='login_body_input'>
                            <input placeholder="Username" className="login_input" type="text" value={userName}
                                onChange={e => { setUserName(e.target.value); }} />
                        </div>

                        <div className='login_body_input'>
                            <input placeholder='Display Name' className="login_input" type="text" value={displayName}
                                onChange={e => { setDisplayName(e.target.value); }} />
                        </div>

                        <div className='login_body_input'>
                            <input placeholder="Password" className="login_input" type="password" value={password}
                                onChange={e => { setPassword(e.target.value); }} />
                        </div>

                        <div className='login_body_input'>
                            <input placeholder="Confirm Password" className="login_input" type="password" value={confirmedPassword}
                                onChange={e => { setcConfirmedPassword(e.target.value); }} />
                        </div>

                        <div className='login_body_input'>
                            <label htmlFor="img" className="btn btn-dark">Click To Upload Profile Picture </label>
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