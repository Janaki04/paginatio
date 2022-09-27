import { autocompleteClasses, Grid } from '@mui/material'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios'
import React,{useState} from 'react'
import './style.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Icon from '../Image/Icon.png'


function Paginatio() {
   
const[data,setData]=useState([])

const [page, setPage] = useState(1);
const handleChange = (event,value) => {
  console.log(value)
  setPage(value);
  axios.get(`https://empappregular.herokuapp.com/getPostsByPage?pageNumber=${value}&limit=10`)
  .then((res)=>
  {
  setData(res.data.posts)
})

};
console.log(data)


    
return (
<Grid >
<Stack spacing={2}>
<Pagination color="secondary" sx={{margin:'auto',padding:2}}  count={20} page={page} onChange={handleChange} />
<container>
<Grid container sx={{display:"flex", margin:'auto' }} spacing={2}>
{data?.map((item,index)=>
<Grid  item lg={3} md={3} sm={12} xs={12} >
<Card sx={{ maxWidth: 250, height:'100%' }} key={index} >
<CardContent>
<Typography gutterBottom variant="p" component="div">Author:{item.author.name}</Typography>
<Typography gutterBottom variant="body1" component="div">Date:{item.date}</Typography>

<img src={Icon} alt=""/>
     
        <Typography gutterBottom variant="p" component="div">Title:{item.title}</Typography>
        <Typography gutterBottom variant="p" component="div">subtitle:{item.subtitle}</Typography>
        <Typography variant="body2" color="text.secondary">About:{item.about}</Typography>
     
    
        </CardContent>
    </Card>
    </Grid>
)}
    </Grid>

</container>


  </Stack>
</Grid>
  )
}

export default Paginatio