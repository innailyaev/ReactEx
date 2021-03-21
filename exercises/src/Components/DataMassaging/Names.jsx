import react from 'react';
import data from "./data";

export default class Names extends react.Component{
    constructor(props){
        super();
    }

    componentDidMount() {
        let namesArr=data.map(u => { return u.name })
        this.props.names(namesArr);
    }

    render(){
        return (
            <>
            </>
        )
    }
}