import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import {
  logout as LogoutAction,
  login as LoginAction,
  selectUser,
} from './features/userSlice';
import Widgets from './components/Widgets/Widgets';

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(process.env.REACT_APP_API_KEY);
    console.log(process.env.REACT_APP_AUTH_DOMAIN);
    console.log(process.env.REACT_APP_DATABASE_URL);
    console.log(process.env.REACT_APP_PROJECT_ID);
    console.log(process.env.REACT_APP_STORAGE_BUCKET);
    console.log(process.env.REACT_APP_MESSAGING_SENDER_ID);
    console.log(process.env.REACT_APP_APP_ID);
    console.log(process.env.REACT_APP_MEASUREMENT_ID);

    const unsubAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        dispatch(LogoutAction());
        return;
      }
      const { uid, email, displayName, photoURL } = user;
      dispatch(
        LoginAction({
          uid,
          email,
          displayName,
          photoURL,
        })
      );
    });

    return () => {
      unsubAuth();
    };
  }, [dispatch]);

  return (
    <div className='app'>
      <Header />
      {!user ? (
        <Login />
      ) : (
        <main className='app__body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </main>
      )}
    </div>
  );
};

export default App;
