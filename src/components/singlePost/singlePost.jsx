import React from "react";
import "./singlePost.css";
import AboutMe from "../aboutMe/AboutMe";

export default function singlePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostTitle"
          src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          lorem mifns adfjksdljfl
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Prajwal</b>
          </span>
          <span className="singlePostDate">1 hour Ago</span>
        </div>
        <p className="singlePostDesc">
          Lore ha bhai ho bhai ye bahtu dfjadhfl jio bhai airtel bhai docomo
          bhai nomogo bhai lore ha bhai ho bhai ye bahtu dfjadhfllore ha bhai ho
          bhai ye bahtu dfjadhfl jio bhai airtel bhai docomo bhai nomogo bhai
          lore ha bhai ho bhai ye bahtu dfjadhfl jio bhai airtel bhai docomo
          bhai nomogo bhai lore ha bhai ho bhai ye bahtu dfjadhfl jio bhai
          airtel bhai docomo bhai nomogo bhailore ha bhai ho bhai ye bahtu
          dfjadhfl jio bhai airtel bhai docomo bhai nomogo bhai lore ha bhai ho
          bhai ye bahtu dfjadhfl jio bhai airtel bhai docomo bhai nomogo bhai
          lore ha bhai ho bhai ye bahtu dfjadhfl jio bhai airtel bhai docomo
          bhai nomogo bhai jio bhai airtel bhai docomo bhai nomogo bhai lore ha
          bhai ho bhai ye bahtu dfjadhfl jio bhai airtel bhai docomo bhai nomogo
          bhai
        </p>
      </div>
      <AboutMe/>
    </div>
  );
}
