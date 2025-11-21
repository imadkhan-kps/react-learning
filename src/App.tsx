import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './features/Greeting'
import FruitList from './features/FruitList'

function App() {
  const [count, setCount] = useState<number>(0)
  const [name, setName] = useState<string>('Muhammad');
  const [isToggled, setIsToggled] = useState<boolean>(true);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          decrease count is {count}
        </button>
        <button onClick={() => setCount(0)}>
          reset count is {count}
        </button>
      </div>
      <div style={{ textAlign: 'center', marginTop: '50px'}}>
        <Greeting name={name} />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <button onClick={() => setIsToggled(!isToggled)}>{isToggled ? "Hide Fruits" : "Show Fruits"}</button>
      <FruitList isShow={isToggled} />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
