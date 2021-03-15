import react from 'react';
import Box4 from "./Box4";



//class
class Box3 extends react.Component { 
    constructor(params) {
        super();
    }

    render () {
        return (
            <div style={{backgroundColor:"lightpink" ,width:'200px', height:'200px',display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
                <Box4 margin={10}/>
                <Box4/>
            </div>   
    )}
}


//function
// const Box3 =()=>{
//     return (
//         <div style={{backgroundColor:"lightpink" ,width:'200px', height:'200px',display:'flex',justifyContent:'center',alignItems:'center'}}>
//             <div><Box4/></div> 
//         </div>   
//     )
// }

export default Box3;