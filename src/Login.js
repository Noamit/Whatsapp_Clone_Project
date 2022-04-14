import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.SubmitHandler = this.onSubmitHandler.bind(this);
      }
    
      onSubmitHandler = (e) => {
        e.preventDefault();
        document.getElementById("loginForm").submit();
    
      }

    render () {
        return (
            <div className='login'>
                <div className='login_page'>
                    <div className='login_header'>
                        <div>NTM</div>
                    </div>
                    <div className='login_body'>
                        <h2> Login </h2>
    
                        <form id="loginForm" className="form" action="/chat">
                            <div className='login_body_input'>
                                <input placeholder="Username" className="login_input" type="text" />
                            </div>
                            <div className='login_body_input'>
                                <input placeholder="Password" className="login_input" type="password" />
                            </div>
                            
                            <div className='login_buttom'>
                                <input type="submit" value="login" className="btn btn-outline-secondary" onClick={this.onSubmitHandler} />
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
}

export default Login;
