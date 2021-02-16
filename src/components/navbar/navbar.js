import React from 'react'
import './navbar.css';

import { useLocation } from 'wouter';

//icons
import { ReactComponent as AddArticle } from '../../assets/icons/article-add.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user-circle.svg';

export default function Navbar() {
    const [location, setLocation] = useLocation();

    return (
        <div className="nav-bar">
            <div className="title-bar">
                <div className="title">
                    <span>NMAE</span>
                </div>
                <div>share your experiences</div>
            </div>
            <div style={{ display: 'flex' }}>
                {location != "/create" &&
                    <div style={{ marginRight: "1rem", cursor: 'pointer' }}
                        onClick={() => setLocation('/create')}>
                        <AddArticle width="24px" height="24px" />
                    </div>
                }
                <div style={{cursor: "pointer"}}><UserIcon height="24px" width="24px" /></div>
            </div>
        </div>
    );
}
