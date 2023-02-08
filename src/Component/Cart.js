import React,{useEffect, useState} from 'react'


const Cart = () => {


const[add,setAdd]=useState(JSON.parse(localStorage.getItem("cart"))||'')



const[amount,setAmount]=useState(0) 



const[dis,setDis]=useState(amount)

const handlePrice = () => {
    let total = 0;
    add.map((item) => {
        total= total +( item.count*item.price)
})
setAmount(total);
}

useEffect(()=>{
    handlePrice()
  })

  const flat=()=>{
    setDis(amount-20)
  }
  const discount=()=>{
    var z= amount-(amount*(30/100));
    
    setDis(z)
    
  }


return (
    <div>
      <div className='heading_cart'>
<h1 > Items Added</h1>
<button className='cart_btn' onClick={flat} >Flat 20/-</button>
<button className='cart_btn' onClick={discount} >Discount 30%</button>

      </div>
     
        <div>

{add.map((value)=>(
    <div className='list_cart'>
      <h5>Item:{value.food}</h5> 
     <h5> Price:{value.price}</h5>
     <button style={{height:30,width:30}}>+</button>
     <h5>{value.count}</h5> 
     <button style={{height:30,width:30}}>-</button>
    </div>
))}
</div> 
<div className='total_cart'> <hr/>
<h3>Total Price:{amount}</h3><hr/>
<h3>Final Price:{dis}</h3> <hr/>
</div>
    </div>
  )
}

export default Cart