// http://localhost:3000/ssr

import {fetchTime} from "../../components/fetchTime";
import React from "react";

export const revalidate = 1

export default async function Home() {
  const time = await fetchTime()

  return (
    <>
      <div className="logos"><img src="/next.svg" alt="Next Logo" width="150"/></div>
      <h1>Heure Courante</h1>

      <span id="current-time">{time}</span>
    </>
  );
}