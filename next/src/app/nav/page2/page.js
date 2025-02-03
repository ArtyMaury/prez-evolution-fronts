import Link from "next/link";
import Clock from "../../../components/clock";
import {fetchTime} from "../../../components/fetchTime";

export const revalidate = 10

export async function Page1() {

  const time = await fetchTime()

  return (
    <>
      <h1>Page 2</h1>

      <Clock initialTime={time} />

      <Link href="page1">Page 1</Link>
    </>
  );
}


export default Page1;