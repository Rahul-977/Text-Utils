import React , {useState}from 'react';


export default function Textbox(props) {
const handleUpClick = () =>{
    let newtext = text.toUpperCase();
    setText(newtext);
    {props.showAlert("Converted to UpperCase", "success")};
}
const handleLoClick = () =>{
    let newtext = text.toLowerCase();
    setText(newtext);
    {props.showAlert("Converted to LowerCase", "success")};
}
const HandleonChange = (event) =>{
    setText(event.target.value);
}
const clearText = (event) =>{
    setText('');
}
const [text, setText] = useState("Enter text here");
  return (
    <div style = {{color: props.mode === 'light' ? 'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
         <textarea style = {{ backgroundColor: props.mode === 'dark' ? 'grey':'white'}} className="form-control" value = {text} onChange={HandleonChange} id="myBox" rows="9"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick }>Convert to LowerCase</button>
        <button className="btn btn-primary" onClick={ clearText }>Clear Text</button>

        <h2>Text Summary</h2>
        <p>{text.trim().split(' ').length} words and {text.length} characters</p>
    </div>
  )
}
