export function fetchTime() {
  return fetch('http://localhost:8888/time').then(res => res.json()).then(data => data.time)
}