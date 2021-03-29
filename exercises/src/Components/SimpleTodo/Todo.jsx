import React, { useState } from 'react';
import "./TodoStyle.css";

  const Todo = () => {

    const [todoArr, setTodoArr] = useState([
        { name: "CSS", completed: true },
        { name: "JavaScript", completed: true },
        { name: "Learn React", completed: false },
        { name: "Learn mongoDB", completed: false },
        { name: "Learn Node JS", completed: false },
        ]);

        const toggleCompleted = (index) => {
            let helpArr=[...todoArr];
            helpArr[index].completed=!(helpArr[index].completed)
            setTodoArr(helpArr);
            console.log(todoArr[index].completed);
        };

    return (
      <div>
         <ul>
            {
                todoArr.map((x,index)=>(
                    <div key={index}>
                        <span className={x.completed?"true" : "false"}>{x.name} </span>
                        <span className="checkSign" onClick={()=>toggleCompleted(index)}> {todoArr[index].completed ? <>&#10003;</> : <>&#10005;</>}</span>
                    </div>
                ))
            }
         </ul>
      </div>
    );
  };

  export default Todo;