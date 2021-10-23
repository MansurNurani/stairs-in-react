import './App.css';
import MyComp from './Components/MyComp';
import { useState } from "react"

function MakeList(count) {
  let myArr = [];
  for (let index = 0; index < count; index++) {
    const element = <MyComp size={20 + index * 15} />
    myArr.push(element);
  }
  return myArr;
}
function App() {
  const [count, setCount] = useState([]);
  const handleChange = (e) => {
    setCount(e.target.value);
    console.log(e.target.value);
}
return (
  <>
    <input type="number" step="1" max="20" min="0" defaultValue="0" style={{width:"300px",height:"30px"}} onChange={handleChange} />

    {MakeList(count)}
  </>
);
}

export default App;
