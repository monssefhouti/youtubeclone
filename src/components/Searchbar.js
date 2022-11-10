import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import {Search} from '@mui/icons-material';
import '../index.css'
const Searchbar = () => {
  return (
    <Paper
    component="form"
    className="search-bar"
    onSubmit={()=>{}}
    sx={{
        display:"flex",
        borderRadius:20,
        border:'1px solid #e3e3e3',
        pl:2,
        boxShadow:'none',
        mr:{sm:5},
        width:"20vw"
    }}
    >
        <input className="search-bar" type="text" placeholder="Search" onChange={() =>{}} style={{
            outlineColor:"transparent",
            borderColor:"transparent",
            margin:"2px",
            width:"20vw"
        }}/>
        <IconButton type="submit" sx={{
            p:"10px",
            color:"red",
        }}>
            <Search />
        </IconButton>
</Paper>
      )
}


export default Searchbar