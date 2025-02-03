import {Link} from "react-router-dom";
import React from "react";
// http://localhost:4173/page2

export function Page2() {

  return (
    <>
      <div className="logos"><img src="/react.png" alt="React Logo" width="150"/></div>
      <h1>Page 2</h1>

      <Link to="/page1">Page 1</Link>

    </>
  );
}