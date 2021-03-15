import react from 'react';

//using class
class Basic extends react.Component { 
    constructor(params) {
        super();
    }

    render () {
        return (
            <div>{this.props.data.join(' ')}
                <div>{`${this.props.number1}+${this.props.number2}=${this.props.number1+this.props.number2}`}</div>
                <div>{`The string’s length is: ${this.props.string.length}`}</div>
        </div>   
    )}
}

//using function
// const Basic =()=>{
//     return (
//         <div>{data.join(' ')}
//         <div>{`${number1}+${number2}=${number1+number2}`}</div>
//         <div>{`The string’s length is: ${string.length}`}</div>
//         </div>   
//     )
// }

export default Basic;