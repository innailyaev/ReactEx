import react from 'react';
import Box2 from "./Box2";

//class
class Box1 extends react.Component { 
    constructor(params) {
        super();
    }

    render () {
        return (
            <div style={{backgroundColor:"lightgreen" ,width:'400px', height:'400px', display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Box2/>
            </div>   
    )}
}



//function

// const Box1 =()=>{
//     return (
//         <div style={{backgroundColor:"lightgreen" ,width:'400px', height:'400px', display:'flex',justifyContent:'center',alignItems:'center'}}>
//             <div><Box2/></div>
//         </div>   
//     )
// }

export default Box1;