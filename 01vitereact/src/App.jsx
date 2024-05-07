import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  // const addValue = () => {
  //     if(counter < 20){
  //       setCounter(counter + 1)
  //     }
  // }
  // const removeValue = () => {
  //   if(counter > 0){
  //     setCounter(counter - 1)
  //   }
  // }

  // Practicing react interview Question
  const addValue = () => {
    // setCounter(counter + 1) //1
    // setCounter(counter + 1) //2
    // setCounter(counter + 1) //3
    // setCounter(counter + 1) //4
    // above all four setCounter are update value by one only but by looking what sholud happen is that 1st counter update by adding one and 2nd counter should add one in the result of 1st counter's value and there are four counter update code it will add four on clicking once. So what happening here is that useSate do the updates in UI by sending in the batches, so all four line of counter updation will be send in a batch and all are doing same work so fiber alogrithm will undersatnd that and will add only one on every click.
    
    
    // same code if written in this way then it will add 4 on one click so whats happening here, here prevCounter is varible which hold the of previous value which is updated. setCounter is a function which accept a callback function like this setCounter((prevCounter) => prevCounter + 1).
    setCounter(prevCounter => prevCounter + 1) //1
    setCounter(prevCounter => prevCounter + 1) //2
    setCounter(prevCounter => prevCounter + 1) //3
    setCounter(prevCounter => prevCounter + 1) //4
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>This is vite react Counter Project</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
