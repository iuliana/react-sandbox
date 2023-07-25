import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//import Alert1 from "./Alert1";
//import {Alert2} from "./Alert2";
//import {Alert3} from "./Alert3";
import {Alert4} from "./Alert4";

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
          {/*<Alert1/>*/}
          {/*<Alert2/>*/}
          {/*<Alert3 type="information" heading="[Alert3] Success">
              Everything is really good!
          </Alert3>*/}
          <Alert4
              type="information"
              heading="Success"
              closable
              onClose={() => console.log("closed")}>
              [Alert4]Everything is really good!
          </Alert4>
        </div>
    </>
  )
}
