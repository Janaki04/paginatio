import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'

const Listadmin = () => {

   const [total,setTotal] = useState(JSON.parse(localStorage.getItem('admin')))


   const[search,setSearch]=useState("")

 

const  navigate = useNavigate()

 const handleRemove = (value) => {
      var remove=[...total]
        var arr = remove.filter((item) => item.Id !== value.Id);
        setTotal(arr)
        alert("product removed")
        localStorage.setItem("admin", JSON.stringify(arr))
        };



        const handleSearch=(e)=>{
        setSearch(e.target.value)
        }
        console.log(search)

        const searchSubmit=(e)=>{
          e.preventDefault()
          if(search!==""){
        const copy=total.filter((value)=>{
          if(value.food.toLowerCase().includes(search.toLowerCase()))
          {
            return true;
          }
          else
          {
            return false;
          }
        })
        setTotal(copy)
      }
      
      }
        

      console.log(total)

  return (
    <div>
      <Sidebar/>
      
     <div className='lst'>
     <button className='catego' style={{backgroundColor:"green" ,color:"white"}}  onClick={()=>navigate("/veg")}>NonVeg</button>
         <button   style={{backgroundColor:"yellow"}} className='catego'onClick={()=>navigate("/nonveg")}>veg</button>
         <div className='admin_search'>
<form class="d-flex mt-1" role="search" onSubmit={searchSubmit} >
          <input className="admin_search"  class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch}/>
          <button style={{fontSize:"20px",color:"black",fontStyle:"italic"}} class="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
       
      {total.map((value)=>(
        
            <div className='list'><br/>
              <h5 style={{color:"red"}}>Item:{value.food}</h5> 


              <img style={{heigth:80,width:290}} src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/01/fast-food.jpg?quality=82&strip=1" alt=""></img>
             <h5 style={{color:"blue" ,fontStyle:"italic"}}> Price:${value.price}</ h5>
             <h5 style={{color:"black" ,fontStyle:"italic"}}> Category:{value.category}</ h5> 

             <button style={{borderRadius:20,backgroundColor:"black",color:"white"}} onClick={()=>handleRemove(value)}>Remove</button> 
        
            </div>
        ))} 
          
</div>

    </div>
  )
}

export default Listadmin