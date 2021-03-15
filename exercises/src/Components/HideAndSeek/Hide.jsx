import react from 'react';
import "./Hide.css";

//class components
class Hide extends react.Component {
    constructor(props) {
        super(props);
        this.state={
            display:'block'
        }   
    }

    showHide = () => {
        if(this.state.display ==='block'){
            this.setState({ display:'none'});
        }
        else{
            this.setState({ display:'block'});
        }
    }
        
        
    

    render(){
        return (
                <div className="main">
                    <button className="button" onClick={this.showHide}>Show/Hide</button>
                    <div className='insideBox' style={{display:`${this.state.display}`}}></div>
                </div>

        )
    }
}


//function components
// const Hide =()=>{
// const [state,setState]=react.useState({
//     display:'bolck'
// })

//   const showHide = () => {
//         if(state.display ==='block'){
//             setState({ display:'none'});
//         }
//         else{
//             setState({ display:'block'});
//         }
//     }

//     return(
//             <div className="main">
//                 <button className="button" onClick={showHide}>Show/Hide</button>
//                 <div className='insideBox' style={{display:`${state.display}`}}></div>
//             </div>
//     )
// }

export default Hide;