import react from 'react';
import "./Avatars.css"

export default class DisplayAvatar extends react.Component{
    constructor(props){
        super();
       
    }

    changeHandler=(e)=>{
        console.log(e.target.value);
        this.props.avatars.map((a)=>
            console.log(a.firstName)
        )
    }
    
    render() {
        return (
           <div>
               <input className="inputAvatar" type="text" onChange={this.changeHandler}/>
           </div>
        )   
    }
}