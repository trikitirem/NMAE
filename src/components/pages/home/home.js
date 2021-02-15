import React from 'react';
import BigPostCard from '../bigPostCard/BigPostCard';
import './home.css';


export default function Home (){
    return (
        <div>
            <div className="title-bar">
                <div className="title">
                    <span>NAME</span>
                </div>  
                <div>share your experiences</div>
            </div>
            <header>
                <div className="recent-top-posts">
                    <div className="main-thread">
                        <BigPostCard />
                    </div>
                    <div className="rest-threads"></div>
                </div>
                <div className="recent-top-topics"></div>
            </header>
            <section>section</section>
        </div>
    );
}