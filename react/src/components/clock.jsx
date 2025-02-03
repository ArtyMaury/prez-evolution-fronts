import React from 'react'
import {fetchTime} from "./fetchTime";

export default function Clock(props) {
  const [time, setTime] = React.useState(props.initialTime)

  React.useEffect(() => {
    const timer = setInterval(() => fetchTime().then(setTime), 1000)
    return () => clearInterval(timer)
  })

  return <>
    <span>initial time: {props.initialTime}</span>
    <span id="current-time">{time}</span>
  </>
}
