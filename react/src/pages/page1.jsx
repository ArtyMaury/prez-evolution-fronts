import {Link} from "react-router-dom";

export function Page1() {

  return (
    <>
      <h1>Page 1</h1>

      <Link to="/page2">Page 2</Link>

    </>
  );
}