import React, { useState } from 'react';
import './Login.css';
import LinkedinLogo from '../../assets/LinkedIn_Logo.svg.png';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { login as LoginAction } from '../../features/userSlice';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

const Login = () => {
  const [emailAdd, setEmailAdd] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setprofilePic] = useState('');

  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();
    if (!emailAdd.includes('@')) {
      return alert('Please enter valid email');
    }

    try {
      const cred = await signInWithEmailAndPassword(auth, emailAdd, password);
      const { uid, email, displayName, photoURL } = cred.user;
      dispatch(
        LoginAction({
          uid,
          email,
          displayName,
          photoURL,
        })
      );
    } catch (error) {
      alert(error.message);
    }
  };

  const register = async () => {
    if (!name.trim().length) {
      return alert('Please enter full name');
    }
    if (!emailAdd.includes('@')) {
      return alert('Please enter valid email');
    }

    try {
      const cred = await createUserWithEmailAndPassword(
        auth,
        emailAdd,
        password
      );
      await updateProfile(cred.user, {
        displayName: name,
        photoURL: profilePic,
      });
      const { uid, email, displayName, photoURL } = cred.user;

      dispatch(
        LoginAction({
          uid,
          email,
          displayName,
          photoURL,
        })
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='login'>
      <img src={LinkedinLogo} alt='Linkedin Login Page' />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Full Name (required if registering)'
        />
        <input
          value={profilePic}
          onChange={(e) => setprofilePic(e.target.value)}
          type='text'
          placeholder='Profile pic url (optional)'
        />
        <input
          value={emailAdd}
          onChange={(e) => setEmailAdd(e.target.value)}
          type='email'
          placeholder='Email'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
        />
        <button onClick={loginHandler} type='submit'>
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span onClick={register} className='login__register'>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
