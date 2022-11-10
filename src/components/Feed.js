import React,{useEffect, useState} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import { Favorite } from '@mui/icons-material'
import Sidebar from './Sidebar'
import styled from 'styled-components'
import Videos from './Videos'
import { Fetching } from '../utils/Fetching'
const Feed = () => {
  const [selectedCat,setSelectedCat]= useState('New');
  const [videos,setVideos]=useState([])
  useEffect(()=>
  {
    Fetching(`search?part=snippet&q=${selectedCat}`).then((data)=>setVideos(data.items))
  },[selectedCat])

  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
    
      <Box sx={{
        height:{sx:"auto", md:"92vh"},px:{sx:0, md:2}}}>
         <Sidebar selectedCat={selectedCat} setSelectedCat={setSelectedCat}/>

         {/* <Typography
          sx={{fontFamily:"Kanit, sans-serif",fontWeight:"600",color:"red",textTransform:"uppercase",display:"flex",alignItems:"center"}}
          >
            Made With <Favorite sx={{ml:0.5,mr:0.5}}/> By Monssef HOUTI
          </Typography> */}
      </Box>

      <Box p={2} sx={{overflowY:"auto",
        height:{sx:"auto", md:"90vh"},flex:2}}>
        <HeadLines>
          {selectedCat} <span style={{color:"red"}}>Recommended Videos</span>
        </HeadLines>
        <Videos v={videos}/>
      </Box>
    </Stack>

  )
}

export default Feed

const HeadLines = styled.div`
font-size:25px;
text-transform:uppercase;
font-weight:600;
margin:10px;

`