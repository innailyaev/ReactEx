import react from 'react';
import data from "./data";
import Names from "./Names";
import Card from "./Card";

class DataMassaging extends react.Component{
    constructor(props){
        super();
        this.state={
            arrNames:[],
            objArr:[]
        }
    }

    componentDidMount() {
        const birthdayArr=data.filter(u => {
            let d=new Date(u.birthday)
            if(d.getFullYear()<1990)
                return u; 
        })
        this.setState({objArr:birthdayArr})
    }

    printNames=(arr)=>{
        this.setState({arrNames:arr})
    }

    render(){
        return (
            <div>
                <Names names={this.printNames}/>
                <ul>
                {
                    this.state.arrNames.map((u,index)=>{
                        return <li key={index}>{u}</li> 
                    })
                }
                </ul>
                
                {
                this.state.objArr.map((u,index)=>
                         <Card key={index} user={u}/>
                    )
                }
                
            </div> 
        )     
    }
}

export default DataMassaging;
