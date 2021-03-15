import react from 'react';
import './Card.css';

class Card extends react.Component {
  constructor (props) {
    super ();
  }

  render () {
    return (
        <div className="card">
          <img src={this.props.image} alt="img1" height={180} width={220} />
          <div className="info">
          <label>{this.props.label}</label>
          <p>{this.props.description}</p>
          <a href={this.props.link1}>info</a><br></br>
          <a href={this.props.link2}>Travel guide</a>
          </div>
        </div>
      
    );
  }
}

export default Card;
