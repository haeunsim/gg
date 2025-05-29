import React, { useState, useEffect } from "react";
import styled from "styled-components";
import woodImg from "../assets/images/wood.png";
import ironImg from "../assets/images/iron.png";
import balanceImg from "../assets/images/balance.png";
import balanceScaleImg from "../assets/images/balance_scale.png";
import balanceArmImg from "../assets/images/balance_arm.png";
import { motion } from "framer-motion";
import Laboratory from "../components/Laboratory";

const typingTextQ = "Q. 물체를 양팔저울 위에 올려 무게를 비교해 보세요.";
const typingTextA = "나무조각보다 철조각이 더 무겁다는 것을 알 수 있어요.";

const BalancePage = () => {
  const [leftItem, setLeftItem] = useState(null);
  const [rightItem, setRightItem] = useState(null);
  const [draggingItem, setDraggingItem] = useState(null);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clickedItem, setClickedItem] = useState(null);

  const handleDrop = (side, item) => {
    if (side === "left") setLeftItem(item);
    else setRightItem(item);
    setClickedItem(null);
  };

  const getTilt = () => {
    if (!leftItem && !rightItem) return "none";
    if (leftItem && rightItem) {
      if (leftItem === "iron" && rightItem === "wood") return "left";
      if (leftItem === "wood" && rightItem === "iron") return "right";
      return "none";
    }
    if (leftItem) return "left";
    if (rightItem) return "right";
    return "none";
  };

  const isComplete = leftItem && rightItem;

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
    >
      <ScaleContainer>
        <img src={balanceImg} alt="양팔저울" className="balance" />
        <Scale tilt={getTilt()}>
          <Pan
            className="left"
            onDrop={(e) => handleDrop("left", e.dataTransfer.getData("item"))}
            onDragOver={(e) => e.preventDefault()}
          >
            {leftItem && <Img src={leftItem === "wood" ? woodImg : ironImg} />}
          </Pan>
          <img src={balanceArmImg} alt="양팔저울" className="balance_arm" />
          <Pan
            className="right"
            onDrop={(e) => handleDrop("right", e.dataTransfer.getData("item"))}
            onDragOver={(e) => e.preventDefault()}
          >
            {rightItem && (
              <Img src={rightItem === "wood" ? woodImg : ironImg} />
            )}
          </Pan>
        </Scale>
      </ScaleContainer>

      <Objects>
        {!(leftItem === "wood" || rightItem === "wood") && (
          <DraggableImg
            src={woodImg}
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
              position: clickedItem === "wood" ? "fixed" : "static",
              left: clickedItem === "wood" ? dragPosition.x : "auto",
              top: clickedItem === "wood" ? dragPosition.y : "auto",
              zIndex: clickedItem === "wood" ? 1000 : "auto",
              pointerEvents: clickedItem === "wood" ? "none" : "auto",
              transform: clickedItem === "wood" ? "translate(-50%, -50%)" : "none"
            }}
          />
        )}

        {!(leftItem === "iron" || rightItem === "iron") && (
          <DraggableImg
            src={ironImg}
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
              position: clickedItem === "iron" ? "fixed" : "static",
              left: clickedItem === "iron" ? dragPosition.x : "auto",
              top: clickedItem === "iron" ? dragPosition.y : "auto",
              zIndex: clickedItem === "iron" ? 1000 : "auto",
              pointerEvents: clickedItem === "iron" ? "none" : "auto",
              transform: clickedItem === "iron" ? "translate(-50%, -50%)" : "none"
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
  margin-top: 150px;
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

const Scale = styled.div`
  display: flex;
  align-items: start;
  padding-top: 56px;
  z-index: 0;
  transform-origin: 50% 100px;
  transform: ${({ tilt }) =>
    tilt === "left"
      ? "rotate(-10deg)"
      : tilt === "right"
      ? "rotate(10deg)"
      : "rotate(0deg)"};
  transition: transform 0.5s ease;
`;

const Pan = styled.div`
  width: 169px;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${balanceScaleImg}) center no-repeat;
  background-size: contain;
  z-index: 1000 !important; 

  &.left {
    position: absolute;
    left: -80px;
  }

  &.right {
    position: absolute;
    right: -80px;
  }
`;

const Objects = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  z-index: 1000;
`;

const DraggableImg = styled.img`
  width: 124px;
  cursor: grab;
  z-index: 100;
`;

const Img = styled.img`
  width: 124px;
  z-index: -10;
`;
