import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../../navbar/navbar'


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