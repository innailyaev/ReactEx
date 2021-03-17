import react from 'react';
import "./Forms.css";

class Form extends react.Component{

    constructor(props){
        super();
        this.state = {
            name : '',
            lastName:'',
            age : '',
            freeText:'',
            users : [],
            visibility:'visible',
            visibility2:'hidden'
        }
    }

    inputsHandler = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    continueHandler = (e) =>{
        e.preventDefault();

        let users  = this.state.users;
        users.push({
            name : this.state.name,
            lastName:this.state.lastName,
            age : this.state.age,
            freeText:this.state.freeText,

        })
        this.setState({
            users: users,
            visibility:'hidden',
            visibility2:'visible'
        })
        console.log(this.state.users);
    }

    backHandler=()=>{
        this.setState({
            visibility:'visible',
            visibility2:'hidden'
        })
    }

    submitHandler =()=>{
        this.setState({
            name:'',
            lastName:'',
            age:'0-15',
            freeText:'',
            visibility:'visible',
            visibility2:'hidden'
        })
    }


    render(){
        return(
            <div>
                <form className="form" onSubmit={this.submitForm} style={{visibility:`${this.state.visibility}`}}>
                    <label>Name:</label>
                    <input type="text" name={'name'} value={this.state.name} onChange={this.inputsHandler}/>
                    <label>Last name:</label>
                    <input type="text" name={'lastName'} value={this.state.lastName} onChange={this.inputsHandler}/>
                    <label>Age:</label>
                    <select name={'age'} id="" value={this.state.age} onChange={this.inputsHandler}>
                        <option value="0-15">0-15</option>
                        <option value="15-30">15-30</option>
                        <option value="30-45">30-45</option>
                        <option value="45-60">45-60</option>
                        <option value="60+">60+</option> 
                    </select>
                    <label htmlFor="">Free text</label>
                    <textarea id="textarea" name="freeText" rows="4" cols="20" value={this.state.freeText} onChange={this.inputsHandler}></textarea>
                    <button className="continueBtn" onClick={this.continueHandler}>continue</button>   
                </form>

            <div className="details" style={{visibility:`${this.state.visibility2}`}}>
               <p>Name: {this.state.name}</p> 
               <p>Last Name: {this.state.lastName}</p> 
                <p>Age: {this.state.age}</p>
                <p>Free text: {this.state.freeText}</p>
                <div>
                    <button className="btn" onClick={this.backHandler}>Back</button>
                    <button className="btn" onClick={this.submitHandler}>Submit</button>
                </div>
            </div>
            
            </div>
    )}
}

export default Form;