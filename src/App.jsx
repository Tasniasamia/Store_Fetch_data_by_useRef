
import { useRef } from 'react'
import './App.css'

function App() {

  let refValue2=useRef();
  let refValue=useRef(0);
  const fetchData=async()=>{
    
    const response=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await response.json();
   refValue2.current.innerText=JSON.stringify(data)

  refValue.current++;
  console.log(refValue.current);
   
  }
  console.log("hello ladies");


  return (
    <>
    <p ref={refValue2}></p>
    <button onClick={fetchData}>Show Data</button>
     
    </>
  )
}

export default App
