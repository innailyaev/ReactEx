import './App.css';
import Button from "./Components/Button/Button";

// import Basic from "./Components/Basic/BasicOfJsx";
// import Box1 from "./Components/Boxes/Box1";
// import Quiz from "./Components/Quiz/Quiz";


function App() {
  return (
    <div>
      {/* <Basic/> */}
      {/* <Box1/> */}
      <Button title="Important" className="important"/>
      <Button title="Not Important"/>
    </div>
  );
}

export default App;
