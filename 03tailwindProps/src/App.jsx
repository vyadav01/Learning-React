import './App.css'
import { Card } from './components/Card'

function App() {

  let myObj = {
    name:"vikash yadav",
    age: 30
  }

  let newArr = [1,2,4,5];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Hello</h1>
      <Card username="George" btnText="click here"/>    
      <Card username="Jhon" btnText="visti us"/>    
    </>
  )
}

export default App
