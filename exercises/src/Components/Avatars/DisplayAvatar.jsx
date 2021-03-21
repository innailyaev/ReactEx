import react from 'react';
import "./Avatars.css"

export default class DisplayAvatar extends react.Component{
    constructor(props){
        super();
       
    }
    
    render() {
        return (
           <div>
               <div className="cards">
                    <h2>{this.props.avatars.firstName} {this.props.avatars.lastName}</h2>
                    <img src={this.props.avatars.imageSrc} alt=""/>
               </div>
           </div>
        )   
    }
}