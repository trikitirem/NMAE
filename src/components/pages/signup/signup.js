import React from 'react'
import { connect } from 'react-redux';
import { actionsSignUp } from '../../../store/actions/authActions';
import { useLocation } from "wouter";

function SignupPage() {
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
        actionsLogIn: (data) => dispatch(actionsSignUp(data)),
    };
}

export default connect(mapDispatchToProps)(SignupPage);
