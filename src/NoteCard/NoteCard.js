import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

export default function NoteCard(props) {
    return (
        <Cont>

            {props.arr.map(element =>
                <Link to="/page" className='link'>
                    <Card>
                        <img
                            src="/page.svg"
                        />
                        <div className='badge'><p className='text'> {element.pages} </p></div>
                        <CardContent>
                            <Typography className='header' gutterBottom variant="body1" component="div">
                                {element.title}
                            </Typography>
                            {element.isSave ? 
                                <CardActions>
                                    <Typography color="textSecondary" variant='subtitle2'>{element.views}K views</Typography>
                                    <img className='dot_img' src="/dot.svg" alt="" />
                                    <Typography color="textSecondary" variant='subtitle2'>{element.time} days ago</Typography>
                                </CardActions>: <div>In Draf</div>
                            }
                        </CardContent>
                        {element.isSave&&<img className='vector' src="/vector.svg" alt="" />}
                    </Card>
                </Link>
            )}

        </Cont>
    )
}

const Cont = styled.div`
.link{
    text-decoration:none;
}
`

const Card = styled.div`
width: 357px;
display: inline-flex;
padding: 15px;
margin: 15px;
border: 1px solid #C4C4C4;
border-radius: 5px;

@media(max-width: 900px){
    width: 333px;
}

img{
    width: 77px;
    height: 119.73px;
    padding-right: 16px; 
}

.badge {
    position: relative;
    right: 33px;
    top: 98px;
    bottom: 0;
    
    width: 14px;
    height: 14px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 3.5px;
    padding: 2px 3px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.text{
    position: absolute;
    width: 9px;
    height: 9px;
    padding: 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 7.7px;
    line-height: 9px;
    color: #FFFFFF;
}

.vector{
    position: relative;
    top: 120px;
    left: 25px;

   width:10px;
   height: 10px 
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
.dot_img{
    margin: 0 20px;
    padding: 0;
    height: 30px;
    width: 7px
}
`