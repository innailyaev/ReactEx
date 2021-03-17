import react from 'react';

class CustomButton extends react.Component{

    constructor(props){
        super(props);
        this.state={
            childColor:this.props.color
        }
       
    }

    onChangeColor(){
        this.props.changeColor(this.state.childColor)
    }

    render(){

        return (
            <div>
                <button onClick={this.onChangeColor.bind(this)} style={{width:'100px', height:'50px',cursor:'pointer', backgroundColor:this.props.color}}>{this.props.color}</button>
            </div>
        )
    }
}

export default CustomButton;