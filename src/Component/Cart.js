import { Grid } from '@mui/material'
import React,{useEffect, useState} from 'react'
import {useLocation} from "react-router-dom"
import Typography from '@mui/material/Typography';
import './style.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


function Cart() {

  const[price,setPrice]=useState(0) 
const a=useLocation()
const[store,setStore]=useState(a.state)
 

const handlePrice = () => {
    let total = 0;
    store.map((item) => {
        console.log('--- item',item)
        total= total +( item.count*item.price)
})
setPrice(total);
}

const gst= (price*10/100)+price

const handleRemove = (id) => {
const arr = store.filter((item) => item._id !== id);
setStore(arr)
alert("product removed")
handlePrice();
};

useEffect(()=>{
    handlePrice()
  })








  return (
    <Grid container>
    {store.map((value)=>(
      <Grid  lg={12} md={12} xs={12} sm={12} sx={{alignItems:"center"}}>
    <Card sx={{width:600,height:110,border:"2px solid black",ml:30,mt:2,display:"flex",justifyContent:"space-between" }} >
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"left",color:"red",fontStyle:'bold',textTransform: 'uppercase'}}>
        {value.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{textAlign:"left",color:"blue",fontStyle:'italic'}}>
     Price: ${value.price}
      </Typography>
      </CardContent>
    <img style={{heigth:200,width:200}}  src={`https://empappregular.herokuapp.com/${value.images}`} alt=""
onError={event => {
  event.target.src = "https://cbrl-ecom-images.s3.amazonaws.com/FY22/Easter-FIS/782337-0.jpg"
  event.onerror = null
}}
/>
 <CardActions>
 <Typography variant="body2" color="text.secondary" sx={{textAlign:"left",color:"blue",fontStyle:'bold',fontSize:20}}>
        <button>+</button>
     {value.count}
     <button>-</button>
      </Typography>
      <Button  size="small" sx={{alignItems:"right",color:"red"}} onClick={()=>handleRemove(value._id)}>Remove</Button>
    </CardActions>
  </Card>
 </Grid>
))}
<Grid lg={12} md={12} xs={12} sm={12}  >
  <Typography sx={{width:300,height:100,border:"2px solid black",ml:50,mt:2,textAlign:"centre",fontSize:18,color:"black",fontWeight:900 }}>
    Total Price :${price}<br/> GST%===10%  <br/>  Final Price :${gst}
  </Typography>
</Grid>
</Grid>
)}


export default Cart