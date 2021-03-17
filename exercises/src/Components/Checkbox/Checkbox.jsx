import react from 'react';

class Checkbox extends react.Component{

    constructor(props){
        super(); 
    }

    render(){

        return (
            <div>
            <li style={{listStyle:'none', color:'white', marginLeft:'600px'}}>
                <input type='checkbox' defaultChecked={this.props.isChecked}></input>{this.props.text}</li>
                
            </div>
        )
    }
}

export default Checkbox;