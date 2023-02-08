import React,{useState} from 'react'
import Sidebar from './Sidebar'


const Nonveg = () => {

   const [total,setTotal] = useState(JSON.parse(localStorage.getItem('admin')))

   const newArr=total.filter((value)=>value.category=='non-veg')


 const handleRemove = (value) => {
      var remove=[...total]
        var arr = remove.filter((item) => item.Id !== value.Id);
        setTotal(arr)
        alert("product removed")
        localStorage.setItem("admin", JSON.stringify(arr))
        };

return (
    <div>
      <Sidebar/>
     <div className='lst'>
     {newArr.map((value)=>(
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

export default Nonveg