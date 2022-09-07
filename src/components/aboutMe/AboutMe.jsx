import React from "react";
import "./aboutme.css";

export default function AboutMe() {
  return (
    <div className="sideBar">
      <div className="sidebarItem">
        <span className="sidebarTitle"> ABOUT ME </span>
        <img
          className="img1"
          src="https://pngimage.net/wp-content/uploads/2018/05/blue-human-icon-png-7.png"
          alt=""
        />
        <p >
          loremepsum loremepsum 
          lop jifdhuasdpghausdhg[asd
          fjasdfhipauhsdfuahi[e9fh
          aisdjfip]]
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life </li>
          <li className="sidebarListItem">Music </li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US ON </span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
