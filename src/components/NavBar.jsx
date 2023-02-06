import React from "react";
import styled from "styled-components";
import logo from "../images/Logo1.png";
import Badge from "@mui/material/Badge";
import ShoppingCart from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100px;
  @media only screen and (max-width: 380px) {
  }
  @media only screen and (max-width: 480px) {
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 380px) {
    padding: 10px 0px;
    width: 100%;
  }
  @media only screen and (max-width: 480px) {
    padding: 10px 0px;
    width: 100%;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  align-items: center;
`;
const Logo = styled.h1`
  ${mobile({ marginLeft: "-60px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  ${mobile({ flex: 2, justifyContent: "center", marginLeft: "-225px" })}
  @media only screen and (max-width: 400) {
  }
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  @media only screen and (max-width: 380px) {
  }
`;

const Button = styled.button`
  color: black;
  margin-left: 30px;
  cursor: pointer;
`;

const NavBar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const refresh = () => window.location.reload(true);

  const logout = () => {
    localStorage.clear();
    refresh();
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to={"/"}>HOME</Link>
          <Link to={"/cart"}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCart />
              </Badge>
            </MenuItem>
          </Link>
        </Left>

        <Center>
          <Link to={"/"}>
            <Logo>
              <img src={logo} height="80px" alt="Logo" />
            </Logo>
          </Link>
        </Center>

        <Right>
          <Link to={"/register"}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to={"/login"}>
            <MenuItem>LOG IN</MenuItem>
          </Link>
          <Link to="/login">
            <Button onClick={logout}>Logout</Button>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
