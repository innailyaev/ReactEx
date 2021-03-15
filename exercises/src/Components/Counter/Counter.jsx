import react from 'react';
import "./counter.css"

class Counter extends react.Component {
    constructor(props) {
        super(props);
        this.state={
            counter:0,
        }
    }

    IncrementItem = () => {
        this.setState({ counter: this.state.counter + 1 });
      }

    DecrementItem = () => {
        this.setState({ counter: this.state.counter - 1 });
    }

    render(){
        return(
             <div className="container">
                 <button className="btn" onClick={this.IncrementItem}>Increment</button><div>{this.state.counter}</div>
                 <button className="btn btn1" onClick={this.DecrementItem}>Decrement</button>

        </div>
    )}
}


export default Counter;