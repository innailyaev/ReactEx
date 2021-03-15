import react from 'react';
import Q1Title from "./Q1Title";
import Q1Input from "./Q1Input";

//class
class Q1 extends react.Component { 
    constructor(params) {
        super();
    }

    render () {
        return (
            <div>
            <Q1Title/>
            <Q1Input/>
        </div>  
    )}
}




// const Q1 =()=>{
//     return (
//         <div>
//             <Q1Title/>
//             <Q1Input/>
//         </div>  
//     )
// }

export default Q1;