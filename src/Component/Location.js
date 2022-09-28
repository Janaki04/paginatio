import React from 'react'
import {useLocation} from "react-router-dom"
import {  Grid } from '@mui/material'
import './style.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Location(){

const b=useLocation()
// console.log(b)

return(
 <Grid>
<Grid  item lg={3} md={6} sm={12} xs={12}  sx={{ml:'10%', mt:10}}  >
<Card sx={{ maxWidth: 250, height:'100%' }} >
<CardContent>
<Typography gutterBottom variant="h6" component="div" sx={{color:"red",fontStyle:'bold',textTransform: 'uppercase'}}>{b.state.title}</Typography>
<Typography gutterBottom variant="p" component="div"  sx={{color:"blue",fontStyle:'italic'}}>subtitle:{b.state.subtitle}</Typography>
<Typography gutterBottom variant="body1" component="div">Date:{new Date(b.state.date).getFullYear()}/{new Date(b.state.date).getMonth()+1}/{new Date(b.state.date).getDate()}
<br/>Time:{new Date(b.state.date).getHours()}:{new Date(b.state.date).getMinutes()}:{new Date(b.state.date).getSeconds()}:{new Date(b.state.date).getMilliseconds()}
</Typography>

<img style={{heigth:200,width:200}} src={`https://empappregular.herokuapp.com/${b.state.images}`} alt=""
onError={event => {
  event.target.src = "https://cdn.vectorstock.com/i/1000x1000/35/52/placeholder-rgb-color-icon-vector-32173552.webp"
  event.onerror = null
}}
/>
     
<Typography variant="body2" color="text.secondary" sx={{color:"blue",fontStyle:'italic'}}>About:{b.state.about}</Typography>
<Typography gutterBottom variant="p" component="div" sx={{color:"red",fontStyle:'italic'}}> ~{b.state.author.name}</Typography>
</CardContent>
    </Card>
     </Grid> 
 </Grid>
)
}
export default Location