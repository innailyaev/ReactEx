import react from 'react';
import "./box.css"

//class
class BoxAnimation extends react.Component { 
    constructor(props) {
        super();
        this.state={
            className:''
        }
    }

   
    componentDidMount(){
        setTimeout(()=>{
            this.setState({className : 'slideIn'})
        },1000)
        
        setTimeout(()=>{
            this.setState({className : 'slideOut'})
        },4000)
    }


    render () {
        return (
            <div className={`${this.state.className} box`} style={{backgroundColor:"lightgreen" ,width:this.props.width, height:this.props.height, marginTop:`${this.props.margin}.px`}}>   
            </div>   
    )}
}

export default BoxAnimation;