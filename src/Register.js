import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

class Register extends React.Component {
    
    constructor(props) {
        super(props);
        this.SubmitHandler = this.onSubmitHandler.bind(this);
      }
    
      onSubmitHandler = (e) => {
        e.preventDefault();
        document.getElementById("RegisterForm").submit();
    
      }

    render () {
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
                                <p>
                                    Username
                                </p>
                                <input className="login_input" type="text" />
                            </div>
                            <div className='login_body_input'>
                                <p>
                                    Display Name
                                </p>
                                <input className="login_input" type="text" />
                            </div>
                            <div className='login_body_input'>
                                <p>
                                    Password
                                </p>
                                <input className="login_input" type="password" />
                            </div>
                            <div className='login_body_input'>
                                <p>
                                    Confirm Password
                                </p>
                                <input className="login_input" type="password" />
                            </div>
                            <div className='login_buttom'>
                                <input type="submit" value="login" className="btn btn-outline-secondary" onClick={this.onSubmitHandler} />
                            </div>
                        </form>
    
                        <div id='notregistered'>Already registered?&nbsp;
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
        );
    }
}

export default Register;
