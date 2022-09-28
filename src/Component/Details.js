import React from 'react'
import { useParams } from 'react-router-dom'
import {  Grid } from '@mui/material'
import './style.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function Details(){

const param= useParams()
    // console.log(param.id)
var data= JSON.parse(sessionStorage.getItem('user'))
    // console.log(data)
var a=data.filter((value)=>value._id==param.id)
    // console.log(a)

return(
    <Grid container>
    {a?.map((item,index)=>
<Grid  item lg={3} md={6} sm={12} xs={12}  sx={{ml:'10%', mt:10}}>
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
</CardContent>
    </Card>
     </Grid> 
)}
</Grid>
) 
}
export default Details