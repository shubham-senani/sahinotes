import styled from "styled-components"
import icon from "./searchIcon.svg"
function NavBar() {
  return (
    <Nav>
      <input type="search" id="site-search" name="q" />
      <button className="p_btn"><img src={icon} alt="" /></button>
    </Nav>
  )
}

export default NavBar

const Nav = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 140px;
background: #fbfbfb;


@media(max-width:900px){
  justify-content: end;
}

input {
    box-sizing: border-box;
    width: 40%;
    height: 45px;
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    padding: 10px;
    background: #ffffff;
    border: 1.04164px solid #e1e1e1;
    border-radius: 10.4164px;

    @media(max-width: 900px){
      height: 36px;
      width: 50%;
      margin-right: 0px;
      margin-top: 13px;
    }
  }
  
  .p_btn{
    background-color: green;
    position: relative;
    width: 54px;
    right: 32px;
    height: 46.3px;
    border: 1.04164px solid #e1e1e1;
    border-top-right-radius: 10.4164px;
    border-bottom-right-radius: 10.4164px;

    @media(max-width: 900px){
      height: 36px;
      width: 42px;
      margin-top: 12.5px;
    }
  }
  
  .p_btn img {
    position: relative;
  }
`