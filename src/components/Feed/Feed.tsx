import React, { useMemo, useState, useRef, useEffect } from 'react';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import CreateIcon from '@material-ui/icons/Create';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';
import {
  collection,
  onSnapshot,
  serverTimestamp,
  addDoc,
  query,
  orderBy,
  QuerySnapshot,
  DocumentData,
} from 'firebase/firestore';

import { db } from '../../firebase';
import { selectUser } from '../../features/userSlice';
import { IPost } from '../../models/Post';
import InputOption from '../InputOption/InputOption';
import ImageIcon from '@material-ui/icons/Image';
import Post from '../Post/Post';
import './Feed.css';

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const inputRef = useRef<HTMLInputElement>(null!);
  const colRef = useMemo(() => collection(db, 'posts'), []);
  const user = useSelector(selectUser);

  useEffect(() => {
    const orderQuery = query(colRef, orderBy('timestamp', 'desc'));
    const unsubPostsCollection = onSnapshot(
      orderQuery,
      (snapshot: QuerySnapshot<DocumentData>) => {
        const posts: IPost[] = snapshot.docs.map((doc) => ({
          ...(doc.data() as IPost),
          id: doc.id,
        }));
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

  const sendPostHandler = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const postMessage = inputRef.current.value;
    try {
      addDoc(colRef, {
        name: user?.displayName,
        photoUrl: user?.photoURL,
        description: user?.email,
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
        <FlipMove>{posts.length > 0 && postsData}</FlipMove>
      </div>
    </div>
  );
};

export default Feed;
