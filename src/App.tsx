import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import {
  logout as LogoutAction,
  login as LoginAction,
  selectUser,
} from './features/userSlice';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
import { auth } from './firebase';
import Widgets from './components/Widgets/Widgets';
import './App.css';

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
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
