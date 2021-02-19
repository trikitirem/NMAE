import React, { useState } from 'react'
import { connect } from 'react-redux';
import { actionsSignUp } from '../../../store/actions/authActions';
import { useLocation } from "wouter";

function SignupPage({ actionsSignUp }) {
    const [location, setLocation] = useLocation();
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
                <div className="btn" onClick={() => actionsSignUp({ login, password, redirect })}>sign up</div><br />
                <span>have an account? <span className="link" onClick={() => setLocation('/login')}>log in</span></span>
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
        actionsSignUp: (data) => dispatch(actionsSignUp(data)),
    };
}

export default connect(null, mapDispatchToProps)(SignupPage);
