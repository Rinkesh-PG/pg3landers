import React from "react";
import { Container } from "@mui/material";
import { Axios } from "axios";

const Home = () => {
  return (
    <Container maxWidth="sm">
      <h1>Home Page!</h1>
      <a href="/wallet">Connect Wallet</a>
    </Container>
  );
};

export default Home;
