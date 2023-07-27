
import './App.css';
import React , {useState} from 'react';
import Navbar from './components/Navbar';
import Textinput from './components/Textform';
import Alert from './components/Alert';

function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);
  const showAlert = (message,type)=>{
      setAlert({
        message:message,
        type:type
      });
      setTimeout(()=>{
        setAlert(null);
      },1500);
  }
  
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
      <Alert alert={alert}/>
      <div className="container">
        <Textinput heading="Analyzer text Area " theme={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
