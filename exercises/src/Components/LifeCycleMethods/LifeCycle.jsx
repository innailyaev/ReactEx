import react from 'react';
import ReactDOM from 'react-dom';

class LifeCycle extends react.Component {
    constructor(props) {
        super(props);
        this.state={
            favoriteColor:'blue'
        }   
    }

    componentDidMount() {
        console.log("[componentDidMount]")
       setTimeout(()=>{
           this.setState({favoriteColor : 'red'})
       },1000)
    }
   
    componentDidUpdate(){
        console.log("componentDidUpdate");
        let emptyElement=document.getElementById('newState');
        emptyElement.textContent=`The updated favorite color is: ${this.state.favoriteColor}`;
        emptyElement.style.backgroundColor=`${this.state.favoriteColor}`;
        emptyElement.style.fontSize='20px';
        emptyElement.style.color='white';
    }
           
    render(){
        return (
                <div>
                   <h1>My favorite color is {this.state.favoriteColor}</h1>
                   <div id="newState"></div>
                </div>

        )
    }
}

export default LifeCycle;