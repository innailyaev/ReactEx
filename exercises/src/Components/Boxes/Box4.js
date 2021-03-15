import react from 'react';

//class
class Box4 extends react.Component { 
    constructor(params) {
        super();
    }

    render () {
        return (
            <div>
                <div style={{backgroundColor:"purple" ,width:'100px', height:'50px', marginBottom:`${this.props.margin}.px`}}></div>
            </div> 
    )}
}


//function
// const Box4 =()=>{
//     return (
//         <div>
//             <div style={{backgroundColor:"purple" ,width:'100px', height:'50px',marginBottom:'20px'}}></div>
//             <div style={{backgroundColor:"purple" ,width:'100px', height:'50px'}}></div>
//         </div>   
//     )
// }

export default Box4;