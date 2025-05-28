import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Laboratory from "../components/Laboratory";
import objectImg from "../assets/images/object.png";
import leverImg from "../assets/images/lever.png";
import leverArmImg from "../assets/images/lever_arm2.png";
import click from "../assets/images/hand.png";
import arrow from "../assets/images/arrow.png";

const LeverPage = () => {
  const [step, setStep] = useState(1);
  const [weightNormal, setWeightNormal] = useState(0);
  const [weightInclined, setWeightInclined] = useState(0);
  const [objectMoved, setObjectMoved] = useState(false);
  const [showScales, setShowScales] = useState(true);
  const [leverRotated, setLeverRotated] = useState(false);
  const [showClickIcon, setShowClickIcon] = useState(false);
  const [showArrowIcon, setShowArrowIcon] = useState(false);

  // step1에서 5초 이내 object 클릭 안하면 click 유도 아이콘 노출
  useEffect(() => {
    if (step === 1 && showScales) {
      const timer = setTimeout(() => {
        setShowClickIcon(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowClickIcon(false);
    }
  }, [step, showScales]);

  const handleClick = () => {
    if (step === 1) {
      setShowClickIcon(false); // 클릭 시 click 아이콘 숨김
      setShowArrowIcon(true); // 클릭 시 arrow 아이콘 노출
      setObjectMoved(true);
      setTimeout(() => {
        setWeightNormal(30);
        setTimeout(() => {
          setStep(2);
          setObjectMoved(false);
          setShowArrowIcon(false); // 이동 끝나면 arrow 아이콘 숨김
        }, 1500);
      }, 1000);
    } else if (step === 2) {
      setObjectMoved(true);
      setTimeout(() => {
        setWeightInclined(10);
        setTimeout(() => {
          setStep(3);
        }, 1500);
      }, 1000);
    }
  };

  const handleLeverClick = () => {
    if (!leverRotated) {
      setLeverRotated(true);
      setTimeout(() => {
        setStep(3);
        setLeverRotated(false);
      }, 1500);
    }
  };

  return (
    <Laboratory
      title="힘과 우리의 생활 - 탐구 2 &lt;지레를 이용해 물건 들기&gt;"
      text={
        step === 3
          ? "지레를 사용하면 물체를 들어 올리는데 더 적은 힘이 든다는 걸 알 수 있어요"
          : "물체를 위로 들어 올리는데 필요한 힘이 얼마인지 확인해 보세요."
      }
    >
      <ScalesText>
        <p>그냥 들어 올릴 때: {weightNormal}g</p>
        <p>지레를 사용할 때: {weightInclined}g</p>
      </ScalesText>

      <Content>
        {step === 1 && showScales && (
          <>
            <div className="object-wrap">
              <motion.div
                className="object"
                animate={
                  step === 1
                    ? objectMoved
                      ? { x: 0, y: -300, rotate: 0 }
                      : { x: 0, y: 0, rotate: 0 }
                    : step === 2
                    ? objectMoved
                      ? { x: 80, y: -70, rotate: 64 }
                      : { x: -160, y: 50, rotate: 64 }
                    : { x: 80, y: -70, rotate: 64 }
                }
                transition={{ duration: 2, ease: "easeInOut" }}
                onClick={handleClick}
              />
            </div>
            {/* 마우스 클릭유도, 좌우로 살짝 까딱까딱하는 애니메이션 */}
            {showClickIcon && (
              <motion.img
                src={click}
                alt="click"
                className="click-icon1"
                animate={{
                  scale: [1, 0.9, 1],
                  y: [0, 1, 0],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 2,
                  ease: "easeInOut",
                }}
              />
            )}

            {/* 아래에서 위로 올라오는 애니메이션 */}
            {showArrowIcon && (
              <motion.img
                src={arrow}
                alt="arrow"
                className="arrow-icon1"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
              />
            )}
          </>
        )}
        {step >= 2 && (
          <>
          <div className="lever-wrap">
            <motion.div
              className="lever"
              animate={{
                rotate: step === 2 ? (leverRotated ? 10 : -10) : 10,
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ position: "relative" }}
            >
              {/* 오른쪽 끝 클릭 영역 */}
              {step === 2 && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    width: 60,
                    height: 60,
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    zIndex: 2,
                  }}
                  onClick={handleLeverClick}
                >
                  {/* <img src={click} alt="click" style={{ width: 40 }} /> */}
                </div>
              )}
            </motion.div>
          </div>
          <img src={leverImg} alt="lever" className="lever-bg" />
          </>
        )}
      </Content>
    </Laboratory>
  );
};

export default LeverPage;

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
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  .object-wrap {
    position: absolute;
    left: 50%;
    bottom: 22%;
    transform: translateX(-50%);
  }
  .click-icon1 {
    width: 100px;
    position: absolute;
    left: 50%;
    top: 70%;
  }
  .arrow-icon1 {
    width: 50px;
    position: absolute;
    left: 52%;
    top: 20%;
  }
  .object {
    width: 100px;
    height: 100px;
    background: url(${objectImg}) center center no-repeat;
    background-size: contain;
    cursor: pointer;
  }
  .lever-wrap {
    position: absolute;
    bottom: 40%;
    left: 50%;
    transform: translateX(-50%);

    /* leverImg 는 rotate 영향받지않도록 */
    /* ::before {
      content: '';
      position: absolute;
      left: 30%;
      bottom: -90px;
      width: 100px;
      height: 100px;
      background: url(${leverImg}) no-repeat;
      background-size: contain;
    } */
  }
  .lever {
    width: 600px;
    height: 150px;
    background: url(${leverArmImg}) no-repeat;
    background-size: contain;
  }
  .lever-bg {
    width: 120px;
    height: 120px;
    position: absolute;
    top: 57%;
    left: 44%;
    z-index: -1;
  }
`;
