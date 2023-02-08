import React,{useState} from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar';




const Admin = () => {

  const [food, setFood] = useState("");
  const [price, setPrice] = useState("");
  const[category,setCategory]=useState("")

  const[data,setData]=useState(JSON.parse(localStorage.getItem("admin"))||'')
  const  store = useNavigate()

 const submitHandle=(e)=>{
e.preventDefault()
setData([...data, {food: food, price: price, category:category,  Id: new Date().getTime().toString()}])
localStorage.setItem("admin",JSON.stringify([...data, {  food: food, price: price, category:category, Id: new Date().getTime().toString()}]))
store('/listadmin')
 }

 console.log(data)



return (
    <div>
<Sidebar/>
<div className='admin_box'>
<form  onSubmit={submitHandle} >
<input className='admin_add'   type="text" placeholder='Item Name(Any Food)' name="food" onChange={(e)=>setFood(e.target.value)} /><br/>
<input  className='admin_add' type="number" placeholder='Price' name="price" onChange={(e)=>setPrice(e.target.value)} /><br/>

<select name="category"  className='admin_add' onChange={(e)=>setCategory(e.target.value)} >
  <option >select</option>
  <option name="veg" value="veg">Veg</option>

  <option name="non-veg" value="non-veg">Non-veg</option>
</select>
<button  className='admin_add' style={{backgroundColor:"blue",color:"white"}} >Submit</button><br/>
</form>
</div>  
</div>
  )
}

export default Admin