import React from 'react';
import { useSelector } from 'react-redux';
import { SvgIconComponent } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

import { selectUser } from '../../features/userSlice';
import './HeaderOption.css';

type HeaderOptionProps = {
  title: string;
  Icon?: SvgIconComponent;
  avatar?: boolean;
  onClick?: () => void;
};

const HeaderOption: React.FC<HeaderOptionProps> = ({
  avatar,
  Icon,
  title,
  onClick,
}) => {
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
