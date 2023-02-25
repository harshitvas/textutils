import React, {useState} from "react";

const TextForms = (props) => {
    const onChangeClicked = (event) => {
        console.log("On change")
        setText(event.target.value)
    }

    const UpperCaseClicked = () => {
        console.log("Upper case button clicked")
        // setText("Uppercase button: !")
        let newText = text.toUpperCase();
        setText(newText)
    }

    const ClearText = () => {
      console.log("Clear text button clicked")
      let newText = "";
      setText(newText)
    }

    const LowerCaseClicked = () => {
      console.log("Lower case button clicked")
      let newText = text.toLowerCase();
      setText(newText)
    }

    const CopyText = () => {
      console.log("I am coping")
      let text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value)
    }

    const RemoveSpace = () => {
      console.log("Remove space button clicked")
      let newText = text.split(/[ ] + /);
      setText(newText.join(" "))
    }

    const [text, setText] = useState('');
  return (
    <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
      <div className="my-3">
        <h3 >{props.heading}</h3>
        <textarea
          className="form-control"
          id="myBox"
          style={{backgroundColor : props.mode === 'light' ? 'white' : '#181823', color: props.mode === 'light' ? 'black' : 'white'}}
          onChange={onChangeClicked}
          rows="8"
          value={text}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={UpperCaseClicked}>Convert to uppercase</button>
      <button className="btn btn-primary mx-1" onClick={LowerCaseClicked}>Convert to lowercase</button>
      <button className="btn btn-primary mx-1" onClick={ClearText}>Clear text</button>
      <button className="btn btn-primary mx-1" onClick={CopyText}>Copy text</button>
      <button className="btn btn-primary mx-1" onClick={RemoveSpace}>Remove space</button>
      <div className='my-3'>
        <h2>Your text summary</h2>
        <h4>Words: {text.split(" ").length - 1}</h4>
        <h4>Characters: {text.length}</h4>
        <h4>Preview: </h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextForms;
