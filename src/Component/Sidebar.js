import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

 const Sidebar = () => {
    const navigate=useNavigate()
  return (
    <div>
<div class="sidebar">
  <a  href="#">Admin</a><hr/>
  <a href="#">AdminName</a><hr/>
  <a href="#">AdminEmail</a><hr/>
  <a href="#">AdminNumber</a><hr/>
  <a href="#">AdminAbout</a><hr/>
</div>

<nav class="navbar bg-primary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{fontSize:"20px",color:"white"}}>Welcome Admin!!!</a>
    <button style={{backgroundColor:"blue",border:"none",color:"white",fontSize:"15px"}} onClick={()=>navigate(`/admin`)}><i class="fa-solid fa-plus"></i></button>

    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{backgroundColor:"aqua",color:"white"}}>
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel" style={{fontSize:"20px",color:"black",fontStyle:"italic"}}>Admin</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li>
          <img style={{height:150,width:150}} src="https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-hand-drawn-modern-vector-id1273297923" alt=""/>

          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" style={{fontSize:"20px",color:"black",fontStyle:"italic"}}>Set Profile</a>
          </li>
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:"20px",color:"black",fontStyle:"italic"}}>
             Settings
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Change Number</a></li>
              <li><a class="dropdown-item" href="#">Change Email</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><a class="dropdown-item" href="#">Update Photo</a></li>
            </ul>
            <li class="nav-item">
            <p class="nav-link active" aria-current="page" onClick={()=>navigate(`/adminpage`)}  style={{fontSize:"20px",color:"black",fontStyle:"italic"}}>LogOut</p>
            <p class="nav-link" onClick={()=>navigate(`/help`)}    style={{fontSize:"20px",color:"black",fontStyle:"italic"}}>Help-Line <i class="fa-solid fa-question"></i></p>
            <p class="nav-link" onClick={()=>navigate(`/plans`)}    style={{fontSize:"20px",color:"black",fontStyle:"italic"}}>Subscription</p>
            
          </li>
          </li>
        </ul>
       
      </div>
    </div>
  </div>
</nav>
</div>
  )
}
export default Sidebar
