import React, { useState } from 'react'
import {Stack} from '@mui/material'
import {categories} from '../utils/Constances'
import styled from 'styled-components'

const Sidebar = ({setSelectedCat,selectedCat}) => {
  return (
    <Stack
    direction="row"
    sx={{
        overflowY:"auto",
        height:{sx:'auto', md:"95%"},
        flexDirection:{md:'column'},
    }}>
        {categories.map((c)=>(
           <ButtonCat
           onClick={()=>setSelectedCat(c.name)}
           style={{
            background:c.name === selectedCat && "red",
            color:c.name === selectedCat && "white"
           }}>
                <span>{c.icon}</span>
                <span id="name">{c.name}</span>
           </ButtonCat> 
        ))}
    </Stack>
  )
}

export default Sidebar


const ButtonCat=styled.button `
display:flex;
width:10vw;
align-items:center;
padding:8px;
border-radius:20px;
margin-top:15px;
border:none;
font-weight:600;
text-align:center;
background:white;
font-size:15px;

@media screen and (max-width:900px) and (min-width:768px)
{
  flex-direction:column;
  margin-right:50px;
  width:20vw;
}


@media screen and (max-width:1000px)
{
  flex-direction:column;
  //margin-right:50px;
  //width:20vw;
}

@media screen and (max-width:760px)
{
  flex-direction:column;
  margin-right:50px;
  width:20vw;
}



#name{
    flex:1;
    justify-content:center;
    text-transform:uppercase;
    letter-spacing:2px;
}
&:hover{
    color:white;
    background:red;
    cursor:pointer;
}
`