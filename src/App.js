import React from 'react';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <main className='app__body'>
        <Sidebar />
        <Feed />
      </main>
      {/* Widgets */}
    </div>
  );
};

export default App;

/*

mkdir -p src/components/Post && touch src/components/Post/Post.js src/components/Post/Post.css

*/
