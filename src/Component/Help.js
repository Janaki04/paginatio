import React from 'react'
import './Help.css'
import {data} from './Data'

function Help() {


const store=data
console.log(store)



  return (
    <div>
    <div className='nav_help'>
        <div className='nav_text'>
        <p>Foodie||Help Centre</p>
        </div>

        <div className='nav_text2'>
       <input style={{width:200}} type="text" placeholder='submit a request'/>  
       <button style={{borderRadius:10,backgroundColor:"blue",color:"white"}}>Submit</button> 
       </div>
       </div> 


       <div className='nav_bar'>
       <nav class="navbar bg-primary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{fontSize:"20px",color:"white"}}>Foodie||HelpCentre</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end secondary" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{backgroundColor:"white",color:"black"}}>
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel" style={{fontSize:"20px",color:"black",fontStyle:"italic"}}>User</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" style={{fontSize:"20px",color:"black",fontStyle:"italic"}}>Submit a request</a>
          </li><hr/>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" style={{fontSize:"20px",color:"black",fontStyle:"italic"}}>Sign in</a>
          </li><hr/>
        </ul>
         <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button style={{fontSize:"20px",color:"black",fontStyle:"italic"}} class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
      </div>



      
       


    <div className='first_help' >
        <div className='first_text'>
            <h1 >How can we help?</h1>
            <input type="text" placeholder='search'/>
        </div>
        </div>



    <div className='second_help'>
    {store.map((value)=>
<div className='data'>
    <div className='data_img'>
<img src={value.image}/>
    </div>
    <div className='data_text'>
    <h3>{value.name}</h3><br/> 
 <h5>{value.details}</h5> <br/>
 <a href={value.url} style={{textDecoration:"none"}}>Learn more--</a> 
    </div>
</div>
)}
 </div>







    <div className='third_help'>
   <div>
    <h3>Abstract</h3>
<p>Start Trial</p>
<p>Pricing</p>
<p>Download</p>
   </div>
   <div>
<h3>Resources</h3>
<p>Blog</p>
 <p>Help Center</p>
<p>Release Notes</p>
<p>Status</p>
   </div>
   <div>
<h3>Community</h3>    
<p>Twitter</p> 
<p>LinkedIn</p>
<p>Facebook</p>
<p>Dribbble</p>
<p>Podcast</p>
</div>

<div>
<h3>Company</h3>
<p>About Us</p> 
<p>Careers</p>
<p>Legal</p>
<h3>Contact Us</h3>
<p>info@abstract.com</p>
</div>
<div></div>
<div></div>
</div>

<div className='fouth_help'>
<div>
   
© Copyright 2022<br/>

Abstract Studio Design, Inc.<br/>

All rights reserved<br/>
</div>
</div>


    </div>
  )
}

export default Help