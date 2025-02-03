import {useState} from 'react'
import React from 'react'
import {fetchTime} from "./components/fetchTime.js";
// http://localhost:4173/

function App() {
  const [time, setTime] = useState("chargement...")

  React.useEffect(() => {
    const timer = setInterval(() => fetchTime().then(setTime), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <div className="logos"><img src="/react.png" alt="React Logo" width="150"/></div>
      <h1>Heure Courante</h1>

      <span id="current-time">
        {time}
      </span>
    </>
  )

}

export default App
