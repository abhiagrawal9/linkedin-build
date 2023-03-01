import './Post.css';

import React, { forwardRef } from 'react';

import { Avatar } from '@material-ui/core';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

import { Timestamp } from '../../models/Post';
import InputOption from '../InputOption/InputOption';

type PostProps = {
  message: string;
  name: string;
  photoUrl?: any;
  description: string;
  timestamp: Timestamp;
};

const getTimeDifference = (timestamp: Timestamp): string => {
  const milliseconds =
    timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000;

  // Create a new Date object for the timestamp
  const date = new Date();
  date.setTime(milliseconds);

  /// Get the current date
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDiff = currentDate.getTime() - date.getTime();

  // Calculate the time difference in minutes, hours, and days
  const diffMinutes = Math.floor(timeDiff / (1000 * 60));
  const diffHours = Math.floor(timeDiff / (1000 * 60 * 60));
  const diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30.44);

  let timeDiffVal: string;
  // Output the time difference
  if (diffMinutes === 0) {
    timeDiffVal = `now`;
  } else if (diffMinutes < 60) {
    timeDiffVal = `${diffMinutes} minutes`;
  } else if (diffHours < 24) {
    timeDiffVal = `${diffHours} hours`;
  } else if (diffDays < 30) {
    timeDiffVal = `${diffDays} days`;
  } else if (diffMonths < 12) {
    timeDiffVal = `${diffMonths} months`;
  } else {
    const diffYears = Math.floor(diffDays / 365.25);
    timeDiffVal = `${diffYears} years`;
  }

  return timeDiffVal;
};

const Post: React.FC<PostProps> = forwardRef(
  ({ name, description, message, photoUrl, timestamp }, ref) => {
    return (
      <div ref={ref as React.RefObject<HTMLDivElement>} className='post'>
        <div className='post__header'>
          <Avatar src={photoUrl}>{name?.charAt(0).toUpperCase()}</Avatar>
          <div className='post__info'>
            <h2>{name}</h2>
            <p>{description}</p>
            <p className='time'>{timestamp && getTimeDifference(timestamp)}</p>
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
