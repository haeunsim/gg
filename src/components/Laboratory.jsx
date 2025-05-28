import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import desk from "../assets/images/bg-desk.png";

const Laboratory = ({ 
  title, 
  children, 
  text, 
  className 
}) => {
  const navigate = useNavigate();

  return (
    <Wrap className={className}>
      <Nav>
        <Item>
          <Badge>실험실</Badge>
          <p>{title}</p>
        </Item>
        <Button onClick={() => navigate("/select")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
          >
            <path
              d="M3.84153 10.1052L3.17174 10.775L2.50195 10.1052L3.17174 9.43545L3.84153 10.1052ZM19.9468 17.6842C19.9468 17.9354 19.847 18.1764 19.6693 18.3541C19.4917 18.5317 19.2507 18.6316 18.9994 18.6316C18.7482 18.6316 18.5072 18.5317 18.3295 18.3541C18.1519 18.1764 18.0521 17.9354 18.0521 17.6842H19.9468ZM7.90858 15.5119L3.17174 10.775L4.51132 9.43545L9.24816 14.1723L7.90858 15.5119ZM3.17174 9.43545L7.90858 4.69861L9.24816 6.03819L4.51132 10.775L3.17174 9.43545ZM3.84153 9.15787H13.3152V11.0526H3.84153V9.15787ZM19.9468 15.7895V17.6842H18.0521V15.7895H19.9468ZM13.3152 9.15787C15.074 9.15787 16.7608 9.85655 18.0044 11.1002C19.2481 12.3439 19.9468 14.0306 19.9468 15.7895H18.0521C18.0521 14.5332 17.553 13.3283 16.6647 12.44C15.7763 11.5517 14.5715 11.0526 13.3152 11.0526V9.15787Z"
              fill="white"
            />
          </svg>
          다른 활동 선택하기
        </Button>
      </Nav>

      <Main>
        {children}
      </Main>

      <Textwrap>
        {text}
      </Textwrap>

      <div className="bg-floor"></div>
    </Wrap>
  );
};

export default Laboratory;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.61) 0%,
    rgba(114, 208, 255, 0.61) 100%
  );
  box-sizing: border-box;
  overflow: hidden;

  .bg-floor {
    width: 100%;
    height: 350px;
    position: absolute;
    bottom: 80px;
    background: url(${desk}) center bottom no-repeat;
    z-index: 1;
    background-size: contain;
  }
`;

const Nav = styled.div`
  width: 100%;
  padding: 16px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(180deg, #fff -25%, #a8deff 342.95%);
  box-sizing: border-box;
`;

const Main = styled.div`
  position: relative;
  z-index: 1000 !important;
  width: 100%;
  height: 100%;
`;

const Item = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  p {
    color: #0c3554;
    font-size: 1.125rem;
  }
`;

const Button = styled.button`
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 14px;
  border-radius: 8px;
  background: #ff962c;
  box-shadow: 0px -2px 0px 0px #ff5c16 inset;
  color: #fff;

  svg {
    width: 14px;
  }
`;

const Badge = styled.div`
  border-radius: 26px;
  background: #0c3554;
  color: #fff;
  padding: 6px 12px;
`;

const Textwrap = styled.div`
  position: absolute;
  bottom: 18%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 60%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 100px;
  border: 2px solid #65a8e3;
  box-shadow: 0px 2px 0px 0px #428bcb;
  z-index: 100;
  color: #236daf;
  font-size: 1.125rem;
`;