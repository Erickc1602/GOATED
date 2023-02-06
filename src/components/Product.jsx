import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { publicRequest } from "../requestServer";

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
    @media only screen and (max-width: 480px) {
    }
  }
`;

const Image = styled.img`
  height: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 55%;
  object-fit: cover;
  @media only screen and (max-width: 480px) {
    object-fit: cover;
  }
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
const Div = styled.div``;

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    publicRequest
      .get("/products/list/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      {products.map((product) => (
        <Container>
          <Div>
            <h1>{product.title}</h1>
            <h2>${product.price}</h2>
          </Div>
          <Image src={product.img} />
          <Info>
            <Icon>
              <Link to={`/product/${product._id}`}>
                <SearchOutlinedIcon />{" "}
              </Link>
            </Icon>
          </Info>
        </Container>
      ))}
    </>
  );
};

export default Product;
