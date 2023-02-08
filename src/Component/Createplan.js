import React,{useState} from 'react'
import './plans.css'
import {useNavigate} from 'react-router-dom'


function Createplan() {

const navigate=useNavigate()

const[name,setName]=useState("")
const[price,setPrice]=useState("")

const[features,setFeatures]=useState({'name':"",'price':"",'feature':[]})




const[plan,setPlan]=useState(JSON.parse(localStorage.getItem("plans"))||'')


const check = [  
  { value: "unlimited sending"},  
  { value: "Email marketing"},  
  { value: "Send newsletters"},  
  { value: "Free design services"}  
]

 
 


const handleChange=(e)=> { 
  if( e.target.checked){
   var temp={...features,'name':name,'price':price, 'feature':[...features.feature,e.target.value]}
    setFeatures(temp)
  } else{
    var temp2={...features}
    var filter=temp2.feature?.filter((item)=>item!==e.target.value)
  setFeatures({...features,'name':name, 'price':price,'feature':filter})

  }
   
      
} 






const SubmitPlan=(e)=>{
    e.preventDefault()
    setPlan([...plan, {...features , Id: new Date().getTime().toString()}])
    localStorage.setItem("plans",JSON.stringify([...plan, {  ...features, Id: new Date().getTime().toString()}]))
    setFeatures({'name':"",'price':"",'feature':[]})
    navigate('/plans')

}
console.log(plan)

return (
    <div>
      <div className='plans_nav'>
    <h2>Create Plans</h2>
    <h2 onClick={()=>navigate('/plans')}><i class="fa-solid fa-plus"></i></h2>    
    </div> 

   <div className='plan_box'>
    <h3 >Create Plan</h3>
   <form onSubmit={SubmitPlan}>
    <input className='plan_add' type="text" placeholder='Name of Plan' name="name"  onChange={(e)=>setName(e.target.value)}/>
    <input className='plan_add' type="text" placeholder='Price' name="price"  onChange={(e)=>setPrice(e.target.value)}/><br/>
    <h6>Add Features:</h6>
    {check.map(item => (  
    <label>  
    <input  type="checkbox"  value={item.value} 
     onChange={(e)=>handleChange(e)}
      />
     {item.value}
                </label>  
            
            ))  
          }  
    
    
   <button className='plan_add' style={{backgroundColor:"blue",color:"white"}}>Create Plan</button>
   </form>
   </div>
 </div>
  )
}

export default Createplan