import React, { useState } from 'react';

const TextForm = (props) => {
    
    const [text, setText] = useState('');

    const handleUpClick=()=>{
        var newWord = text.toUpperCase();
        setText(newWord);
    }

    const handleOnChange=(event)=>{
        return setText(event.target.value);
    }
    const handleLowClick=(event)=>{
      var newWord = text.toLowerCase();
      setText(newWord);
    }

  return (

    <>
    <div className="m-5">
        <h2>{props.heading}</h2>
  <div className="mb-3">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={text} onChange={handleOnChange}/>
    
  </div>

  <div style={{width:"500px"}} className='container d-flex justify-content-between'>
  <button  className="btn btn-primary" onClick={handleUpClick}>UPPER CASE</button> 
  <button  className="btn btn-primary" onClick={handleLowClick}>LOWER CASE</button>
  </div>

</div>

<div className='container'>
    <h2 className='my-3'>Your text</h2>
    <p>{text.split(' ').length} words and {text.length} characters</p>
</div>
</>
  )
}

export default TextForm