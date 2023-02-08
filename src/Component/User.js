import React,{useState} from 'react'
import './style.css'
import Navbar from './Navbar'
import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom';
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";



const User = () => {

    const [user,setUser]=useState(JSON.parse(localStorage.getItem("admin")))
    // console.log(b)
   const[search,setSearch]=useState("")

   const[take,setTake]=useState([])

   const navigate=useNavigate()

   const [checkveg, setCheckveg] = useState(false);

   const [checknonveg, setChecknonveg] = useState(false);
   const[qty,setQty]=useState("")


const handleSearch=(e)=>{
      setSearch(e.target.value)
      }


    const searchSubmit=(e)=>{
      e.preventDefault()
      if(search!==""){
    const copy=user.filter((value)=>{
      if(value.food.toLowerCase().includes(search.toLowerCase()))
      {
        return true;
      }
      else
      {
        return false;
      }
    })
    setUser(copy)
  }}


 const cartHandler=(item)=>{
    var temp=[...take]
    var present=false
    let check=temp?.map((value)=>{
      if(value.Id===item.Id){
      present=true
      return( {...value,count:value.count+1})
      }
      else{
        return value
      }
    })
    if(!present)
    {
   check=[...temp]
   check.push({...item,count:1})
    }
     else
     {
       if(qty=="half"){
     check.push({...item,count:1,price:(Number(item.price/2))})
    }
    else if(qty=="full"){
      check.push({...item,count:1,price:(Number(item.price))})
     }
    }
    setTake(check)
    localStorage.setItem("cart",JSON.stringify(check))
  }


const handleChangeveg = (e) => {
     setCheckveg(e.target.checked);
     if(e.target.checked && !checknonveg){
        var veg=JSON.parse(localStorage.getItem("admin")).filter((value)=>value.category==="veg")
        console.log(veg)
        setUser(veg)
      }else if(!e.target.checked && checknonveg){
      var nonveg=JSON.parse(localStorage.getItem("admin")).filter((value)=>value.category==="non-veg")
     setUser(nonveg)
     }else if (!e.target.checked && !checknonveg){
        setUser(JSON.parse(localStorage.getItem("admin")))
      }
      else if (e.target.checked && checknonveg){
        setUser(JSON.parse(localStorage.getItem("admin")))
      }
     };


const handleChangenonveg = (e) => {
      setChecknonveg(e.target.checked);
      if(checkveg && !e.target.checked){
        var veg=JSON.parse(localStorage.getItem("admin")).filter((value)=>value.category==="veg")
        console.log(veg)
        setUser(veg)
      }else if (e.target.checked && !checkveg){
        var nonveg=JSON.parse(localStorage.getItem("admin")).filter((value)=>value.category==="non-veg")
        setUser(nonveg)
      }else if(!e.target.checked && !checkveg){
        setUser(JSON.parse(localStorage.getItem("admin")))
        
      }
      else if (e.target.checked && checkveg){
        setUser(JSON.parse(localStorage.getItem("admin")))
      }
    };


   
return (
    <div>
       
      <Navbar/>
     <div>
     
<div className='lst_user'>
<div className='switch'>
<Switch
      name="Veg"
      checked={checkveg}
      onChange={handleChangeveg}
      inputProps={{ 'aria-label': 'controlled' }}
   />
   <label>Veg</label>
   <Switch
      name="Veg"
      checked={checknonveg}
      onChange={handleChangenonveg}
      inputProps={{ 'aria-label': 'controlled' }}
   />
   <label>Non-Veg</label>
   </div>
   <div className='user_search'>
<form class="d-flex mt-1" role="search" onSubmit={searchSubmit}>
          <input style={{width:200,marginLeft:"30%"}} class="form-control me-2" type="search" onChange={handleSearch} placeholder="Search" aria-label="Search"/>
          <button style={{fontSize:"20px",color:"black",fontStyle:"italic"}} class="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>

{user.map((value)=>(
    <div className='list'><br/>
      <h5 style={{color:"red"}}>Item:{value.food}</h5> 
      {/* <img style={{heigth:80,width:290}} src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/01/fast-food.jpg?quality=82&strip=1" alt=""></img> */}
     
     
      <Magnifier
  imageSrc="https://www.eatthis.com/wp-content/uploads/sites/4/2021/01/fast-food.jpg?quality=82&strip=1"
  imageAlt="Example"
  
/>
     
     
     
     
     <h5 style={{color:"blue",fontStyle:"italic"}}> Price:${value.price}</h5> 
     <h5 style={{color:"black" ,fontStyle:"italic"}}> Category:{value.category}</ h5> 
     <button style={{borderRadius:20,backgroundColor:"black",color:"white"}} onClick={()=>setQty("half")} >Half</button> |
     <button style={{borderRadius:20,backgroundColor:"black",color:"white"}} onClick={()=>setQty("full")} > Full </button> <br/><br/>
       
     <button style={{borderRadius:20,backgroundColor:"blue",color:"white"}}  onClick={()=>cartHandler(value)}>Add to Cart</button> 
    </div>
))}
</div> 
</div>  
    </div>
  )
}

export default User