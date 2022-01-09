import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';

import './Header.css';
import HeaderOption from '../HeaderOption/HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import headerIcon from '../../assets/header-icon.svg';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { logout } from '../../features/userSlice';
import { auth } from '../../firebase';

const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    dispatch(logout());
    await signOut(auth);
  };

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
          <input
            autoComplete='off'
            type='text'
            name='search'
            id='search'
            placeholder='Search'
          />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar={true} onClick={logoutHandler} title='Me' />
      </div>
    </header>
  );
};

export default Header;
