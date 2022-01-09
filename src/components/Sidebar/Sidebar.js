import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import SidebarImg from '../../assets/sidebar-top-img.jpeg';

const Sidebar = () => {
  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src={SidebarImg} alt='' />
        <Avatar className='sidebar__avatar' />
        <h2>Abhishek Agarwal</h2>
        <h4>abhi2703agrawal@gmail.com</h4>
      </div>

      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed your profile?</p>
          <p className='sidebar__statNumber'>123</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views of your post</p>
          <p className='sidebar__statNumber'>1234</p>
        </div>
      </div>

      <div className='sidebar__bottom'>
        <p className='sidebar__recent'>Recent</p>
        {recentItem('react')}
        {recentItem('developer')}
        {recentItem('leetcode')}
        {recentItem('javascript')}
        {recentItem('design')}
      </div>
    </div>
  );
};

export default Sidebar;
