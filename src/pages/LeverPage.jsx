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

            {showArrowIcon && (
              <motion.img
                src={arrow}
                alt="arrow"
                className="arrow-icon1"
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
              />
            )}
          </>
        )}
        {step >= 2 && (
          <>
            <div className="lever-outer">
              {/* 받침대는 항상 고정 */}
              <img
                src={leverImg}
                alt="lever"
                className="lever-bg"
                style={{ left: 90, bottom: -78 }} // 필요시 미세조정
              />
              {/* 팔만 motion.div로 회전 */}
              <motion.div
                className="lever"
                animate={{
                  rotate: step === 2 ? (leverRotated ? 10 : -10) : 10,
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  zIndex: 2,
                }}
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
                  />
                )}
              </motion.div>
            </div>
          </>
        )}
      </Content>
    </Laboratory>
  );
};

export default LeverPage;

const ScalesText = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  text-align: center;
  padding: 8px;
  box-sizing: border-box;
  background: #c5d8f1;
  border-radius: 12px;
`;

const Content = styled.div`
  position: relative;
  height: 540px;
  display: flex;
  justify-content: center;
  align-items: center;

  .object-wrap {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
  .click-icon1 {
    width: 100px;
    position: absolute;
    left: 50%;
    bottom: -60px;
  }
  .arrow-icon1 {
    width: 50px;
    position: absolute;
    left: 55%;
    top: 50%;
  }
  .object {
    width: 100px;
    height: 100px;
    background: url(${objectImg}) center center no-repeat;
    background-size: contain;
    cursor: pointer;
  }
  .lever-outer {
    position: absolute;
    left: 50%;
    bottom: 60px;
    transform: translateX(-50%);
    width: 600px;
    height: 150px;
  }
  .lever-bg {
    position: absolute;
    left: 90px; /* 팔의 왼쪽에서 받침대까지 거리 */
    bottom: -78px;
    width: 97px;
    height: 90px;
    z-index: 1;
    pointer-events: none;
    /* 회전 transform 없음! */
  }
  .lever {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 600px;
    height: 150px;
    background: url(${leverArmImg}) no-repeat;
    background-size: contain;
    z-index: 2;
    /* motion.div에서만 rotate 적용 */
  }
`;
