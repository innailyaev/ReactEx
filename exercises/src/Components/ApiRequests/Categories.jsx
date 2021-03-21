import react from 'react';
import axios from 'axios';
export default class ChuckNorris extends react.Component{
    constructor(props){
        super();
        this.state={
            categories:[],
            jokeCategory:''
        }
    }

    async componentDidMount(){
        const data=await axios.get('https://api.chucknorris.io/jokes/categories');
        this.setState({categories:data.data})
    }

    changeHandler=async(e)=>{
        const data=await axios.get(`https://api.chucknorris.io/jokes/random?category=${e.target.value}`);
        this.setState({jokeCategory:data.data.value});
        this.props.showJokeByCategory(this.state.jokeCategory)
        // console.log(data.data.value);
    }
    
    render() {
        return (
            <>
                <select onChange={this.changeHandler}>
                    <option value="" disabled>Select Joke category</option>
                    {
                        this.state.categories.map((c,index)=>{
                            return <option key={index} value={c}>{c}</option>
                        })
                    }
                </select>
            </>
        )   
    }

}