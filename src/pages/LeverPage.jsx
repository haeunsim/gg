import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import click from "../assets/images/left-click.png";
import { motion } from "framer-motion";

const LeverPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [weightNormal, setWeightNormal] = useState(0);
  const [weightInclined, setWeightInclined] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [objectMoved, setObjectMoved] = useState(false);
  const [showScales, setShowScales] = useState(true);

  const handleClick = () => {
    if (step === 1) {
      // Step1 클릭 시 물체 들어 올리고 저울 값 표시
      setObjectMoved(true);
      setTimeout(() => {
        setWeightNormal(30);
        setTimeout(() => {
          setStep(2);
          setObjectMoved(false);
        }, 1500);
      }, 1000);
    } else if (step === 2) {
      setObjectMoved(true);
      setTimeout(() => {
        setWeightInclined(10);
        setTimeout(() => {
          setStep(3);
          // setObjectMoved(false);
        }, 1500);
      }, 1000);
    }
  };

  return (
    <Wrap>
      <Flex>
        <Item>
          <Badge>실험실</Badge>
          <p>힘과 우리의 생활 - 탐구 2 &lt;지레를 이용해 물건 들기&gt;</p>
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
      </Flex>

      <ScalesText>
        <p>그냥 들어 올릴 때: {weightNormal}g</p>
        <p>지레를 사용할 때: {weightInclined}g</p>
        {/* 변수명 지레로 수정 */}
      </ScalesText>

      <Content>
        {step === 1 && showScales && (
          <motion.div
            style={{
              width: 100,
              height: 100,
              background: "#999",
              borderRadius: 6,
              position: "absolute",
              zIndex: 1,
              cursor: "pointer",
              left: "50%",
              bottom: "30%",
            }}
            animate={
              step === 1
                ? objectMoved
                  ? { x: 0, y: -130, rotate: 0 }
                  : { x: 0, y: 0, rotate: 0 }
                : step === 2
                ? objectMoved
                  ? { x: 80, y: -70, rotate: 64 }
                  : { x: -160, y: 50, rotate: 64 }
                : { x: 80, y: -70, rotate: 64 }
            }
            transition={{ duration: 1, ease: "easeInOut" }}
            onClick={handleClick}
          />
        )}
        {showScales && <img src={click} alt="click" className="click-icon" />}
        {step === 2 && (
          <motion.div
            className="lever"
            animate={{
              rotate: step === 1 ? -20 : 0,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        )}
      </Content>

      <Textwrap>
        {step === 3
          ? "지레를 사용하면 물체를 들어 올리는데 더 적은 힘이 든다는 걸 알 수 있어요"
          : "물체를 위로 들어 올리는데 필요한 힘이 얼마인지 확인해 보세요."}
      </Textwrap>
    </Wrap>
  );
};

export default LeverPage;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.61) 0%,
    rgba(114, 208, 255, 0.61) 100%
  );
  box-sizing: border-box;
  overflow: hidden;
`;
const Flex = styled.div`
  width: 100%;
  padding: 16px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(180deg, #fff -25%, #a8deff 342.95%);
  box-sizing: border-box;
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
  background: #fff;
  border-radius: 100px;
  border: 2px solid #65a8e3;
  box-shadow: 0px 2px 0px 0px #428bcb;
  padding: 10px;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
  color: #236daf;
  font-size: 1rem;
`;
const ScalesText = styled.div`
  width: 200px;
  margin: 40px auto;
  text-align: center;
  padding: 8px;
  background: #c5d8f1;
  border-radius: 12px;
`;
const Content = styled.div`
  position: relative;
  height: 420px;
  
  .lever {
    position: absolute;
    bottom: 30%;
    left: 32%;
    width: 500px;
    height: 20px;
    margin: 0 auto;
    background: #838383;
    border-radius: 6px;
  }
  .click-icon {
    width: 60px;
    position: absolute;
    left: 50%;
  }
`;
