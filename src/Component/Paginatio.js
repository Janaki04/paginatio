import {  Grid,Container } from '@mui/material'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios'
import React,{useState} from 'react'
import './style.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate} from 'react-router-dom';




function Paginatio() {
   
const[data,setData]=useState([])
const navigate=useNavigate()
const[cart,setCart]=useState([])

const [page, setPage] = useState(1);
const handleChange = (event,value) => {
  // console.log(value)
  setPage(value);
  axios.get(`https://empappregular.herokuapp.com/getPostsByPage?pageNumber=${value}&limit=10`)
  .then((res)=>
  {
 setData(res.data.products)
 sessionStorage.setItem('user', JSON.stringify(res.data.products))

})
};


const cartHandler=(item)=>{
  var temp=cart
  var present=false
  let check=temp?.map((value)=>{
    if(value._id==item._id){
    present=true
    return( {...value,count:value.count+1})
    }
    else{
      return value
    }
  })
  if(!present){
 check=[...temp]
 check.push({...item,count:1})
  }
  setCart(check)
}


//  console.log(cart)

return (
<Grid >
<Grid lg={12} md={12} sm={12} xs={12} sx={{height:50,width:'100%',backgroundColor:"skyblue" ,display:"flex" ,justifyContent:"space-between"}}>
<Typography sx={{textAlign:"left" ,fontSize:25, fontWeight:900}}>Welcome!!!!</Typography>
<button sx={{mt:50}} class="btn btn-success"  onClick={()=>navigate(`/cart`,{state:cart})} > Go Cart<i class="fa-solid fa-cart-shopping"></i>{cart.length}</button>
<Typography sx={{textAlign:"rigth" ,fontSize:25, fontWeight:900}}><i class="fa-regular fa-envelope"></i>contact us</Typography>
</Grid>
<Stack spacing={2}>
<Pagination color="secondary" sx={{margin:'auto',padding:2}}  count={20} page={page} onChange={handleChange} />
<Container>
<Grid container sx={{display:"flex", margin:'auto'}} spacing={0.5}>
{data?.map((item,index)=>
<Grid  item lg={3} md={6} sm={12} xs={12}>
<Card sx={{ maxWidth: 250, height:'100%' }}  key={index} >
<CardContent>
<Typography gutterBottom variant="h6" component="div" sx={{color:"red",fontStyle:'bold',textTransform: 'uppercase'}}>{item.title}</Typography>
<img style={{heigth:200,width:200}} onClick={()=>navigate(`/path/${item._id}`)} src={`https://empappregular.herokuapp.com/${item.images}`} alt=""
onError={event => {
  event.target.src = "https://cbrl-ecom-images.s3.amazonaws.com/FY22/Easter-FIS/782337-0.jpg"
  event.onerror = null
}}
/>
<Typography gutterBottom variant="p" component="div"  sx={{color:"blue",fontStyle:'italic'}}>subtitle:{item.subtitle}</Typography>
<Typography gutterBottom variant="p" component="div" sx={{color:"black",fontStyle:'italic'}}>Price:${item.price}</Typography>
 <button  class="btn btn-primary" onClick={()=>cartHandler(item)} >Add Cart</button><br/><br/>
</CardContent>
</Card>
</Grid>
)}
</Grid>
</Container>
</Stack>

</Grid>
  )
}

export default Paginatio