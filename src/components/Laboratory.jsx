import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import desk from "../assets/images/bg-desk.png";
import { motion } from "framer-motion";

const Laboratory = ({ title, children, text, isComplete, className }) => {
  const navigate = useNavigate();

  return (
    <Wrap className={className}>
      <Nav>
        <Item>
          <Badge>실험실</Badge>
          <p>{title}</p>
        </Item>
      </Nav>

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

      <Main>{children}</Main>

      {!isComplete && (
        <Text>
          <p>{text}</p>
        </Text>
      )}

      {isComplete && (
        <ResultText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
            <circle cx="35" cy="35" r="35" fill="white"/>
            <path d="M21 38.6552L29.1441 47L52 25" stroke="#34C9FF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p>{text}</p>
        </ResultText>
      )}

      <div className="bg-floor"></div>
    </Wrap>
  );
};

export default Laboratory;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  /* background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.61) 0%,
    rgba(114, 208, 255, 0.61) 100%
  ); */
  background: linear-gradient(0deg, #E0EFFF 23.62%, #4197D8 178.01%);
  box-sizing: border-box;
  overflow: hidden;

  .bg-floor {
    width: 100%;
    height: 350px;
    position: absolute;
    bottom: 0;
    background: url(${desk}) center bottom no-repeat;
    z-index: 1;
    background-size: cover;
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
    font-size: 1.4rem;
  }
`;

const Button = styled.button`
  width: 210px;
  height: 56px;
  position: absolute;
  top: 110px;
  right: 80px;
  display: flex;
  /* padding: 1rem; */
  justify-content: center;
  align-items: center;
  gap: 14px;
  border-radius: 8px;
  background: #ff962c;
  box-shadow: 0px -2px 0px 0px #ff5c16 inset;
  color: #fff;
  font-size: 1.2rem;
  z-index: 100000 !important;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  
  &:hover {
    background: #ffa94d;
    cursor: pointer;
  }
`;

const Badge = styled.div`
  border-radius: 26px;
  background: #0c3554;
  color: #fff;
  padding: 6px 20px;
  font-size: 1.4rem;
`;

const Text = styled.div`
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 100;
  width: 90%;

  * {
    font-family: "HakgyoansimDunggeunmisoTTF-R" !important;
  }

  p {
    color: #0c3554;
    font-size: 2rem;
  }
`;
const ResultText = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 200px;
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  background: linear-gradient(90deg, rgba(186, 225, 255, 0.00) 0%, #89E3FF 50%, rgba(186, 225, 255, 0.00) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  * {
    font-family: "HakgyoansimDunggeunmisoTTF-R" !important;
  }

  svg {
    position: absolute;
    top: -16%;
  }
  p {
    color: #0C3554;
    font-size: clamp(1.8rem, 4vw, 3rem);
    font-weight: 400;
  }
`