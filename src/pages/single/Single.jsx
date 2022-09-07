import React from 'react'
import "./single.css"
// import SideBar from '../../components/sideBar/SideBar'
import SinglePost from '../../components/singlePost/singlePost'


export default function Single() {
  return (
    <div className='single'> 
       <SinglePost/>
       {/* <SideBar/> */}
    </div>
  )
}
