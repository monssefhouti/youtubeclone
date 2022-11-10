import React from 'react'
import {Link} from "react-router-dom";
import {Box,Typography,CardContent,CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {demoProfilePicture} from '../utils/Constances';
const ChannelCard = ({channeldetail,marginTop,backgroundColor,border}) => {
  return (
    <Box sx={{
      borderRadius:"20px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      width:{xs:"356px", md:"320px"},
      height:"326px",
      margin:"auto",
      marginTop,
      
    }}>
      <Link to={`/channel/${channeldetail?.id?.channelId}` } style={{textDecoration:"none", color:"black"}}>
        <CardContent sx={{
          display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center"
        }}>
          <CardMedia image={channeldetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channeldetail?.snippet?.title}
          sx={{borderRadius:"50%", height:'180px',width:"180px", mb: 2,ml:4, border: '1px solid #e3e3e3'}}
          />
          <Typography sx={{fontWeight:600,letterSpacing:"2px",height:60,width:250}}>
            {channeldetail?.snippet?.title}{''}
            <CheckCircle sx={{ fontSize: '14px', color: 'red', ml: '5px' }} />
          </Typography >
          {channeldetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channeldetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
        </CardContent>
      </Link>


    </Box>
  )
}

export default ChannelCard