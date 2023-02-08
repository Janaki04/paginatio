import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './plans.css'


const Plans = () => {

const navigate=useNavigate()

const [planlst,setPlanlst] = useState(JSON.parse(localStorage.getItem('plans')))

console.log(planlst)


  return (
    <div>
    <div className='plans_nav'>
    <h2>List of Plans</h2>
    <h2 onClick={()=>navigate('/createplan')}><i class="fa-solid fa-plus"></i></h2>    
    </div>

     <div>
      {planlst.map((value)=>(
       <div className='plan_list'><br/>
       <h3 style={{fontSize:"30px", fontWeight:900,}}>{value.name}</h3><br/>
       <p>This is our most affordable plan to get started</p>
       <h3 style={{fontSize:"25px", fontWeight:700, }}>Price:${value.price}</h3><br/>
       <h5>Features:</h5>
      <p> {value.feature.map((item)=><p>-{item}</p>)}</p>

       <button style={{width:200,height:50,borderRadius:25,color:"White",backgroundColor:"red",fontSize:25}}>Get Started</button>
      </div> 
      ))}

     </div>



        
    </div>
  )
}

export default Plans