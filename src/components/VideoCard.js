import React from 'react'
import {Link} from "react-router-dom";
import { Typography,CardContent,CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import styled from 'styled-components'
import "../index.css";
import { 
    demoVideoTitle,
    demoVideoUrl,
    demoChannelTitle,
    demoChannelUrl } from '../utils/Constances';
const VideoCard = ({v:{id:{videoId},snippet}}) => {
  return (
    <Wrap sx={{borderRadius:5,boxShadow:"rgb(0 0 0 / 69%) 0 0px 30px -10px, rgb(0 0 0 / 73%) 0px 0px 10px -10px"}} className="card-hover">
        <Link to={videoId? `/video/${videoId}`:demoVideoUrl}>
            <CardMedia className="cardmedimg" image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            />
        </Link>

        <CardContent sx={{width:400}}>

        <Link to={videoId? `/video/${videoId}`:demoVideoUrl} style={{textDecoration:"none", color:"black"}}>
            <Typography sx={{fontWeight:600,letterSpacing:"2px",height:60,width:250}}>
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
            </Typography>
        </Link>

        <Link to={snippet?.channelId? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{textDecoration:"none", color:"gray"}}>

            <Typography sx={{fontWeight:600,letterSpacing:"2px",height:60,width:250,marginTop:"20px"}}>
                    {snippet?.channelTitle.slice(0,80) || demoChannelTitle.slice(0,80)}
                    <CheckCircle sx={{fontSize:13,color:'red',ml:0.5}}/>
            </Typography>
        </Link>
            
        </CardContent>
    </Wrap>
  )
}

export default VideoCard

const Wrap = styled.div`
border-radius:10px;
display:flex;
flex-direction:column;
@media screen and (max-width:767px)
{
  width:400px;
}
.cardmedimg
{
  border-radius:10px;
  width:390px;
  height:200px;
  @media screen and (max-width:1537px)
  {
    //width:525px;
    width:355px;
  }

  @media screen and (max-width:1314px)
  {
    width:512px;
    height:300px
  }
  @media screen and (max-width:1200px)
  {
    width:483px;
    height:300px
  }

  @media screen and (max-width:760px)
  {
    width:396px;
  }

}

`