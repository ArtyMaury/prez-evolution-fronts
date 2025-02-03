import {Link} from "react-router-dom";
import React from "react";
// http://localhost:4173/page1

export function Page1() {

  return (
    <>
      <div className="logos"><img src="/react.png" alt="React Logo" width="150"/></div>
      <h1>Page 1</h1>

      <Link to="/page2">Page 2</Link>

    </>
  );
}