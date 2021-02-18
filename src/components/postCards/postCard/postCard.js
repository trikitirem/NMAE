import React from 'react'
import "./style.css"

export default function PostCard() {
    return (
        <div className="card">
            <div className="description">
                <div className="author">author name</div>
                <div className="post-title">Some Placeholder Title: Article About Nothing</div>
                <div className="other-info">Date</div>
            </div>
            <div className="right-image"></div>
        </div>
    );
}
