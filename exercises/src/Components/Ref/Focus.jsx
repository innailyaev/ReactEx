import React from 'react';

export default class Focus extends React.Component{

    constructor(props){
        super();
        this.inputRef=React.createRef();
    }

    componentDidMount(){
        this.inputRef.current.focus();
    }


    render(){
        return (
            <div>
                {/* with focus */}
                <input type="text" ref={this.inputRef}/>
               {/* without focus */}
                <input type="text"/> 
            </div>
        )
    }
}