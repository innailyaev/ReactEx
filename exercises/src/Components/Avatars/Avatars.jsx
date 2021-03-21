import react from 'react';
import axios from 'axios';
import DisplayAvatar from "./DisplayAvatar";
import InputAvatar from "./InputAvatar";
import "./Avatars.css"


export default class Avatars extends react.Component{
    constructor(props){
        super();
        this.state={
            avatarsArr:[]
            
        }
    }

    componentDidMount = async()=>{
        let avatarsArr=[];
        for(let i=0 ; i<10; i++){
            const data=await axios.get('https://randomuser.me/api');
            let results=data.data.results[0];
            avatarsArr.push({
                firstName:results.name.first,
                lastName:results.name.last,
                imageSrc:results.picture.large
            })
            this.setState({avatarsArr:avatarsArr})
        }  
        console.log(this.state.avatarsArr);
    }
    
        render() {
        return (
            <div>
                <InputAvatar avatars={this.state.avatarsArr}/>
                <div className="container">
                    {
                        this.state.avatarsArr.map((a,index)=>
                        <DisplayAvatar key={index} avatars={a}/> 
                        )
                    }
                
                </div>
            </div>
        )   
    }
}
