/* eslint-disable no-unused-vars */
import { useState } from 'react';

const App = () => {
  // Save clicks of each button to its own state
  const[good,setGood]=useState(0);
  const[neutral,setNeutral]=useState(0);
  const[bad,setBad]=useState(0);
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={()=>setGood(good+1)}>Good</button>
      <button onClick={()=>setNeutral(neutral+1)}>Neutral</button>
      <button onClick={()=>setBad(bad+1)}>Bad</button>
      <h2>Statics</h2>
      <p>Good {good}</p>
      <p>neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  );
};

export default App;



