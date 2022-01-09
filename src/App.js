import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <main className='app__body'>
        <Sidebar />
      </main>
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
};

export default App;
