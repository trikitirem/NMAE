import React from 'react';
import BigPostCard from '../../postCards/bigPostCard/BigPostCard';
import PostCard from '../../postCards/postCard/postCard';
import './home.css';


export default function Home() {
    return (
        <div>
            <div className="nav-bar">
                <div className="title-bar">
                    <div className="title">
                        <span>NMAE</span>
                    </div>
                    <div>share your experiences</div>
                </div>
                <div>avatar</div>
            </div>
            <header>
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
        </div>
    );
}