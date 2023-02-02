import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';


function Header() {
    return (
        <div className='header'>
            {/* <h2>I'm the header</h2> */}
            <IconButton>
                <PersonIcon fontSize='large' className='header__icon' />
            </IconButton>

            <img className='header__logo' src="https://cdn-icons-png.flaticon.com/512/2585/2585175.png" alt="hello" />
            {/* <PersonIcon fontSize='large' className='header__icon' /> */}

            <IconButton>
                <ForumIcon fontSize='large' className="header__icon" />
            </IconButton>


        </div>
    )
}

export default Header 