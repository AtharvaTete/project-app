import React,{useState} from 'react'


export default function TextForm(props) {


    const handleUpClick=()=>{
      // used to convert in Upper case
      console.log("Uppercase was Clicked")
      let newText=text.toUpperCase();
      setText(newText)
      props.showAlert("Conerted to Upper case","Success")
    } 
    const handleloClick=()=>{
      // used to convert in lower case
      console.log("Uppercase was Clicked")
      let newText1=text.toLowerCase();
      setText(newText1)
      props.showAlert("Conerted to Lower case","Success")
    }
    const handleOnChange=(event)=>{
      // when some changes then it is run
      console.log("On Change")
      setText(event.target.value); 
    }
    const handleclClick=(event)=>{
      // to clear the text item
      setText(""); 
      props.showAlert("Clear","Success")
    }
    const [text, setText]=useState('');
    
    return (
      <>
        <div>
<div className="mb-3" style={{color:props.mode==='light'?'#343a40':'white'}}>
    <h2 className="mb-4">{props.heading}</h2>

  <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" style={{backgroundColor:props.mode==='light'?'white':'#343a40', color:props.mode==='light'?'#343a40':'white'}} rows="8"></textarea>
</div>
 
<button  disabled={text.length===0} className="btn btn primary mx-1 my-1 " style={{color:props.mode==='light'?'#343a40':'white'}} onClick={handleUpClick} >Convert To Uppercase</button>

<button  disabled={text.length===0} className="btn btn primary mx-1 my-1" style={{color:props.mode==='light'?'#343a40':'white'}} onClick={handleloClick} >Convert To Lowecase</button>

<button  disabled={text.length===0} className="btn btn primary mx-1 my-1" style={{color:props.mode==='light'?'#343a40':'white'}}  onClick={handleclClick} >Clear</button>


    </div >
      <div className="container my-3" style={{color:props.mode==='light'?'#343a40':'white'}}>

        <h1>Summary</h1>

        {/* used to print the word and characters of the entered text */}

        {/* it is used to print the no. of word when white space is given  */}
        {/* <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>  */}

 
        {/* it is used to print the no. of word when white space or enter for next line click is given  */}
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p> 
        
        
        <p>
          {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes are required to Read
        </p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Noting to preview"}</p>
      </div>
      </>
  )
}
