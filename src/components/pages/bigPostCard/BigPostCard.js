import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom';
import "./card.css";

export default function BigPostCard() {
    return (
        <BrowserRouter>
            <Link to="/posts">
                <div className="container">
                    <div className="bg-image"></div>
                </div>
            </Link>
        </BrowserRouter>
    );
}