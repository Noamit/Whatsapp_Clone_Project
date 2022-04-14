import React from 'react';
import './Login.css'

function Login() {
    return (
        <div className='login_page'>
            <div className='login_header'>
                <h1>NTM</h1>
            </div>
            <div className='login_body'>
                <form>
                    <div>
                        <span>
                            Username
                        </span>
                        <input>
                        </input>
                    </div>
                    <div>
                        <span>
                            Password
                        </span>
                        <input>
                        </input>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
