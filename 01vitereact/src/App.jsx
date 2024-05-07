import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  
  const addValue = () => {
      if(counter < 20){
        setCounter(counter + 1)

      }
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
    <h1>This is vite react Counter Project</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br/>
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
