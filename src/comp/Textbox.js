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
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick }>Convert to LowerCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={ clearText }>Clear Text</button>

        <h2>Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
    </div>
  )
}
