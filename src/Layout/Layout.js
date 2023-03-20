import React, { useState } from 'react'
import NavBar from "../components/NavBar/NavBar";
import logo from "../components/SideBar/logo.svg"
import SideBar from "../components/SideBar/SideBar";
import Header from "../components/Header/Header.js"
import styled from 'styled-components'
import { Outlet } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
export default function Layout() {
    const [menu, setMenu] = useState("deactive")
    const handleMenu = () => {
        if (menu === "active") {
            setMenu("deactive")
        } else {
            setMenu("active");
        }

    }

    return (
        <Container>
            <IconButton onClick={handleMenu} className={`icon`}> <MenuIcon fontSize="large" /> </IconButton>
            <div className={`sidebar ${menu}`}><SideBar /></div>  
            <Section>
            {/* <div className="logo1">
                <img className='img' src={logo} alt="" />
            </div> */}
                <NavBar />
                <Banner />
                <Header />
                <Outlet />
            </Section>
        </Container>

    )
}


const Container = styled.div`
    display:flex;

@media(max-width:900px){
    .active{
        width: 300px;
    }

    .deactive{
        width: 0px;
    }
}

    .sidebar{
        
    }
    

 .icon{
    visibility: hidden;
    position: absolute;
    top: 50px;
    left: 20px;

    @media(max-width:900px){
        visibility: visible;
    }
 }  
 
 .logo1{
    position: absolute;
    top: 49px;
    left: 80px;
 }
`
const Banner = styled.div`
    dispaly: flex;
    height: 193px;
    
    background: rgb(255,187,203);
    background: linear-gradient(90deg, rgba(255,187,203,1) 23%, rgba(148,150,233,1) 83%);
`

const Section = styled.div`
display: flex;
width: 100%;
flex-direction: column;
`