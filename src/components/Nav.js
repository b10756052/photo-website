import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const aboutAlert = () => {
    alert("此專案為練習React串接Web API，該頁面未完成");
  };
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link onClick={aboutAlert} to="#">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
