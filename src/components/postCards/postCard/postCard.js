import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom';
import "./postCard.css"

export default function PostCard() {
    return (
        <BrowserRouter>
            <Link to="/posts">
                <div className="card">
                    <div className="description">
                        <div className="author">author name</div>
                        <div className="post-title">Some Placeholder Title: Article About Nothing</div>
                        <div className="other-info">Date</div>
                    </div>
                    <div className="right-image"></div>
                </div>
            </Link>
        </BrowserRouter>
    );
}
