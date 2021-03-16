import react from 'react';
import "./ChangingBox.css";


//class
class ChangingBox extends react.Component { 
    constructor(props) {
        super();
        this.state={
            color:0,
            conuter:0,
            className:''
        }
    }

   
    componentDidMount(){
        this.setState({
            color : this.state.color + 35,
            conuter: this.state.conuter + 1
        }) 
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.setState({
                color : this.state.color + 35,
                conuter: this.state.conuter + 1
            })

            if(this.state.conuter===5){
                this.setState({
                    className : 'circle'  
                })
            } 
        },500) 
    }


    render () {
        return (
            <div className={`${this.state.className} ChangingBox`} style={{backgroundColor:`hsl(${this.state.color}, 100%, 50%)`}}>   
            </div>   
    )}
}

export default ChangingBox;