import react from 'react';
import ReactDOM from 'react-dom';

class LifeCycle extends react.Component {
    constructor(props) {
        super(props);
        this.state={
            favoriteColor:'blue'
        }
        this.myRef = react.createRef();  
    }

    componentDidMount() {
        console.log("componentDidMount")
       setTimeout(()=>{
           this.setState({favoriteColor : 'red'})
       },1000)
    }
   
    componentDidUpdate(){
        console.log("componentDidUpdate");
        this.myRef.current.textContent=`The updated favorite color is: ${this.state.favoriteColor}`;
        this.myRef.current.style.backgroundColor=`${this.state.favoriteColor}`;
        this.myRef.current.style.fontSize='20px';
        this.myRef.current.style.color='white';
    }
           
    render(){
        return (
                <div>
                   <h1>My favorite color is {this.state.favoriteColor}</h1>
                   <div id="newState" ref={this.myRef}></div>
                </div>

        )
    }
}

export default LifeCycle;