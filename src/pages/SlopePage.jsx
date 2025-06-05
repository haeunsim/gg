import React, { useEffect, useState } from "react";
import styled from "styled-components";
import click from "../assets/images/hand.png";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Laboratory from "../components/Laboratory";
import objectSpringImg from "../assets/images/object-spring.png";
import objectImg from "../assets/images/object-hook.png";
import slopeImg from "../assets/images/slope.png";
import arrow from "../assets/images/arrow.png";
import useExperimentStore from "../store/experimentStore";

const SlopePage = () => {
  const [step, setStep] = useState(1);
  const [weightNormal, setWeightNormal] = useState(0);
  const [weightInclined, setWeightInclined] = useState(0);
  const [objectMoved, setObjectMoved] = useState(false);
  const [showScales, setShowScales] = useState(true);
  const [showClickIcon, setShowClickIcon] = useState(false);
  const [showArrowIcon, setShowArrowIcon] = useState(false);
  const [showClickIcon2, setShowClickIcon2] = useState(false);
  const [showArrowIcon2, setShowArrowIcon2] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const setSlopeComplete = useExperimentStore((state) => state.setSlopeComplete);

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

    if (step === 2 && showScales) {
      setShowClickIcon2(true);
    } else {
      setShowClickIcon2(false);
    }
  }, [step, showScales]);

  const handleClick = () => {
    if (step === 1) {
      setShowClickIcon(false);
      setObjectMoved(true);
      setShowArrowIcon(true);
      setTimeout(() => {
        animate(normalWeightMotion, 240, { duration: 1.5 });
        setWeightNormal(240);
        setTimeout(() => {
          setStep(2);
          setObjectMoved(false);
          setShowArrowIcon(false);
        }, 1500);
      }, 1000);
    } else if (step === 2) {
      setShowClickIcon2(false);
      setObjectMoved(true);
      setShowArrowIcon2(true);
      setTimeout(() => {
        animate(inclinedWeightMotion, 120, { duration: 1.5 });
        setWeightInclined(120);
        setTimeout(() => {
          setStep(3);
          setObjectMoved(false);
          setShowArrowIcon2(false);
          setIsComplete(true);
          setSlopeComplete(true);
        }, 1500);
      }, 1000);
    }
  };

  return (
    <Laboratory
      title="힘과 우리의 생활 - 탐구 3 &lt;빗면을 이용해 물건 들기&gt;"
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
            ? "빗면을 사용하면 물체를 들어 올리는데 더 적은 힘이 든다는 걸 알 수 있어요."
            : "물체를 위로 들어 올리면서 무게가 얼마인지 확인해 보세요."
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
        <p>빗면을 사용할 때: <motion.span>{inclinedWeight}</motion.span>g</p>
      </ScalesText>

      <Content step={step}>
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
                    : { x: -128, y: 30, rotate: 60 }
                  : { x: 258, y: -194, rotate: 60 }
              }
              transition={step === 2 && !objectMoved ? { duration: 0 } : { duration: 2, ease: "easeInOut" }}
              onClick={handleClick}
            >
              <motion.div
                className="object-image"
                style={{ backgroundImage: `url(${objectSpringImg})` }}
                animate={{ opacity: step === 3 ? 0 : 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="object-image"
                style={{ backgroundImage: `url(${objectImg})` }}
                animate={{ opacity: step === 3 ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </div>
        )}

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
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          />
        )}

        {showClickIcon2 && (
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
            onClick={handleClick}
          />
        )}

        {showArrowIcon2 && (
          <motion.img
            src={arrow}
            alt="arrow"
            className="arrow-icon2"
            initial={{ opacity: 0, x: 0, y: 120, rotate: 60 }}
            animate={{ opacity: 1, x: 240, y: 0, rotate: 60 }}
            transition={{ duration: 2 }}
          />
        )}

        {step >= 2 && <InclinedPlane />}
      </Content>
    </Laboratory>
  );
};

export default SlopePage;

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
  z-index: 1004;

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
    line-height: 2.6rem;
  }

  span {
    display: inline-block;
    width: 40px;
    margin-right: 4px;
  }

  @media (max-width: 1280px) {
    width: 340px;
    svg {
      width: 34px;
      top: -16px;
      left: -16px;
    }
    p {
      font-size: 1.25rem;
      line-height: 2.2rem;
    }
  }
`;

// slopeImg
const InclinedPlane = styled.div`
  position: relative;
  margin: 0 auto;
  z-index: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -10px;
  width: 480px;
  height: 278px;
  background: url(${slopeImg}) center center no-repeat;
  background-size: contain;
  z-index: -10;
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
    transform: translateX(-50%);
    bottom: 0;
  }
  .object {
    width: 124px;
    height: 310px;
    position: relative;
    cursor: pointer;
  }
  .object-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
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
  .click-icon2 {
    width: 100px;
    position: absolute;
    left: 44%;
    bottom: 13%;
    cursor: pointer;
    transform: rotate(60deg);
  }
  .arrow-icon2 {
    width: 60px;
    position: absolute;
    left: 42%;
    bottom: 15%;
    z-index: 1;
  }
  @media (max-width: 1280px) {
    height: 540px;
  }
`;
