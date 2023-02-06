import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import NavBar from "../components/NavBar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://www.linkpicture.com/q/Logo1_5.png") center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: gray;
  border-radius: 20px;
  ${mobile({ width: "75%" })};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
`;

const Button = styled.button`
  width: 30%;
  border: none;
  padding: 8px 10px;
  color: black;
  background-color: #f8f8ff;
  cursor: pointer;
  font-weight: 600px;
  border-radius: 5px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    try {
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <NavBar />
      <Container>
        <Wrapper>
          <Title>Sign In</Title>
          <Form>
            <Input
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button onClick={handleClick} disabled={isFetching}>
              LOGIN
            </Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
