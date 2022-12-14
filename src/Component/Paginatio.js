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

// const date=new Date()


const [page, setPage] = useState(1);
const handleChange = (event,value) => {
  // console.log(value)
  setPage(value);
  axios.get(`https://empappregular.herokuapp.com/getPostsByPage?pageNumber=${value}&limit=10`)
  .then((res)=>
  {
 setData(res.data.posts)
 sessionStorage.setItem('user', JSON.stringify(res.data.posts))

})
};
console.log(data)


    
return (
<Grid >
<Stack spacing={2}>
<Pagination color="secondary" sx={{margin:'auto',padding:2}}  count={20} page={page} onChange={handleChange} />
<Container>
<Grid container sx={{display:"flex", margin:'auto'}} spacing={0.5}>
{data?.map((item,index)=>
<Grid  item lg={3} md={6} sm={12} xs={12}  >
<Card sx={{ maxWidth: 250, height:'100%' }}  key={index}>
<CardContent>
<Typography gutterBottom variant="h6" component="div" sx={{color:"red",fontStyle:'bold',textTransform: 'uppercase'}}>{item.title}</Typography>
<Typography gutterBottom variant="p" component="div"  sx={{color:"blue",fontStyle:'italic'}}>subtitle:{item.subtitle}</Typography>
<Typography gutterBottom variant="body1" component="div">Date:{new Date(item.date).getFullYear()}/{new Date(item.date).getMonth()+1}/{new Date(item.date).getDate()}
<br/>Time:{new Date(item.date).getHours()}:{new Date(item.date).getMinutes()}:{new Date(item.date).getSeconds()}:{new Date(item.date).getMilliseconds()}
</Typography>

<img style={{heigth:200,width:200}} src={`https://empappregular.herokuapp.com/${item.images}`} alt=""
onError={event => {
  event.target.src = "https://cdn.vectorstock.com/i/1000x1000/35/52/placeholder-rgb-color-icon-vector-32173552.webp"
  event.onerror = null
}}
/>
     
<Typography variant="body2" color="text.secondary" sx={{color:"blue",fontStyle:'italic'}}>About:{item.about}</Typography>
<Typography gutterBottom variant="p" component="div" sx={{color:"red",fontStyle:'italic'}}> ~{item.author.name}</Typography>
 <button onClick={()=>navigate(`/path/${item._id}`)} >Params</button><br/><br/>
 <button onClick={()=>navigate(`/location`,{state:item})} >Location</button>
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