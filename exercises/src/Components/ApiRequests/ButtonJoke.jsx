import react from 'react';
import axios from 'axios';
export default class ChuckNorris extends react.Component{
    constructor(props){
        super();
        this.state={
            joke:'',
        }
    }

    sendJoke=async()=>{
        const data=await axios.get('https://api.chucknorris.io/jokes/random');
        this.setState({joke:data.data.value});
        this.props.randomJoke(this.state.joke);
    }


    render() {
        return (
            <button onClick={this.sendJoke}>Click for a joke</button>
        )   
    }

}