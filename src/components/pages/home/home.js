import React from 'react';
import BigPostCard from '../../postCards/bigPostCard/BigPostCard';
import PostCard from '../../postCards/postCard/postCard';
import './home.css';

import {connect} from 'react-redux';
import Navbar from '../../navbar/navbar';
import Footer from '../../footer/footer';

function Home({auth}) {
    console.log(auth);

    return (
        <div>
            <Navbar />
            <header id="home-header">
                <div className="chosen-for-you">
                    <div className="main-chosen">
                        <BigPostCard />
                    </div>
                    <div className="rest-chosen">
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                    </div>
                </div>
                <div className="recent-top-topics">
                    <div><span>Recent top topics</span></div>
                </div>
            </header>
            <div style={{ paddingBottom: "1rem" }}></div>
            <section className="trending">
                <div><span>Trending on NMAE</span></div>
                <div className="trending-list">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
            </section>
            <section className="feed-posts">
                <div className="post-list">
                </div>
                <div>
                    <aside>
                    </aside>
                </div>
            </section>
            <Footer />
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps)(Home);