
import './App.css';
import Navbar from './components/Navbar.js';
import Textinput from './components/Textform.js';
import React , {useState} from 'react';

function App() {
  const [mode , setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#010526';
    }
    else{
      document.body.style.backgroundColor = 'white';
      setMode('light');
    }
  }
  return (
    <>
      <Navbar title="TextUtils" theme={mode} toggleMode={toggleMode}/>
      <div className="container">
        <Textinput heading="Analyzer text Area " theme={mode}/>
      </div>
    </>
  );
}

export default App;
