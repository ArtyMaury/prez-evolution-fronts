import React from 'react'
import Clock from "../../components/clock";
import {fetchTime} from "../../components/fetchTime";
// http://localhost:3000/client-optim

export const revalidate = 1

export default async function Home() {
  const time = await fetchTime()

  return (
    <>
      <div className="logos"><img src="/next.svg" alt="Next Logo" width="200"/></div>
      <h1>Heure Courante</h1>

      <Clock initialTime={time} />
    </>
  );
}

