import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
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
  const [isComplete, setIsComplete] = useState(false);

  const normalWeightMotion = useMotionValue(0);
  const normalWeight = useTransform(normalWeightMotion, (latest) => {
    if (latest >= 100) {
      return Math.round(latest / 10) * 10;
    }
    return Math.round(latest);
  });

  const inclinedWeightMotion = useMotionValue(0);
  const inclinedWeight = useTransform(inclinedWeightMotion, (latest) => {
    if (latest >= 100) {
      return Math.round(latest / 10) * 10;
    }
    return Math.round(latest);
  });

  useEffect(() => {
    if (step === 1 && showScales) {
      setShowClickIcon(true);
    } else {
      setShowClickIcon(false);
    }
  }, [step, showScales]);

  const handleClick = () => {
    if (step === 1) {
      setShowClickIcon(false);
      setShowArrowIcon(true);
      setObjectMoved(true);
      setTimeout(() => {
        animate(normalWeightMotion, 30, { duration: 1.5 });
        setWeightNormal(30);
        setTimeout(() => {
          setStep(2);
          setObjectMoved(false);
          setShowArrowIcon(false);
        }, 1500);
      }, 1000);
    } else if (step === 2) {
      setObjectMoved(true);
      setTimeout(() => {
        animate(inclinedWeightMotion, 10, { duration: 1.5 });
        setWeightInclined(10);
        setTimeout(() => {
          setStep(3);
          setIsComplete(true);
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
        setIsComplete(true);
      }, 1500);
    }
  };

  return (
    <Laboratory
      title="힘과 우리의 생활 - 탐구 2 &lt;지레를 이용해 물건 들기&gt;"
      text={
        <motion.span
          key={isComplete ? 'answer' : 'question'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 2,
            ease: "easeIn"
          }}
          style={{ 
            whiteSpace: "pre-line",
            display: "inline-block"
          }}
        >
          {isComplete 
            ? "지레를 사용하면 물체를 들어 올리는데 더 적은 힘이 든다는 걸 알 수 있어요"
            : "물체를 위로 들어 올리는데 필요한 힘이 얼마인지 확인해 보세요."
          }
        </motion.span>
      }
      isComplete={isComplete}
    >
      <ScalesText>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
        >
          <circle cx="22" cy="22" r="22" fill="#255D8F" />
          <path
            d="M19.6191 15.9102H23.3809V35H19.6191V15.9102ZM21.5176 12.957C21.0957 12.957 20.6973 12.8574 20.3223 12.6582C19.959 12.459 19.666 12.1895 19.4434 11.8496C19.2324 11.5098 19.127 11.1406 19.127 10.7422C19.127 10.3438 19.2324 9.97461 19.4434 9.63477C19.666 9.29492 19.959 9.02539 20.3223 8.82617C20.6973 8.62695 21.0957 8.52734 21.5176 8.52734C21.9395 8.52734 22.3262 8.62695 22.6777 8.82617C23.041 9.02539 23.3281 9.29492 23.5391 9.63477C23.7617 9.97461 23.873 10.3438 23.873 10.7422C23.873 11.1406 23.7617 11.5098 23.5391 11.8496C23.3281 12.1895 23.041 12.459 22.6777 12.6582C22.3262 12.8574 21.9395 12.957 21.5176 12.957Z"
            fill="white"
          />
        </svg>

        <p>그냥 들어 올릴 때: <motion.span>{normalWeight}</motion.span>g</p>
        <p>지레를 사용할 때: <motion.span>{inclinedWeight}</motion.span>g</p>
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
                onClick={handleClick}
              />
            )}

            {showArrowIcon && (
              <motion.img
                src={arrow}
                alt="arrow"
                className="arrow-icon1"
                initial={{ opacity: 0, y: 300 }}
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

              {/* step2에서만 보이는 클릭/화살표 아이콘 */}
              {step === 2 && (
                <>
                  <motion.img
                    src={click}
                    alt="click"
                    className="click-icon2"
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
                  <motion.img
                    src={arrow}
                    alt="arrow"
                    className="arrow-icon2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                  />
                  <motion.img
                    src={arrow}
                    alt="arrow"
                    className="arrow-icon3"
                    initial={{ opacity: 0, y: 30, rotate:180 }}
                    animate={{ opacity: 1, y: 0, rotate: 180 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                  />
                </>
              )}
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
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #5596cf;
  background: #e9f5ff;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -20px;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 20px solid #e9f5ff;
    z-index: 2;
  }
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -22px;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-top: 22px solid #5596cf;
    z-index: 1;
  }

  svg {
    position: absolute;
    top: -18px;
    left: -18px;
  }

  p {
    color: #0c3554;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.6rem;
  }

  span {
    display: inline-block;
    width: 40px;
    margin-right: 4px;
  }
`;

const Content = styled.div`
  position: relative;
  margin-top: 40px;
  height: 600px;
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
    left: 51%;
    bottom: -60px;
    cursor: pointer;
  }
  .arrow-icon1 {
    width: 60px;
    position: absolute;
    left: 55%;
    top: 35%;
    z-index: -1;
  }
  .object {
    width: 130px;
    height: 130px;
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
    left: 200px;
    bottom: -80px;
    width: 97px;
    height: 90px;
    z-index: 1;
    pointer-events: none;
  }
  .lever {
    position: absolute;
    left: -200px;
    bottom: 0;
    width: 600px;
    height: 150px;
    background: url(${leverArmImg}) no-repeat;
    background-size: contain;
    z-index: 2;
    transform-origin: 200px 100px;
  }
  .click-icon2 {
    width: 100px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 3;
    cursor: pointer;
  }
  .arrow-icon2 {
    width: 60px;
    position: absolute;
    left: 60px;
    top: 10px;
    z-index: 3;
  }
  .arrow-icon3 {
    width: 60px;
    position: absolute;
    /* left: 420px; */
    right: 60px;
    top: 60px;
    z-index: 3;
  }
`;
