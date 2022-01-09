import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);

  return (
    <div title='Logout' onClick={onClick} className='headerOption'>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && (
        <Avatar className='headerOption__icon' src={user?.photoURL}>
          {user?.displayName?.charAt(0).toUpperCase()}
        </Avatar>
      )}
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  );
};

export default HeaderOption;
