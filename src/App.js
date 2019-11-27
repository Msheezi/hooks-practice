import React, {useState} from 'react';
import {useForm} from "./useForm"

import './App.css';

// const expensiveInitialState = () => {
//   return 10  
// can use this to set the intial state to the result of this function.  The initial state
// will only be called once with the usestate instead of on ever render if using a function to define the initial state 
// }
const App = () => {
  
  const [{count, count2}, setCount] = useState({count: 10, count2: 20});


  //this is the default way of doing it with local state and no custom hoook logic
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")


  //this uses the custom hook to manage the change
  const [values, handleChange] = useForm({email: "", password: ""})
  
return (
  <>
  <button onClick={() => setCount(currentState => ({
    count2: currentState.count2 + 1, 
    count: currentState.count + 1}))}>+</button>
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
    
    <input name="email" value={values.email} onChange={handleChange}></input>
    <input type="password" value={values.password} name="password" onChange={handleChange}></input>

    <div>Count 1: {count}</div>
    <div>Count 2: {count2}</div>


</>
) 
  

}

export default App;
