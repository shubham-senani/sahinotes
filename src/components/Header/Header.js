import styled from "styled-components"
import { useState } from "react";
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import { Tabs, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
    const [value, setTo] = useState("");
    const handleChange = (event, newValue) => {
        setTo(newValue); 
    };
    return (
        <Container>
            <div className="profile">
                <div className="tag">
                    <Icon><Typography className="icon-text">OK</Typography></Icon>
                    <div className="subtag"><Typography variant="h6">Om khandade</Typography>
                        <Typography className="subtitle" color="textSecondary">248 subscribers</Typography>
                    </div>

                </div>
                <Button className="btn" variant="contained">SUBSCRIBE</Button>
            </div>

            <Bar>
                <Tabs
                    value={value}
                    onChange={handleChange}
                >
                    <Tab className="txt notes" value="note" to="note" label="Notes"   component={Link}/>
                    <Tab className="txt notelist" value="notelist" to="notelist" label="Noteslists"  component={Link}/> 
                    <Tab className="txt about" value="about" to="about" label="About"  component={Link}/>
                </Tabs>
            </Bar>

        </Container>
    )
}

export default Header

const Container = styled.div`
display: flex;
flex-direction: column;
height: 182px;
margin:0;
background: #F7F7F7;
justify-content: center;


.profile{
    margin: 33px 37px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 900px){
        margin: 20px;
    }
}

.tag{
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
margin: 0;
gap: 16px;
width: 219px;
height: 75px;

@media(max-width: 500px){
    // width: 150px;
}
}

.subtag{
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0px;
width: 128px;
height: 60px;

@media(max-width:500px){
    height: 45px;
    width: 100px;
}

}

h6{
    width: 128px;
    height: 32px;
    margin: 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
    letter-spacing: 0.15px;

    @media(max-width:500px){
        font-size: 17px;
    }
}

.subtitle {
margin: 0;
width: 115px;
height: 28px;

font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 175%;

letter-spacing: 0.15px;
text-decoration-line: underline;
color: #eeeee;

@media(max-width: 500px){
    font-size: 12px;
    margin-left: 5px;
}


}

.btn {
    position: relative;
    margin-top:  15px;
    margin-right: 50px;
    width: 127px;
    height: 40px;
    text-transform: uppercase;
    background: #6FCF97;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 26px;
    color: #000000;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
    border-radius: 4px;

    :hover{
        background: #6FCF99;
    }

    @media(max-width: 900px){
        margin-right: 0px;
        margin-top: 5px;

        width: 107px;
    }
}
`
const Icon = styled.div`
border-radius: 50%;
background-color: #6FCF97;

display: flex;
justify-content: center;
align-items: center;
text-align: center;
letter-spacing: 0.14px;

color: #FFFFFF;

@media(max-width: 500px){
    width: 55px;
    height: 55px;
}

.icon-text{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 65px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
}
`
const Bar = styled.div`
position: relative;
top: -7px;

@media(max-width: 500px){
    top: 9px;
    right: 5px;
}

.txt{
    text-transform: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;

    @media(max-width: 500px){
        font-size: 16px;
    }

}
`