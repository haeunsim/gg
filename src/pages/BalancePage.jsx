import React, { useState, useEffect } from "react";
import styled from "styled-components";
import woodImg from "../assets/images/wood.png";
import ironImg from "../assets/images/iron.png";
import balanceImg from "../assets/images/balance.png";
import balanceScaleImg from "../assets/images/balance_scale.png";
import balanceArmImg from "../assets/images/balance_arm.png";
import { motion } from "framer-motion";
import Laboratory from "../components/Laboratory";
import useExperimentStore from "../store/experimentStore";

const typingTextQ = "Q. 물체를 양팔저울 위에 올려 무게를 비교해 보세요.";
const typingTextA = "나무조각보다 철조각이 더 무겁다는 것을 알 수 있어요.";

const WOOD_WEIGHT = 30;
const IRON_WEIGHT = 100;

const BalancePage = () => {
  const [leftItem, setLeftItem] = useState(null);
  const [rightItem, setRightItem] = useState(null);
  const [draggingItem, setDraggingItem] = useState(null);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clickedItem, setClickedItem] = useState(null);
  const setBalanceComplete = useExperimentStore((state) => state.setBalanceComplete);
  const [tempTilt, setTempTilt] = useState(null);

  const handleDrop = (side, item) => {
    if (side === "left") setLeftItem(item);
    else setRightItem(item);
    setClickedItem(null);

  };

  const getTilt = () => {
    if (tempTilt) return tempTilt;
    if (!leftItem && !rightItem) return { side: "none", angle: 0 };
    if (leftItem && rightItem) {
      // 무게 비율에 따라 각도 계산
      const leftWeight = leftItem === "wood" ? WOOD_WEIGHT : leftItem === "iron" ? IRON_WEIGHT : 0;
      const rightWeight = rightItem === "wood" ? WOOD_WEIGHT : rightItem === "iron" ? IRON_WEIGHT : 0;
      if (leftWeight === rightWeight) return { side: "none", angle: 0 };
      const MAX_ANGLE = 10;
      const total = leftWeight + rightWeight;
      const diff = Math.abs(leftWeight - rightWeight);
      const angle = Math.round((diff / total) * MAX_ANGLE * 10) / 10;
      if (leftWeight > rightWeight) return { side: "left", angle };
      if (rightWeight > leftWeight) return { side: "right", angle };
      return { side: "none", angle: 0 };
    }
    if (leftItem) return { side: "left", angle: 10 };
    if (rightItem) return { side: "right", angle: 10 };
    return { side: "none", angle: 0 };
  };

  const isComplete = leftItem && rightItem;

  // 실험 완료 상태 업데이트
  useEffect(() => {
    if (isComplete) {
      handleExperimentComplete();
    }
  }, [isComplete]);

  // 마우스 이동 이벤트 핸들러
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (clickedItem) {
        setDragPosition({ 
          x: e.clientX - 45,
          y: e.clientY - 45
        });
      }
    };

    const handleMouseUp = () => {
      if (clickedItem) {
        const leftPan = document.querySelector('.left');
        const rightPan = document.querySelector('.right');
        
        if (leftPan && isPointInElement(mousePosition, leftPan)) {
          handleDrop("left", clickedItem);
        } else if (rightPan && isPointInElement(mousePosition, rightPan)) {
          handleDrop("right", clickedItem);
        }
        
        setClickedItem(null);
        setDragPosition({ x: 0, y: 0 });
      }
    };

    const isPointInElement = (point, element) => {
      const rect = element.getBoundingClientRect();
      return (
        point.x >= rect.left &&
        point.x <= rect.right &&
        point.y >= rect.top &&
        point.y <= rect.bottom
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [clickedItem, mousePosition]);

  const handleExperimentComplete = () => {
    setBalanceComplete(true);
  };

  return (
    <Laboratory 
      title="힘과 우리의 생활 - 탐구 1 &lt;양팔저울로 무게 비교하기&gt;"
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
          {isComplete ? typingTextA : typingTextQ}
        </motion.span>
      }
      isComplete={isComplete}
    >

      <ScaleContainer>
        <img src={balanceImg} alt="양팔저울" className="balance" />
        <BalanceArm tilt={getTilt()}>
          <Pan className="left" tilt={getTilt()}>
            {leftItem && <Img src={leftItem === "wood" ? woodImg : ironImg} />}
          </Pan>
          <img src={balanceArmImg} alt="저울대" className="balance_arm" />
          <Pan className="right" tilt={getTilt()}>
            {rightItem && <Img src={rightItem === "wood" ? woodImg : ironImg} />}
          </Pan>
        </BalanceArm>
      </ScaleContainer>

      <Objects>
        {!(leftItem === "wood" || rightItem === "wood") && (
          <DraggableImg
            src={woodImg}
            position="left"
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("item", "wood");
              setDraggingItem("wood");
              const img = new Image();
              img.src = "";
              e.dataTransfer.setDragImage(img, 0, 0);
            }}
            onDrag={(e) => {
              setDragPosition({ x: e.clientX, y: e.clientY });
            }}
            onDragEnd={() => {
              setDraggingItem(null);
            }}
            onMouseDown={(e) => {
              setClickedItem("wood");
              setDragPosition({
                x: e.clientX - 45,
                y: e.clientY - 45
              });
            }}
            style={{
              position: clickedItem === "wood" ? "fixed" : "absolute",
              left: clickedItem === "wood" ? dragPosition.x : "calc(50% - 174px)",
              top: clickedItem === "wood" ? dragPosition.y : "50%",
              zIndex: clickedItem === "wood" ? 1000 : "auto",
              pointerEvents: clickedItem === "wood" ? "none" : "auto",
              transform: clickedItem === "wood" ? "translate(-50%, -50%)" : "translateY(-50%)"
            }}
          />
        )}

        {!(leftItem === "iron" || rightItem === "iron") && (
          <DraggableImg
            src={ironImg}
            position="right"
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("item", "iron");
              setDraggingItem("iron");
              const img = new Image();
              img.src = "";
              e.dataTransfer.setDragImage(img, 0, 0);
            }}
            onDrag={(e) => {
              setDragPosition({ x: e.clientX, y: e.clientY });
            }}
            onDragEnd={() => {
              setDraggingItem(null);
            }}
            onMouseDown={(e) => {
              setClickedItem("iron");
              setDragPosition({
                x: e.clientX - 45,
                y: e.clientY - 45
              });
            }}
            style={{
              position: clickedItem === "iron" ? "fixed" : "absolute",
              left: clickedItem === "iron" ? dragPosition.x : "calc(50% + 50px)",
              top: clickedItem === "iron" ? dragPosition.y : "50%",
              zIndex: clickedItem === "iron" ? 1000 : "auto",
              pointerEvents: clickedItem === "iron" ? "none" : "auto",
              transform: clickedItem === "iron" ? "translate(-50%, -50%)" : "translateY(-50%)"
            }}
          />
        )}
      </Objects>
    </Laboratory>
  );
};

export default BalancePage;

const ScaleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 155px;
  height: 450px;
  z-index: 100 !important;
  position: relative;

  .balance {
    height: 404px;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, 0);
    z-index: 10;
  }
  .balance_arm {
    width: 367px;
    z-index: -2;
  }
`;

const BalanceArm = styled.div`
  position: relative;
  width: 367px;
  height: 40px;
  transform-origin: 50% 50%; // 저울대 중심에서 회전
  transform: ${({ tilt }) => {
    if (!tilt || tilt.side === "none") return "rotate(0deg)";
    if (tilt.side === "left") return `rotate(-${tilt.angle}deg)`;
    if (tilt.side === "right") return `rotate(${tilt.angle}deg)`;
    return "rotate(0deg)";
  }};
  transition: transform 0.5s ease;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 25px;
`;

const Pan = styled.div`
  width: 169px;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${balanceScaleImg}) center no-repeat;
  background-size: contain;
  position: absolute;
  top: 23px;
  left: ${({ className }) => className === "left" ? "-75px" : "auto"};
  right: ${({ className }) => className === "right" ? "-75px" : "auto"};
  // Pan은 BalanceArm의 기울기를 상쇄하여 수평을 유지
  transform: ${({ tilt, className }) => {
    if (!tilt || tilt.side === "none") return "rotate(0deg)";
    if (tilt.side === "left") return `rotate(${tilt.angle}deg)`;
    if (tilt.side === "right") return `rotate(-${tilt.angle}deg)`;
    return "rotate(0deg)";
  }};
  transition: transform 0.5s;
  z-index: 10;
  transform-origin: 50% 0%; // Pan의 상단 중심에서 회전 (매달린 지점)
`;

const Objects = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1000;
  position: relative;
  width: 100%;
  height: 100px;
`;

const DraggableImg = styled.img`
  width: 124px;
  cursor: grab;
  z-index: -100;
  position: absolute;
  left: ${props => props.position === 'left' ? 'calc(50% - 174px)' : 'calc(50% + 50px)'};
  top: 50%;
  transform: translateY(-50%);
`;

const Img = styled.img`
  width: 124px;
  z-index: -10;
`;
