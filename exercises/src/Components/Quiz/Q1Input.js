import react from 'react';

//class
class Q1Input extends react.Component { 
    constructor(params) {
        super();
    }

    render () {
        return (
            <div><input type="range" className="custom-range" min="0" max="100"></input></div>
    )}
}



// const Q1Input =()=>{
//     return (
//         <div><input type="range" className="custom-range" min="0" max="100"></input></div>  
//     )
// }

export default Q1Input;