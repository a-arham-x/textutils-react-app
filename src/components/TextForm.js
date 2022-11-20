import React, { useState } from 'react'
import PropTypes from "prop-types";


export default function TextForm(props) {

    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleTextClear = () => {
        setText("");
    }

    const handleCopyText = () => {navigator.clipboard.writeText(text)}

    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const numOfWords = ()=>{
        let l = text.split(" ").length;
        if (text===""){
            l = 0;
        }
        let i = 1;
        while(true){
            if (text.charAt(text.length-i)===" "){
                l -= 1;
                i += 1;
            }else{
                break;
            }
        }
        return l;
    }

    const buttonColors = {
        "#002D62": "btn btn-dark",
        "#8B0000": "btn btn-warning",
        "#FF4500": "btn btn-danger",
        "#4B5320": "btn btn-success"
      }

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="container">
                <div className="mb-3">
                    <textarea className="form-control" style={props.mode==="light"?{color:"black", backgroundColor:"white"}:{color:"black", backgroundColor:"#dfd1a4"}} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className={props.mode==="light"?"btn btn-primary":buttonColors[props.bg]} style={{margin:"3px"}} onClick={handleUpClick}>Convert to Upper Case</button>
                <button className={props.mode==="light"?"btn btn-primary":buttonColors[props.bg]} style={{margin:"3px"}} onClick={handleLowClick}>Convert to Lower Case</button>
                <button className={props.mode==="light"?"btn btn-primary":buttonColors[props.bg]} style={{margin:"3px"}} onClick={handleTextClear}>Clear Text</button>
                <button className={props.mode==="light"?"btn btn-primary":buttonColors[props.bg]} style={{margin:"3px"}} onClick={handleCopyText}>Copy to Clipboard</button>
                <button className={props.mode==="light"?"btn btn-primary":buttonColors[props.bg]} style={{margin:"3px"}} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-4">
                <h2>Your text Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.split("").filter((element)=>{return element !== " "}).length} characters.</p>
                <p>It will take an average time of {numOfWords()*0.008} minutes to read this text</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter your text in the text box above to preview it here"}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}
