import React from 'react'

import "./card.css";

export default function BigPostCard() {
    return (
        <div className="container">
            <div className="bg-image"></div>
            <div className="description">
                <div className="author">author name</div>
                <div className="post-title">Title</div>
                <div className="post-description">Description</div>
                <div className="other-info">date</div>
            </div>
        </div>
    );
}