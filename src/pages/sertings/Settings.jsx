import React from "react";
import "./settings.css";
//import AboutMe from "../../components/aboutMe/";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsUpdateTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://burst.shopifycdn.com/photos/city-lights-through-rain-window.jpg?width=1200&format=pjpg&exif=1&iptc=1"
              alt=""
              className=""
            />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="finalInput" style={{ display: "none" }} />
          </div>
          <label>UserName</label>
          <input type="text" placeholder="Name" />
          <label>Email</label>
          <input type="email" placeholder="abc00@gmail.com" />
          <label>Password</label>
          <input type="Password" />
          <button className="settingsSubmit">Update</button>
        </form>
        
      </div>
    </div>
  );
}
