import React, { forwardRef } from 'react';
import { Avatar } from '@material-ui/core';
import InputOption from '../InputOption/InputOption';
import './Post.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

type PostProps = {
  message: string;
  name: string;
  photoUrl?: any;
  description: string;
};

const Post: React.FC<PostProps> = forwardRef(
  ({ name, description, message, photoUrl }, ref) => {
    return (
      <div ref={ref as React.RefObject<HTMLDivElement>} className='post'>
        <div className='post__header'>
          <Avatar src={photoUrl}>{name?.charAt(0).toUpperCase()}</Avatar>
          <div className='post__info'>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className='post__body'>
          <p>{message}</p>
        </div>

        <div className='post__actions'>
          <InputOption
            Icon={ThumbUpAltOutlinedIcon}
            title='Like'
            color='gray'
          />
          <InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray' />
          <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
          <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />
        </div>
      </div>
    );
  }
);

export default Post;
