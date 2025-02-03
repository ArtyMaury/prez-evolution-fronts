import Link from "next/link";
import Clock from "../../../components/clock";
import {fetchTime} from "../../../components/fetchTime";
import React from "react";

export const revalidate = 10

export async function Page1() {

  const time = await fetchTime()

  return (
    <>
      <h1>Page 1</h1>

      <Clock initialTime={time} />

      <Link href="page2">Page 2</Link>

    </>
  );
}


export default Page1;