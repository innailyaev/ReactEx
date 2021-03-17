import react from 'react';
import CustomButton from "./CustomButton";

const colors = ['blue','red','yellow'];

class Parent extends react.Component{

    constructor(props){
        super(props);
        this.state={
            color:''
        }
    }

    onChangeColor(childColor){
        this.setState({color:childColor})
    }


    render(){
        
            return(
                <>
                {
                colors.map((c)=>{
                   return <CustomButton color={c} changeColor={this.onChangeColor.bind(this)}/>})
                }

                <h1 style={{color:'white'}}>The color selected is:<div style={{color:'black',backgroundColor:this.state.color}}>{this.state.color}</div></h1>
                </>
            )  
    }
}


export default Parent;