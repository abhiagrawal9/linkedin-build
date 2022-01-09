import React from 'react';
import './Header.css';
import HeaderOption from '../HeaderOption/HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import headerIcon from '../../assets/header-icon.svg';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '../../assets/avatar.jpg';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__left'>
        <img
          className='header__icon'
          src={headerIcon}
          alt='Linkedin header icon'
        />
        <div className='header__search'>
          <SearchIcon />
          <input type='text' name='search' id='search' placeholder='Search' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar={Avatar} title='Notifications' />
      </div>
    </header>
  );
};

export default Header;
