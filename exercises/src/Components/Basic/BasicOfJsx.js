const data = ["hello", "world"];
const number1 = 5;
const number2 =6;
const string = 'I love React!';

const Basic =()=>{
    return (
        <div>{data.join(' ')}
        <div>{`${number1}+${number2}=${number1+number2}`}</div>
        <div>{`The string’s length is: ${string.length}`}</div>
        </div>   
    )
}

export default Basic;