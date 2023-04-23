
import React,{useState} from 'react'
// import PropTypes from 'prop-types'


export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpClick = () =>{
  //  console.log("Uppercase was clicked");
   let newText = text.toUpperCase();
   setText(newText);
   props.showAlert("Converted to UpperCase!","success");
  }

  const handleCopy = ()=>{
    var Text = document.getElementById("Mybox");
    Text.select();
    navigator.clipboard.writeText(Text.value);
    props.showAlert("Copy to Clipboard","success");
  }

  const handleRemoveExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed!","success");
  }
  
  const handleLoClick = () =>{
   let newText = text.toLowerCase();
   setText(newText);
   props.showAlert("Converted to LowerCase!","success");

  }
  const handleClearClick = () =>{
   let newText = '';
   setText(newText);
   props.showAlert("Text Cleared!","success");
  }

  const handleOnChange = (event) =>{
    // console.log("onchage");
   setText(event.target.value);
  }

  

//  setText("jfdghfd");
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
       <h1 >{props.heading}</h1>
     <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'black' : 'white' , color: props.mode === 'dark'? 'white' : 'black'}} id="Mybox" rows="8"></textarea>
     </div>
     
    {/* if (props.mode === 'dark') {
      
    } */}
    <button disabled={text.length===0} className="btn btn-outline-warning mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-outline-warning mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-outline-warning mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-outline-warning mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-outline-warning mx-1 my-1" onClick={handleRemoveExtraSpaces}>Remove Spaces</button>
    </div>

    <div className="container my-4" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length === 1 ? 0:  text.trim().split(/\s+/).length}  words and {text.trim().length} characters</p>
      <p> {0.008 * text.trim().split(/\s+/).length} minutes for reading </p>
      <h2>Preview</h2>
      <p>{text.length > 0 ?text: "Enter something to preview the text here"}</p>
    </div>

    </>
  )
}
