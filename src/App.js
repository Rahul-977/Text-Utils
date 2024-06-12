
import React,{ useState } from 'react';
import './App.css';
import About from './comp/About';
import Navbar from './comp/Navbar';
import Textbox from './comp/Textbox';
import Alert from './comp/Alert';
import {
    BrowserRouter as Router,
    Route,
    Routes
 } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [textMode, setTextMode] = useState('dark');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
      
  }
  const togglemode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setTextMode('light')
      document.body.style.backgroundColor = '#363333';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils-DarkMode';
      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now';
      // },2000)
      // setInterval(()=>{
      //   document.title = 'Download TextUtils Now';
      // },1500)
    }
    else{
      setMode('light');
      setTextMode('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils-LightMode';
    }
  }
  return (
    <>
   <Router>
     <Navbar title = "Textutils" textMode={textMode} mode = {mode} togglemode = {togglemode}/>
     <Alert alert={alert}/>
     <div className="container my-3" >
     <Routes>
            <Route exact path="/about" element={<About mode ={mode}/>}>
            </Route>
            <Route exact path="/" element={<Textbox showAlert={showAlert} heading = "Enter text to analyze" mode = {mode} />}>
            </Route>
          </Routes>
     </div>
  </Router>
    </>
  );
}
export default App;
