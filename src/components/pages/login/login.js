import React from 'react'
import { connect } from 'react-redux';
import { actionsLogIn } from '../../../store/actions/authActions';
import { useLocation } from "wouter";
import './style.css';

function LoginPage() {
    const [location, setLocation] = useLocation();

    const submit = () => {

    }

    return (
        <div className="auth-page">
            <div className="title-big">
                <span onClick={() => setLocation("/")}>NMAE</span> share your experiences
            </div>
            <div className="auth-page-form">
                <input type="text" placeholder="login" /><br />
                <input type="password" placeholder="passowrod" /><br />
                <div className="btn">login</div><br />
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

export default connect(mapDispatchToProps)(LoginPage);
