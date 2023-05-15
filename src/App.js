import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './Componant/Navbar';
import TextForm from './Componant/TextForm';
import About from './Componant/About';
import Alert from './Componant/Alert';
// import React, { Component } from 'react';

function App() {
  const[mode,setmode]=useState('light'); //whether dark mode is enable or not
  
const [alert, setalert] = useState(null); //this is state
const showAlert=(message , type)=>{   //this is function which take input message and type
  setalert({  //to set the massege in alert
    msg:message,
    type:type
  })
  setTimeout(() => {   //after 2 second auto. alert will not reflect
    setalert(null)
  }, 2000); 
}

  const togglemode=()=>{
    if(mode ==='light'){
      setmode('dark') 

      document.body.style.backgroundColor=(mode==='light'?'#343a40':'white') 
      document.body.style.color=(mode==='light'?'#343a40':'white')
      
      showAlert("DarkMode is Enable","Sucess")// to change the message of alert
      // document.title="TextUtill-DarkMode"  //to change the title 
    }
    else{ 
      setmode('light')
      document.body.style.backgroundColor=(mode==='dark'?'white':'#343a40' )
      document.body.style.color=(mode==='light'?'#343a40':'white')
      
      showAlert("DarkMode is Disable","Sucess") //to change massege the alert
      // document.title="TextUtill-LightMode"  //to change the title 
    }
  }


  return (
<>
{/* For Navbar.js */}
<Navbar title="TextUtils54" area="About" mode={mode} toggleMode={togglemode}/>

{/* for Alert.js */}
<Alert alert={alert}/>

{/* it is for default Props */}
{/* <Navbar/>   */}


<div className="container my-3">
{/* For TextForm.js */}
<TextForm showAlert={showAlert} heading="Try TextUtils - Word counter,character counter  " mode={mode}/>

{/* For About.js */}
{/* <About mode={mode}/> */}
</div>
</>
  );
} 

export default App;
