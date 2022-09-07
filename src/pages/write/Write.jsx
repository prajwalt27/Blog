import React from "react";
import "./write.css";

export default function Write() {
  return (
    <div className="write">
    <img 
    className="writeImg" 
    src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg"
    alt=''/>
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell Your Story...."
            type="text"
            className="writeInput"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
