import React from 'react'
import styled from 'styled-components';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { Avatar, Button, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
export default function Page() {

    const [open, setOpen] = useState(false);
    const [imgsize, setImgsize] = useState("activated");

    const handleDrawer = () => {
        if (open === true) {
            setImgsize("activated");
            setOpen(false);
        } else {
            setOpen(true);
            setImgsize("deactived");
        }
    };
    return (
        <Container >
            <Typography className='title'>
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
                CIIPS: Triz benchmarking (Lecture 8)
            </Typography>
            <div className={`Main ${imgsize}`}>

                <div className={`image`}>
                    <img src="/Note.svg" alt="" />
                </div>
                {/* Drawer */}
                <div className={` ${"drawer-container"} ${open ? "deActive" : "active"}`} >
                    <IconButton onClick={handleDrawer} className="open-btn">
                        {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}

                    </IconButton>
                    <Drawer>
                        <div className="section menu">
                            <IconButton className='icons'>
                                <ThumbUpAltOutlinedIcon />
                                <Typography className='menu-text'>28 Likes</Typography>
                            </IconButton>

                            <IconButton className='icons'>
                                <ShareOutlinedIcon />
                                <Typography className='menu-text'>Share</Typography>
                            </IconButton>

                            <IconButton className='icons'>
                                <MoreVertOutlinedIcon />
                            </IconButton>

                        </div>

                        <div className="section head">
                            <div className='profile'>
                                <Avatar className='photo-icon' src="/photo.svg" />
                                <div className='name' ><Typography className='head-name' variant='h6'>Om Khandade</Typography>
                                    <Typography className='subtitle'>GPA 10</Typography></div>
                            </div>
                            <Button className='follow-btn'><Typography className='btn-text'>Follow</Typography></Button>
                        </div>

                        <div className="section descript">
                            <Typography className='descript-head' variant='h5'>Description</Typography>
                            <Typography className='descript-content'>
                                Tristique posuere faucibus sed vel ut suspendisse. Pellentesque purus accumsan nisl platea odio metus. Egestas sit malesuada sit sit habitant. Odio ornare potenti neque diam urna id. Ultrices massa massa consequat habitant dui massa sapien et, morbi. Malesuada scelerisque non fermentum, velit ullamcorper vestibulum. Orci velit tortor ornare et urna arcu nisl. Ipsum neque nulla sed id venenatis.
                            </Typography>
                        </div>

                        <div className="section resource">
                            <Typography className='descript-head' variant='h5'>Resources</Typography>
                            <Card>
                                <img
                                    src="/resource-book.svg"
                                    alt=''
                                />
                                <CardContent>
                                    <Typography className='header' gutterBottom variant="body1" component="div">
                                        First Wheeler's Dental Anatomy, Physiology and Occlusion, 1st South Asia Edition
                                    </Typography>
                                    <CardActions>
                                        <Button className="buy-btn"><Typography className='buy-text'>Buy on amazon</Typography></Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </div>
                    </Drawer>
                </div>

            </div>
        </Container>
    )


}

const Container = styled.div`

.title{
    display: inline-flex;
    margin:20px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.215px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 43px;
    color: #000000;

    @media (max-width: 900px) {
        font-size: 15px;
        line-height: 30px;
      }
}

.drawer-container{
    display: flex;
    position: fixed;
    right: 0px;
    top: 0px;
    background: #FBFBFB;

    @media(max-width: 900px){ 
        width: 360px;
    }
}

.deActive{
    max-width: 42px;
    overflow:hidden;
    transition: max-width 0.5s ease-in-out;

    @media(max-width:900px){
        max-width: 30px;
        .open-btn{
            // height: 20px;
        }
    }
}


.active{
    max-width: 600px;
    transition: max-width 0.5s ease-in-out;
}

.open-btn{
    display: flex;
    height: 100vh;
}

.Main {
display: flex;
flex-direction: row;
justify-content: center;

img {
    max-width: 100%;
    height: auto;

    @media(max-width:500px){
        width: 350px;
    }
}
}

.activated{
    max-width: calc(100% - 600px);
    transition: max-width 1.5s ease-in-out;
}

.deactivated {
    max-width: 100%;
    transition: max-width 2.5s ease-in-out 1s;
}

`

const Drawer = styled.div`
display: flex;
flex-direction: column;
padding-inline: 20px 13px;
padding-block: 25px;
justify-content: space-between;
align-items: center;
width: 500px;
height: 94vh;

@media(max-width: 500px){
    width: 500px;
    height: 85vh;
    padding: 0px;

}


.section{
    display: flex;
    justify-content: space-between;
    width: 500px;

    @media(max-width: 500px){
        justify-content: start;
    }
}


.icons{
    color: #000000;
    padding-right: 30px;
}
.menu-text{
    padding: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 23.9496px;
    line-height: 27px;

    @media(max-width: 500px){
        font-size: 15px;
    }
}

.name{
    margin-inline: 15px;

    @media(max-width: 500px){
        margin-inline: 5px;

    }
}

.head{
    display: flex;

}


.profile{
    display:flex;
    justify-content: center;
    align-items: center;
}

.photo-icon{
width: 52.61px;
height: 52.61px;

flex: none;
order: 0;
flex-grow: 0;

@media(max-width: 500px){
    width: 40px;
    height: 40px;
}
}

.head-name{
width: 188.94px;
height: 31.93px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 27.451px;
line-height: 32px;
display: flex;
align-items: center;

color: #000000;

flex: none;
order: 0;
flex-grow: 0;

@media(max-width: 500px){
    font-size: 18px;
}
}

.subtitle {
width: 189.87px;
height: 27.45px;

font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 22.8758px;
line-height: 27px;
display: flex;
align-items: center;

color: #000000;

flex: none;
order: 1;
flex-grow: 0;

@media(max-width: 500px){
    font-size: 18px;
}
}

.follow-btn{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 13.3053px 31.9328px;
gap: 13.31px;

width: 119.87px;
height: 53.61px;

background: #098041;
border-radius: 133.053px;

flex: none;
order: 0;
flex-grow: 0;

:hover{
    background: #4faa53;
}

@media(max-width:500px){
    width: 100px;
    height: 40px;

    position: relative;
    left: -55px;
    top: 15px;
}

}

.btn-text{
width: 56px;
height: 27px;

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* or 143% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.1px;

color: #FFFFFF;

flex: none;
order: 0;
flex-grow: 0;
}

.descript {
    display: flex;
    position: relative;
    width: 300px;
    word-wrap: 
    overflow: hidden;
    height: 200px;
    right: 110px;
    flex-direction: column;
    position: relative;
}

.descript-head{
width: 167px;
height: 60px;

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 31.9328px;
line-height: 60px;

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.29937px;

color: #000000;

flex: none;
order: 0;
flex-grow: 0;

@media(max-width:500px){
    font-size: 20px;
}

}

.descript-content{
    width: 459.03px;
    height: 176px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18.6275px;
    line-height: 22px;
    display: flex;
    align-items: center;

    color: #000000;

    @media(max-width: 500px){
        height: 100px;
        font-size: 15px;
    }
}

.resource{
    flex-direction: column;
}
`

const Card = styled.div`
width: 357px;
display: inline-flex;
padding: 20px;
border: 1px solid #C4C4C4;
border-radius: 5px;

@media(max-width:500px){
    width: 270px;
}



img{
    width: 77px;
    height: 119.73px;
    padding-right: 16px; 
}

.buy-btn{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 8px 20px;
margin-left: 25px;
margin-top: 30px;
gap: 13.31px;

:hover{
    background: #ffb300;
}

background: #FF9900;
border-radius: 133.053px;
}

.buy-text{
width: 119px;
height: 27px;

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.1px;

color: #FFFFFF;

flex: none;
order: 0;
flex-grow: 0;
}
`
const CardContent = styled.div`
.header{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
}
`
const CardActions = styled.div`
display: flex;
align-items: center;
`