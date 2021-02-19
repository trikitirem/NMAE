import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Navbar from '../../navbar/navbar'
import { useLocation } from 'wouter';

function ProfilePage({ id }) {
    
    return <div>
        <Navbar />
        <header></header>
        <section>
            asd
        </section>
    </div>
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
}

export default connect(mapStateToProps)(ProfilePage);