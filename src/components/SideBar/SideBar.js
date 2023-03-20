import styled from "styled-components";
import logo from "./logo.svg"
export default function SideBar() {
  return (
    <Bar>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <button className="btn"><span className="btn-text">+ New note</span></button>
      <ul>
        <li>Home</li>
        <li>Saved Notes</li>
      </ul>
    </Bar>
  )
}


const Bar = styled.div`
display: inline-flex;
background: #FBFBFB;
padding: 30px;
height: 92vh;
flex-direction: column;
align-items: center;
transition: all 0.3s ease;

.logo {
    width: 118.62px;
    height: 35.42px;
    margin: 21px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 26.1186px;
    line-height: 31px;
    color: #000000;
    order: 0;
    flex-grow: 0;

    @media(max-width: 900px){
      margin-left: 60px;
      margin-right: 10px;
    }
  }

ul {
    list-style: none;
    padding: 0px 30px 30px 0px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
  }
  
  
li {
    margin: 17px 25px;
  }
  
  .btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10.7937px 25.9048px 10.7937px 17.2698px;
    margin: 20px;
    margin-top: 55px;
    width: 161px;
    height: 43.59px;
    border: none;
    background: #098041;
    border-radius: 107.937px;
  }
  
  .btn-text {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;
    color: #ffffff;
  }
`