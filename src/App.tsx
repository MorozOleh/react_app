import React from 'react';
import { CounterClass } from './components/CounterClass';
import './App.scss';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <div className='container'>
        <CounterClass />
      </div>
    </div>
  );
}

export default App;
