import React from 'react'
import {Box} from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import styled from 'styled-components'
export default function Videos({v}) {
  return (
  <Wrap>
    {v.map((item,indx)=>(
      <Box key={indx}>
      {item.id.videoId && <VideoCard v={item}/>}
      {item.id.channelId && <ChannelCard channeldetail={item}/>}
      </Box>
    ))}
  </Wrap>
  )
}

const Wrap=styled.div`
display:grid;
grid-gap:24px;
grid-template-columns:repeat(4,minmax(0,1fr));

@media screen and (max-width:900px) and (min-width:768px)
{
  grid-template-columns:repeat(2,minmax(0,1fr));
}


@media screen and (max-width:1537px)
{
  grid-template-columns:repeat(3,minmax(0,1fr));
}

@media screen and (max-width:1314px)
{
  grid-template-columns:repeat(2,minmax(0,1fr));
}

@media screen and (max-width:760px)
{
  grid-template-columns:repeat(1,minmax(0,1fr));
}



`