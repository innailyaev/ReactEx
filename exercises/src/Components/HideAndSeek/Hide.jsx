import react from 'react';
import "./Hide.css";

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

export default Hide;