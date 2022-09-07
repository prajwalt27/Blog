import "./header.css";
import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">react</span>
        <span className="headerTitleg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://img.freepik.com/free-vector/neutral-soft-abstract-watercolor-background-vector_53876-140748.jpg?w=2000"
        alt=""
      />
    </div>
  );
}

export default Header;
