import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom';
import "./card.css";

export default function BigPostCard() {
    return (
        <BrowserRouter>
            <Link to="/posts">
                <div className="container">
                    <div className="bg-image"></div>
                    <div className="description">
                        <div className="author">author name</div>
                        <div className="post-title">Title</div>
                        <div className="post-subtitle">Subtitle</div>
                        <div className="other-info">date</div>
                    </div>
                </div>
            </Link>
        </BrowserRouter>
    );
}