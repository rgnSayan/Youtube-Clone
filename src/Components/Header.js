import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'

function Header() {

    const [input, SetInput] = useState("")
    const [{ user }, dispatch] = useStateValue()
    console.log(dispatch);

    return (
        <div className="header">
            <div className="header__left" >
                <MenuIcon />
                <Link to="/">
                    <img
                        className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" />
                </Link>
            </div>

            <div className="header__input">
                <input type="text" value={input} onChange={(event) => SetInput(event.target.value)} placeholder="Search..." />
                <Link to={`/search/${input}`}>
                    <SearchIcon />
                </Link>
            </div>

            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar
                    src={user?.photoURL}
                    alt="https://cdn.iconscout.com/icon/free/png-256/ninja-1659490-1410012.png"
                />
            </div>
        </div>
    )
}

export default Header
