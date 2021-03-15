import react from 'react';
import Q2Title from "./Q2Title";
import Q2Input from "./Q2Input";


//class
class Q2 extends react.Component { 
    constructor(params) {
        super();
    }

    render () {
        return (
                <div>
                    <Q2Title/>
                    <Q2Input/>
                </div> 
    )}
}



// const Q2 =()=>{
//     return (
//         <div>
//             <Q2Title/>
//             <Q2Input/>
//         </div>  
//     )
// }

export default Q2;