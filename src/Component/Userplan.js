import React,{useState} from 'react'
import './plans.css'


const Userplan = () => {


const [userplanlst,setUserplanlst] = useState(JSON.parse(localStorage.getItem('plans')))



  return (
    <div>
    <div className='plans_nav'>
    <h2>List of Plans</h2>
    </div>

     <div>
        <h1>Choose Your Plan</h1>
      {userplanlst.map((value)=>(
       <div className='plan_list'><br/>
       <h3 style={{fontSize:"30px", fontWeight:900,}}>{value.name}</h3><br/>
       <p>This is our most affordable plan to get started</p>
       <h3 style={{fontSize:"25px", fontWeight:700, }}>Price:${value.price}</h3><br/>
       <h3 style={{fontSize:"20px", fontWeight:600, fontStyle:"italic"}}>Features:</h3><br/>

       <button style={{width:200,height:50,borderRadius:25,color:"White",backgroundColor:"red",fontSize:25}}>Subscribe</button>
      </div> 
      ))}

     </div>



        
    </div>
  )
}

export default Userplan