import react from 'react';
import ButtonJoke from "./ButtonJoke";
import Categories from "./Categories";

export default class ChuckNorris extends react.Component{
    constructor(props){
        super();
        this.state={
            joke:'',
            categories:[],
            jokeByCategory:''
        }
    }

    showJoke=(randomJoke)=>{
        this.setState({joke:randomJoke});
    }

    showJokeByCategory=(jokeCategory)=>{
        this.setState({jokeByCategory:jokeCategory});
    }
    
    render() {
        return (
            <div>
                <ButtonJoke randomJoke={this.showJoke}/>
                <div>{this.state.joke}</div>
                <Categories showJokeByCategory={this.showJokeByCategory}/>
                <div>{this.state.jokeByCategory}</div>
            </div>
        )   
    }
}