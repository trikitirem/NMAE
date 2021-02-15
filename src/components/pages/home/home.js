import React from 'react';
import BigPostCard from '../../bigPostCard/BigPostCard';
import PostCard from '../../postCard/postCard';
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
                <div className="recent-top-topics"></div>
            </header>
            <section>trending on NMAE</section>
        </div>
    );
}