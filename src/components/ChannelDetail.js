import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Videos from "./Videos"
import ChannelCard from "./ChannelCard"
import { Fetching } from '../utils/Fetching'
const ChannelDetail = () => {
  const [channelPageDetail,setchannelPageDetail]= useState(null)
  const [videos,setvideos] = useState([])
  const {id} = useParams()
  useEffect(()=>{
    Fetching(`channels?part=snippet&id=${id}`).then((data)=>setchannelPageDetail(data?.items[0]));
    Fetching(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setvideos(data?.items));
  },[id])


  return (
    <Box minHeight="95vh">
      <Box>
          <div
          style={{
            background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
            zIndex:10,
            height:"300px"
          }}
          />
          <ChannelCard ChannelDetail={channelPageDetail} marginTop="-93px" backgroundColor="#F7F9F7" border="1px solid #e3e3e3"/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px' } }}/>
          <Videos videos={videos} />
        </Box>
      </Box>
    
  )
}

export default ChannelDetail