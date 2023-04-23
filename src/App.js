import {BrowserRouter , Routes , Route} from 'react-router-dom'

import About from './components/About';
import React , {useState} from 'react'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import Loginform from './components/loginform';






function App() {
 
  const [mode , darkMode] = useState('light');
  const [text , setText] = useState('Enable Ligth mode');
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }
 
  let handleDarkMode = ()=>{
    if(mode === 'dark'){
      darkMode('light');
      setText('Enable Dark Mode');
      document.body.style.backgroundColor = "White";
      showAlert("Light mode has been enabled","success");
    }
    else{
      darkMode('dark');
      setText('Enable Light Mode');
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled","success");
    }
  }


  return (
    <>
   
       <BrowserRouter>
    <Navbar title="Nishant" about="About Us" mode={mode} text={text}  handleDarkMode = {handleDarkMode}  />
    
 
 
   
  
       {/* <Link to="/about" element={<About/>}></Link> */}
       
       <Routes>
        
        <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze"  mode={mode} />}></Route>
        <Route path="/about" element={<About mode={mode}/>}></Route>
        <Route path="/Loginform" element={<Loginform/>}></Route>
       </Routes>
       </BrowserRouter>
      
          
        {/* <About/> */}
        
        <div className="container">
    <Alert alert={alert} />
    </div>
   
    </>
  );
}

export default App;
