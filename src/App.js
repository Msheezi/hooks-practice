import React, {useState} from 'react';

import './App.css';

// const expensiveInitialState = () => {
//   return 10  
// can use this to set the intial state to the result of this function.  The initial state
// will only be called once with the usestate instead of on ever render if using a function to define the initial state 
// }
const App = () => {
  
  const [{count, count2}, setCount] = useState({count: 10, count2: 20});

return (
  <>
  <button onClick={() => setCount(currentState => ({
    count2: currentState.count2 + 1, 
    count: currentState.count + 1}))}>+</button>
    {/* To have multiple updates, spread the object then do the updates to the 
    portion of the object you want to change.  the updated function doesn't do a 
    merge.  basically you need to use all the keys in the update to ensure
    it stays in sync */}
   
    <input name="email"></input>
    <input type="password" name="password"></input>

    <div>Count 1: {count}</div>
    <div>Count 2: {count2}</div>


</>
) 
  

}

export default App;
