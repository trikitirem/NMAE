import React from 'react';
import { connect } from 'react-redux';
import { actionsLogOut } from '../../store/actions/authActions';
import { useLocation } from 'wouter';

function AccountMenu({ auth, actionsLogOut }) {
    const [location, setLocation] = useLocation();

    //TODO: make menu update after log out

    return (<div>
        {auth.id !== "" ? <div className="menu-part">
            <div onClick={()=> {setLocation("/profile")}}><span>my account</span></div>
            <div onClick={()=> actionsLogOut()}><span>log out</span></div>
        </div> :
            <div className="menu-part">
                <div><span style={{fontSize: "0.9rem"}}>you are not logged in yet</span></div>
                <div><span style={{color: "#f55742"}}
                onClick={()=> setLocation("/login")}>log in</span></div>
            </div>}
    </div>);
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionsLogOut: () => dispatch(actionsLogOut()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountMenu);