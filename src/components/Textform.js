import React , {useState} from 'react'

export default function Textinput(props) {
    const funchange = (event)=>{
        setText(event.target.value);
    }
    const fun_UpperCase = ()=>{
        let nw = text.toUpperCase();
        setText(nw);
    }
    const fun_clear = ()=>{
        setText('');
    }
    const fun_LowerCase = ()=>{
        let nw = text.toLowerCase();
        setText(nw);
    }
    const fun_copy = () =>{
        let text = document.getElementById("Textarea1");
        text.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Message is Copied",'success');
    }
    const fun_extraspac = ()=>{
        let nw = text.split(/[ ]+/);
        setText(nw.join(" ")); 
    }
    const [text, setText] = useState('');
    let n=0;
     
    if(text!==''){
        let nw=text.trim();
        let arr=nw.split(/[ ]+/);
        for(let i=0;i<arr.length;i++){
            if(arr[i].length>0){
                n++;
            }
        }
    }

    return (
        <>
            <div className="mb-3" style={{color:props.theme==='light'?'black':'white'}}>
                <label htmlFor="exampleFormControlTextarea1" className="form-label"><h3>{props.heading}</h3></label>
                <textarea className="form-control border-5" value={text} onChange={funchange} id="Textarea1" rows="7" style={{backgroundColor: props.theme==='light'?'white':'rgb(31 37 80)',color:props.theme==='light'?'black':'white'}}></textarea>
            </div>
            <div className="container" style={{color:props.theme === 'dark'?'white':'black'}}>
                <button className='btn btn-dark mx-2 my-1' onClick={fun_UpperCase}>UpperCase</button>
                <button className='btn btn-dark mx-2 my-1' onClick={fun_LowerCase}>LowerCase</button>
                <button className='btn btn-dark mx-2 my-1' onClick={fun_extraspac}>Remove Extra Space</button>
                <button className='btn btn-dark mx-2 my-1' onClick={fun_clear}>Clear</button>
                <button className='btn btn-dark mx-2 my-1' onClick={fun_copy}>Copy</button>
            </div>
            <div className='container'style={{color:props.theme==='dark'?'white':'black'}}>
                <h2 className='my-2'>Summary</h2>
                <p>No. of words = {n}</p>
                <p>No. of characters = {text.length}</p>
            </div>
        </>
    );
}