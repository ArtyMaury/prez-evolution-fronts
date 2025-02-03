import Link from "next/link";
import Clock from "../../../components/clock";
import {fetchTime} from "../../../components/fetchTime";
import React from "react";

// http://localhost:3000/nav/page2

export const revalidate = 1

export async function Page2() {

  const time = await fetchTime()

  return (
    <>
      <div className="logos"><img src="/next.svg" alt="Next Logo" width="150"/></div>
      <h1>Page 2</h1>

      <Clock initialTime={time} />

      <Link href="page1">Page 1</Link>
    </>
  );
}


export default Page2;