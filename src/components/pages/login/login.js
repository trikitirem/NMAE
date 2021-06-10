import React, { useState } from 'react'
import { connect } from 'react-redux';
import { actionsLogIn } from '../../../store/actions/authActions';
import { useLocation } from "wouter";
import './style.css';

function LoginPage({actionsLogIn}) {
    const [, setLocation] = useLocation();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const redirect = () => {
        setLocation("/");
    }

    return (
        <div className="auth-page">
            <div className="title-big">
                <span onClick={() => setLocation("/")}>NMAE</span> share your experiences
            </div>
            <div className="auth-page-form">
                <input type="text" value={login} placeholder="login" onChange={e => setLogin(e.target.value)} /><br />
                <input type="password" value={password} placeholder="passowrod" onChange={e => setPassword(e.target.value)} /><br />
                <div className="btn" onClick={()=> actionsLogIn({login, password, redirect})}>log in</div><br />
                <span>no account? <span className="link" onClick={() => setLocation('/register')}>sign up</span></span>
            </div>

            <footer>
                <div className="footer-items">
                    <span>NMAE &copy; all rights reserved</span>
                </div>
            </footer>

        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionsLogIn: (data) => dispatch(actionsLogIn(data)),
    };
}

export default connect(null, mapDispatchToProps)(LoginPage);
