import React from 'react';
import "./RefStyle.css"

export default class Focus extends React.Component{

    constructor(props){
        super();
        this.textAreaRef=React.createRef();
    }

    onClickHandler=()=>{
        this.textAreaRef.current.focus();
        this.textAreaRef.current.select();
        document.execCommand("copy");
    }

    render(){
        return (
            <div className="copy">
                <h2>What is the meaning of life?</h2>
                <textarea ref={this.textAreaRef}></textarea><br></br>
                <button onClick={this.onClickHandler}>Copy</button>
            </div>
        )
    }
}