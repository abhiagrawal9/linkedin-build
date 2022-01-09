import React, { useMemo, useState, useRef, useEffect } from 'react';
import {
  collection,
  onSnapshot,
  serverTimestamp,
  addDoc,
  query,
  orderBy,
} from 'firebase/firestore';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from '../InputOption/InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Post from '../Post/Post';
import { db } from '../../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const inputRef = useRef('');
  const colRef = useMemo(() => collection(db, 'posts'), []);
  const user = useSelector(selectUser);

  useEffect(() => {
    const orderQuery = query(colRef, orderBy('timestamp', 'desc'));
    const unsubPostsCollection = onSnapshot(
      orderQuery,
      (snapshot) => {
        const posts = [];
        snapshot.docs.forEach((doc) => {
          const postItem = {
            id: doc.id,
            ...doc.data(),
          };
          posts.push(postItem);
        });
        console.log(posts);
        setPosts(posts);
      },
      (error) => {
        console.error(error);
      }
    );
    return () => {
      unsubPostsCollection();
    };
  }, [colRef]);

  const sendPostHandler = async (e) => {
    e.preventDefault();
    const postMessage = inputRef.current.value;
    try {
      addDoc(colRef, {
        name: user.displayName,
        photoUrl: user.photoURL,
        description: 'Web Developer',
        message: postMessage,
        timestamp: serverTimestamp(),
      });
      inputRef.current.value = '';
    } catch (error) {
      console.error(error);
    }
  };

  const postsData = posts.map((post) => {
    return (
      <Post
        key={post.id}
        photoUrl={post.photoUrl}
        name={post.name}
        description={post.description}
        message={post.message}
      />
    );
  });

  return (
    <div className='feed'>
      <div className='feed__inputContianer'>
        <div className='feed__input'>
          <CreateIcon />
          <form autoComplete='off'>
            <input ref={inputRef} type='text' name='post' id='post' />
            <button onClick={sendPostHandler} type='submit'>
              Post
            </button>
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
        {posts.length > 0 && postsData}
        {/* {posts.length === 0 && (
          <h3 style={{ textAlign: 'center' }}>No posts to show!</h3>
        )} */}
      </div>
    </div>
  );
};

export default Feed;
