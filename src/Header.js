import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" />

            </div>
            <div className="header__input">
                <input type="text" placeholder="Search" />
                <SearchIcon className="header__inputButton" />
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar src="https://scontent.fbne6-1.fna.fbcdn.net/v/t1.0-9/71083781_10214932870304025_3054890081639727104_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=qrgHbDe9G_4AX-oImed&_nc_ht=scontent.fbne6-1.fna&oh=7ce2818c232ad2ddaff45b2ad18073ff&oe=5FA324F0" />
            </div>

        </div>
    )
}

export default Header
