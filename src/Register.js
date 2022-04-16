import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

function Register() {
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
                            <input placeholder="Username" className="login_input" type="text" />
                        </div>

                        <div className='login_body_input'>
                            <input placeholder='Display Name' className="login_input" type="text" />
                        </div>

                        <div className='login_body_input'>
                            <input placeholder="Password" className="login_input" type="password" />
                        </div>

                        <div className='login_body_input'>
                            <input placeholder="Confirm Password" className="login_input" type="password" />
                        </div>

                        <div className='login_body_input'>
                            <label for="img" class="btn btn-dark">Click To Upload Profile Picture </label>
                            <input id="img" type="file" accept="image/png, image/jpeg" hidden />
                        </div>


                        <div className='login_buttom'>
                            <Link to='/chat'>
                                <input type="submit" value="Register" className="btn btn-outline-secondary" />
                            </Link>
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