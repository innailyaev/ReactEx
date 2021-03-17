import react from 'react';
import Checkbox from "./Checkbox";

class ParentCheckbox extends react.Component{

    constructor(props){
        super(props);
        this.state = {
            checkBoxes: [
              {text: "I read the term of the app", isChecked: false},
              {text: "I accept the term of the app", isChecked: false},
              {text: "I want to get the weekly news letter", isChecked: true},
              {text: "I want to get sales and offers", isChecked: true}
            ]
          }
       
    }

    render(){
        return (
            <>
             <ul>
                {
                     this.state.checkBoxes.map((c) => {
                        return (<Checkbox text={c.text} isChecked={c.isChecked}/>)
                    })
                }
            </ul>
         </>
        )
    }
}

export default ParentCheckbox;