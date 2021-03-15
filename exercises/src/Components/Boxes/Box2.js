import react from 'react';
import Box3 from "./Box3";


//class
class Box2 extends react.Component { 
    constructor(params) {
        super();
    }

    render () {
        return (
            <div style={{backgroundColor:"lightblue" ,width:'300px', height:'300px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Box3/>
            </div>   
    )}
}



//function

// const Box2 =()=>{
//     return (
//         <div style={{backgroundColor:"lightblue" ,width:'300px', height:'300px',display:'flex',justifyContent:'center',alignItems:'center'}}>
//             <div><Box3/></div>
//         </div>   
//     )
// }

export default Box2;