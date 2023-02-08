import React,{useState} from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

 const Navbar = () => {

    const navigate=useNavigate()

const[len,setLen]=useState(JSON.parse(localStorage.getItem("cart"))||'')


  return (
    <div>
<div class="sidebar">
  <a  href="#">User</a><hr/>
  <a href="#">UserName</a><hr/>
  <a href="#">UserEmail</a><hr/>
  <a href="#">UserNumber</a><hr/>
  <a href="#">UserAbout</a><hr/>
</div>

<nav class="navbar bg-primary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{fontSize:"20px",color:"white"}}>WELCOME USER!!!</a>
    <button style={{backgroundColor:"blue",border:"none",color:"white",fontSize:"15px"}} onClick={()=>navigate(`/cart`)}>Go Cart<i class="fa-solid fa-cart-plus"></i>{len.length}</button>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end secondary" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{backgroundColor:"aqua",color:"black"}}>
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel" style={{fontSize:"20px",color:"black",fontStyle:"italic"}}>User</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li>
            <img style={{height:150,width:150}} src="https://previews.123rf.com/images/meysye/meysye1904/meysye190400002/121250278-female-silhoutte-avatar-default-avatar-profile-picture-photo-placeholder.jpg" alt=""/>
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
            <p class="nav-link" onClick={()=>navigate(`/userpage`)}    style={{fontSize:"20px",color:"black",fontStyle:"italic"}}>LogOut</p>
            <p class="nav-link" onClick={()=>navigate(`/help`)}    style={{fontSize:"20px",color:"black",fontStyle:"italic"}}>Help-Line<i class="fa-solid fa-question"></i></p>
            <p class="nav-link" onClick={()=>navigate(`/userplan`)}    style={{fontSize:"20px",color:"black",fontStyle:"italic"}}>Subscribe Here</p>
            
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
export default Navbar