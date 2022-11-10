//#region declarations
import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import Avatar from '@mui/material/Avatar/Avatar';
import {Link} from "react-router-dom";
import Searchbar from './Searchbar';
import Sidebar from './Sidebar';


//#endregion
function Header() {
  const [sideBarstatut,setSidebarstatut] = useState(false)
  return (
    <Container>
      <LeftHeader>
        <BurgerNav show={sideBarstatut}>
          <SideBarMenu onClick={() =>setSidebarstatut(true)}>
            <Sidebar />
          </SideBarMenu>
        </BurgerNav>
        

        
            <Link to="/">
                <Logo src="./logo.png" alt='' />
            </Link>
      </LeftHeader>
         
        
        <Searchbar/>
        
        
        <RightHeader>
            <VideoCallSharpIcon className='righticons'/>
            <AppsSharpIcon className='righticons'/>
            <NotificationsSharpIcon className='righticons'/>
            <Avatar 
            alt="Monssef Houti"
            src="https://avatars.githubusercontent.com/u/48191198?s=400&u=c275e008b0c875251d76e7c854bf20f3de07bce9&v=4"
            />
        </RightHeader>
        
        
    </Container>
  )
}

export default Header

//#region Stylish

const Container = styled.div `
display:flex;
align-items:center;
height:74px;
overflowY:hidden;
justify-content:space-between;
//padding:0 20px 0 20px;
position:sticky;
top:0;
z-index:100;
background-color:white;
`
const Logo=styled.img `
height:70px;
object-fit:contain;
//margin-left:10px;
`
const LeftHeader=styled.div`
display:flex;
align-items:center;
margin-left:10px;

`
const SideBarMenu= styled(MenuIcon)`
cursor:pointer;
&:hover{
  color:red;
}
`
const RightHeader = styled.div `
display:flex;
align-items:center;
margin-right:10px;
.righticons{
  margin-right:10px;
  margin-left:5px;

  @media screen and (max-width:760px)
{
  display:none;
}

}
`
const BurgerNav=styled.div``
//#endregion