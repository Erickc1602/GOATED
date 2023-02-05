import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import tshirt from "../images/Meu_projeto-1__1_-removebg-preview.png";
import { Link } from "react-router-dom";
import hoodie from "../images/Design_sem_nome-removebg-preview.png";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.7s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  background-color: #f8f8ff;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 55%;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f8f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #f8f8ff;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <>
      <Container>
        <Image src={tshirt} />
        <Info>
          <Icon>
            <Link to={"/product/63d6c93de45d6e4ba774c357"}>
              <SearchOutlinedIcon />{" "}
            </Link>
          </Icon>
        </Info>
      </Container>
      <Container>
        <Image src={hoodie} />
        <Info>
          <Icon>
            <Link to={"/product/63d6c9bfe45d6e4ba774c359"}>
              <SearchOutlinedIcon />{" "}
            </Link>
          </Icon>
        </Info>
      </Container>
    </>
  );
};

export default Product;
