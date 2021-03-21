import react from 'react';
import "./Card.css"

export default class Card extends react.Component{
    constructor(props){
        super();
    }

    render(){

        return (
            <div className="card">
                <h2>{this.props.user.name}</h2>
                <p>Birthday: {this.props.user.birthday}</p>
                <p>Favorite Foods (meats):</p>
                {
                    this.props.user.favoriteFoods.meats.map((m)=>{
                        return <span>{m},  </span>
                    })
                }
                <p>favoriteFoods (fish):</p>
                {
                    this.props.user.favoriteFoods.fish.map((m)=>{
                        return <span>{m},  </span>
                    })
                }
                
        </div>
        )
    }
}