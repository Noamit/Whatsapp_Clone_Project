import React, {useState} from 'react';
import Appbody from './Appbody';
import { Link } from 'react-router-dom';
import './Login.css'


function Login() {

    // const [userInfo, setUserInfo] = useState ({userName: "", password: ""});

    // const validation = (e) => {
    //     return true;
    // }

    return (
        <div className='login'>
                <div className='login_page'>
                    <div className='login_header'>
                        NTM
                    </div>
                    <div className='login_body'>
                        <h2> Login </h2>
                        <form id="loginForm" className="form">
                            <div className='login_body_input'>
                                <input placeholder="Username" className="login_input" type="text" />
                            </div>
                            <div className='login_body_input'>
                                <input placeholder="Password"  className="login_input" type="password"/>
                            </div>
                            <div className='login_buttom'>
                                {/* <Link to='/chat'> */}
                                <input type="submit" value="login" className="btn btn-outline-secondary" />
                                {/* </Link> */}
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
                </div>
            </div>
    );
}

export default Login;
