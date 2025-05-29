import React, { useState } from "react";
import styled from "styled-components";
import click from "../assets/images/hand.png"
import { motion } from "framer-motion";
import Laboratory from "../components/Laboratory";
import objectSpringImg from "../assets/images/object-spring.png";
import objectImg from "../assets/images/object-hook.png";
import slopeImg from "../assets/images/slope.png";

const SlopePage = () => {
  const [step, setStep] = useState(1);
  const [weightNormal, setWeightNormal] = useState(0);
  const [weightInclined, setWeightInclined] = useState(0);
  const [objectMoved, setObjectMoved] = useState(false);
  const [showScales, setShowScales] = useState(true);

  const handleClick = () => {
    if (step === 1) {
      // Step1 클릭 시 물체 들어 올리고 저울 값 표시
      setObjectMoved(true);
      setTimeout(() => {
        setWeightNormal(240);
        setTimeout(() => {
          setStep(2);
          setObjectMoved(false);
        }, 1500);
      }, 1000);
    } else if (step === 2) {
      setObjectMoved(true);
      setTimeout(() => {
        setWeightInclined(120);
        setTimeout(() => {
          setStep(3);
          setObjectMoved(false);
          // setShowScales(false); // step 3에서는 저울 숨기기
        }, 1500);
      }, 1000);
    }
  };

  return (
    <Laboratory
      title="힘과 우리의 생활 - 탐구 3 &lt;빗면을 이용해 물건 들기&gt;"
      text={
        step === 3
          ? "빗면을 사용하면 물체를 들어 올리는데 더 적은 힘이 든다는 걸 알 수 있어요."
          : "물체를 위로 들어 올리면서 무게가 얼마인지 확인해 보세요."
      }
    >
      <ScalesText>
        <p>그냥 들어 올릴 때: {weightNormal}g</p>
        <p>빗면을 사용할 때: {weightInclined}g</p>
      </ScalesText>

      <Content>
        {showScales && (
          <div className="object-wrap">
            <motion.div
              className="object"
              animate={
                step === 1
                  ? objectMoved
                    ? { x: 0, y: -130, rotate: 0 }
                    : { x: 0, y: 0, rotate: 0 }
                  : step === 2
                  ? objectMoved
                    ? { x: 258, y: -194, rotate: 60 }
                    : { x: -142, y: 38, rotate: 60 }
                  : { x: 258, y: -194, rotate: 60 }
              }
              transition={{ duration: 2, ease: "easeInOut" }}
              onClick={handleClick}
            />
          </div>
        )}
        {showScales && <img src={click} alt="click" className="click-icon" />}
        {step >= 2 && <InclinedPlane />}
      </Content>
    </Laboratory>
  );
};

export default SlopePage;

const ScalesText = styled.div`
  width: 200px;
  margin: 40px auto;
  text-align: center;
  padding: 8px;
  background: #c5d8f1;
  border-radius: 12px;
`;

// slopeImg
const InclinedPlane = styled.div`
  position: relative;
  margin: 0 auto;
  z-index: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 15%;
  width: 480px;
  height: 278px;
  background: url(${slopeImg}) center center no-repeat;
  background-size: contain;
`;

const Content = styled.div`
  position: relative;
  height: 540px;
  
  .click-icon {
    width: 60px;
    position: absolute;
    left: 50%;
    bottom: 10%;
  }
  .object-wrap {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20%;
    z-index: 10;
  }
  .object {
    width: 104px;
    height: 258px;
    background: url(${objectSpringImg}) center no-repeat;
    /* background: url(${objectImg}) center no-repeat; */
    background-size: contain;
    cursor: pointer;
    /* step3에서는 objectSpringImg -> objectImg 로 변경 */
  }
`;