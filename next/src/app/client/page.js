'use client'
import React from 'react'
import {fetchTime} from "../../components/fetchTime";
// http://localhost:3000/client

export default function Home() {
  const [time, setTime] = React.useState("Chargement...")

  React.useEffect(() => {
    const timer = setInterval(() => fetchTime().then(setTime), 1000)
    return () => clearInterval(timer)
  })

  return (
    <>
      <div className="logos"><img src="/next.svg" alt="Next Logo" width="200"/></div>
      <h1>Heure Courante</h1>

      <span id="current-time">{time}</span>
    </>
  );
}
