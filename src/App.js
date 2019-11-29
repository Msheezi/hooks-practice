import React, {useState, useEffect, useRef} from 'react';
import {useForm} from "./useForm"
import {useFetch} from './useFetch'
import { useFetch1 } from './useFetch1'
import {weatherKey} from './apikeys'
import './App.css';

// const expensiveInitialState = () => {
//   return 10  
// can use this to set the intial state to the result of this function.  The initial state
// will only be called once with the usestate instead of on ever render if using a function to define the initial state 
// }
const App = () => {
  
  // const [{count, count2}, setCount] = useState({count: 10, count2: 20});


  //this is the default way of doing it with local state and no custom hoook logic
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")


  //this uses the custom hook to manage the change
  const [values, handleChange] = useForm({email: "", password: ""})

  /// use effect executes a function after every render.  this console logs after
  // every render.  takes a second argument in the example below it only fires on a change to the password.  This is called
  // a dependency array 
  // if the array is empty, it will only execute on the mount
// useEffect(() => {
//   console.log("render")
// }, [])

// useEffect(() =>{
//   const onMouseMove = e => {
//     console.log(e)
//   }

//   window.addEventListener("mousemove", onMouseMove)
//   return () => {
//     window.removeEventListener("mousemove", onMouseMove)
//   }
// }, [])
  const [count, setCount] = useState(0)
  const {data} = useFetch(`http://numbersapi.com/${count}/trivia`)
  
  const inputRef = useRef()
  // const [location, setLocation] = useState()

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count))
  },[count])

  

  const  weather  = useFetch1(`https://api.openweathermap.org/data/2.5/weather?zip=95136,us&appid=${weatherKey}`)


  
  let test = Object.keys(weather).map(key => [key, weather[key]])
  

  let grid = test.map((ele, i) => {
    if (typeof ele[1] == 'number'){
      ele[1] = Math.floor((((ele[1] - 273.15) * 1.8) + 32))
      return (<li key={i}>{ele[0]}: {ele[1]}</li>)
    }  
  
  } )




return (
  <div>
    <div>{!data ? 'Loading' : data}</div>
    <button onClick={()=> setCount(c => c - 1)}>Previous Fact</button>
    <button onClick={() => setCount(c => c + 1)}>New Fact</button>
    {/* <div>Count: {count}</div> */}
    <div>Weather for: {weather.city}</div>
    <ul>{grid}</ul>
    {/* <div>{weather.temp_max, weather.temp_min, weather.temp }</div> */}
    

  {/* <button onClick={() => setCount(currentState => ({
    count2: currentState.count2 + 1, 
    count: currentState.count + 1}))}>+</button> */}
    {/* To have multiple updates, spread the object then do the updates to the 
    portion of the object you want to change.  the updated function doesn't do a 
    merge.  basically you need to use all the keys in the update to ensure
    it stays in sync */}
   
    {/* <input name="email" value={email} onChange={e => setEmail(e.target.value) }></input>
    <input type="password" value={password} name="password" onChange={e => setPassword(e.target.value)}></input> */}
{/*     
    Below is the form with custom hooks:
    this uses the useForm custom hook to define the logic to update the object
    the handle change is the updated function for updating the form object */}
    
    <input ref={inputRef} name="email" value={values.email} onChange={handleChange}></input>
    <input type="password" value={values.password} name="password" onChange={handleChange}></input>
{/* 
    <div>Count 1: {count}</div>
    <div>Count 2: {count2}</div> */}

    <button onClick={() => {
      inputRef.current.focus() //gets the current value of the reference focuses on the dom node that the reference points to
    }}>Focus</button>
</div>
) 
  

}

export default App;
