import React, { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'


 const Adminpage = () => {

 const[input,setInput]=useState({
    name:"",
    password:""
 })

 

 const navigate=useNavigate()




 const handleChange=(e)=>{
   setInput({ ...input,[e.target.name]:e.target.value})
 }

const submitHandle=()=>{
    navigate("/listadmin")
 }

return (
    <div>
        <div className='first_box'>
     <button  style={{backgroundColor:"blue"}} className='button'>Admin</button> 
     <button onClick={()=>navigate("/userpage")}  className='button'>User</button>

     </div>  
     <div className='second_box'>
        <h2>Login</h2>
      <form onSubmit={submitHandle}  >
        <input required className='login'  type="text" placeholder='Name' name="name" onChange={handleChange} /><br/>
        <input required className='login' type="password" placeholder='Password' name="password" onChange={handleChange}/><br/>
        <button  className='login'>Login</button><br/>
      </form>
    </div> 

    </div>
  )
}
export default Adminpage