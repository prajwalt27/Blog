import React from "react";
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
// import SideBar from '../../components/aboutMe/';
import './home.css';
import AboutMe from "../../components/aboutMe/AboutMe";

function home() {
    return ( 
      <>
         <Header/>
         <div className='home'>
             <Posts/>
             {/* <AboutMe/> */}
         </div>
         <AboutMe/>
      </>
     );
}

export default home;