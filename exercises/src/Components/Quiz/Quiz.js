import QuizTitle from "./QuizTitle";
import Q1 from "./Q1";
import Q2 from "./Q2";
import './Quiz.css';

const Quiz =()=>{
    return (
        <div className="container" style={{border:"solid black",width:'400px', height:'300px', display:'flex',flexDirection:"column"}}>
           <QuizTitle/>
           <Q1/>
           <Q2/>
           
        </div>   
    )
}

export default Quiz;