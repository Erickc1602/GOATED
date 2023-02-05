import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/Logo1.png";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Sucess = () => {
  return (
    <>
      <Div>
        <img src={logo} alt="Logo"></img>
        <h1>PAYMENT COMPLETED!</h1>
        <p>Thank You For Shopping With Us</p>
        <Link to={"/"}>Return To Store!</Link>
      </Div>
    </>
  );
};

export default Sucess;
