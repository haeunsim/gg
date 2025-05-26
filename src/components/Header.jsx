import React from "react";
import logo from "../assets/images/logo.png";
import styled from "styled-components";

const Header = () => {
  return (
    <Head>
      <img src={logo} alt="logo" />
    </Head>
  );
};

export default Header;

const Head = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.2rem 0;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  
  img {
    width: 15rem;
  }
`;
