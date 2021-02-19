import React, { useState } from 'react'
import './style.css';

import { useLocation } from 'wouter';

//icons
import { ReactComponent as AddArticle } from '../../assets/icons/article-add.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user-circle.svg';

import AccountMenu from './accountMenu';

export default function Navbar() {
    const [location, setLocation] = useLocation();
    const [menu, setMenu] = useState(false);

    return (
        <div className="nav-bar">
            <div className="title-bar">
                <div className="title" onClick={() => setLocation("/")}
                    style={{ cursor: 'pointer' }}>
                    <span>NMAE</span>
                </div>
                <div>share your experiences</div>
            </div>
            <div style={{ display: 'flex' }}>
                {location != "/create" &&
                    <div style={{ marginRight: "1rem", cursor: "pointer" }}
                        onClick={() => setLocation('/create')}>
                        <AddArticle width="24px" height="24px" />
                    </div>
                }
                <div style={{ cursor: 'pointer' }}
                    onClick={() => setMenu(!menu)} >
                    <UserIcon height="24px" width="24px" />
                    {menu && <div className="menu">
                        <AccountMenu />
                    </div>}
                </div>
            </div>

        </div>
    );
}

