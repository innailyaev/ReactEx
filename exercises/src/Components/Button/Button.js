import react from 'react';
import "./Buttons.css";


class Button extends react.Component {
    constructor(props) {
        super();
    }

    render() {
        return <button className="btn">{this.props.title}</button>
        
    }
}

export default Button;