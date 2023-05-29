import logo from './logo.svg';
import './App.css';
import H1 from './component';
import Posts from './posts';
import Boxs from './boxs';
import { useState } from 'react';

function App() {
  const[count,setCount] =useState("false");


  // const duplicateArray = Array.from({length:100});
  // const colors =["red", "blue", "yellow", "skyblue", "purple", "green", "brown", "grey"];
  // console.log(Math.floor(Math.random() * colors.length));
  return (
    <div className="App">
      {
count ?
<h1>ravi</h1>
:
<h1>ravina</h1>
}
      <button onClick={()=> setCount(!count)}>Click Me</button>
    
    <div className='box-container'>

      
      {/* {
        duplicateArray.map((_, i) =>(
        <Boxs label={i+1} color={colors[Math.floor(Math.random() *colors.length)]} />
        ))
      
      } */}
     
     
      

    </div>
    </div>


  );
}

export default App;
