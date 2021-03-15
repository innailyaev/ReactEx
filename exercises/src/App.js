import './App.css';
// import Basic from "./Components/Basic/BasicOfJsx";
// import Box1 from "./Components/Boxes/Box1";
// import Quiz from "./Components/Quiz/Quiz";
// import Button from "./Components/Button/Button";
// import Card from "./Components/Card/Card";
import Counter from "./Components/Counter/Counter";
import Hide from "./Components/HideAndSeek/Hide";


function App() {
  const data = ["hello", "world"];
  const number1 = 5;
  const number2 =6;
  const string = 'I love React!';
  return (
    <div className="cardsContainer" >
      {/* <Basic data={data} number1={number1} number2={number2} string={string}/>
      <Box1/>
      <Quiz/> */}
      {/* <Button title="Important" bold={800}/>
      <Button title="Not Important" bold={300}/>
      <Card image="https://www.mamaison.com/data/destinations/df/750x640.exact.q85/budapest-lg.jpg?_images_storage" label="Budapest" description="Budapest is the capital city of Hungary" link1="https://en.wikipedia.org/wiki/Budapest" link2="https://www.youtube.com/watch?v=dZYpHr1wDmY"/>
      <Card image="https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/05/28/big-ben-london-england.jpg.rend.hgtvcom.1280.960.suffix/1491582155388.jpeg" label="Amsterdam" description="Amsterdam is the capital city of the Netherlands" link1="https://en.wikipedia.org/wiki/Amsterdam" link2="https://www.youtube.com/watch?v=ey"/>
      <Card image="https://www.azamara.com/sites/default/files/heros/amsterdam-netherlands.jpg" label="London" description="London is the capital city of England" link1="https://en.wikipedia.org/wiki/London" link2="https://www.youtube.com/watch?v=45ETZ1xvHS0"/> */}
      <Counter/>
      <Hide/>

    </div>
  );
}

export default App;
