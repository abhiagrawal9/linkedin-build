import React from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from '../InputOption/InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Post from '../Post/Post';

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feed__inputContianer'>
        <div className='feed__input'>
          <CreateIcon />
          <form autoComplete='off'>
            <input type='text' name='post' id='post' />
            <button type='submit'>Post</button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOption title='Photo' Icon={ImageIcon} color='#70B5F9' />
          <InputOption title='Video' Icon={SubscriptionsIcon} color='#7FC15E' />
          <InputOption title='Event' Icon={EventIcon} color='#EAAF56' />
          <InputOption
            title='Write article'
            Icon={AssignmentIcon}
            color='#FC9295'
          />
        </div>
      </div>
      <div className='feed__posts'>
        <Post
          name='Abhishek Agrawal'
          description='React is fun'
          message='This build uses React.js, Redux, Firebase and Material UI.'
        />
      </div>
    </div>
  );
};

export default Feed;
