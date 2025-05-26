import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LeverPage = () => {
  const navigate = useNavigate();
  const [forceWithoutLever, setForceWithoutLever] = useState(0);
  const [forceWithLever, setForceWithLever] = useState(0);
  const [isLeverActive, setIsLeverActive] = useState(false);
  const [objectPosition, setObjectPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isExperimentComplete, setIsExperimentComplete] = useState(false);
  
  const objectRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = objectRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    objectRef.current.dataset.offsetX = offsetX;
    objectRef.current.dataset.offsetY = offsetY;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const y = e.clientY - containerRect.top - parseFloat(objectRef.current.dataset.offsetY);

    // y축 이동 제한
    const maxY = currentStep === 1 ? 200 : 150;
    const minY = 0;
    const boundedY = Math.min(Math.max(y, minY), maxY);

    setObjectPosition({ x: 0, y: boundedY });

    // 힘 측정기 업데이트
    if (currentStep === 1) {
      const force = Math.round((boundedY / maxY) * 30);
      setForceWithoutLever(force);
      
      if (force >= 30) {
        setTimeout(() => {
          setCurrentStep(2);
          setObjectPosition({ x: 0, y: 0 });
        }, 1000);
      }
    } else if (currentStep === 2) {
      const force = Math.round((boundedY / maxY) * 10);
      setForceWithLever(force);
      
      if (force >= 10) {
        setIsExperimentComplete(true);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, currentStep]);

  return (
    <Container ref={containerRef}>
      <Button onClick={() => navigate('/select')}>다른 활동 선택하기</Button>
      
      {currentStep === 1 && (
        <ExperimentSection>
          <h2>1. 물체 들어올리기</h2>
          <ForceMeter>
            <p>그냥 들어 올릴 때 : {forceWithoutLever} {'>'} 30</p>
            <p>지레를 사용할 때 : {forceWithLever}</p>
          </ForceMeter>

          <Object 
            ref={objectRef}
            y={objectPosition.y}
            isDragging={isDragging}
            onMouseDown={handleMouseDown}
          >
            물체
          </Object>

          <Instruction>
            물체를 마우스로 끌어서 위로 들어 올려보세요.
          </Instruction>
        </ExperimentSection>
      )}

      {currentStep === 2 && (
        <ExperimentSection>
          <h2>2. 지레와 물체 배치</h2>
          <ForceMeter>
            <p>그냥 들어 올릴 때 : 30</p>
            <p>지레를 사용할 때 : {forceWithLever} {'>'} 10</p>
          </ForceMeter>

          
          {/* 손짓하는 클릭 유도 아이콘 추가 */}

          <Object 
            ref={objectRef}
            y={objectPosition.y}
            isDragging={isDragging}
            onMouseDown={handleMouseDown}
          >
            물체
          </Object>
          

          <Lever isActive={isLeverActive}></Lever> {/* 지렛대 ( ㅡ 직각에서 -> 물체를 들어올리면 ↖ ↙ 방향으로 기울임 - 시소처럼) */}
          {/* 받침대 (고정) */}
          {/* 왼쪽 화살표 (물체를 들어올리면 위롤 향해 생기는 애니메이션) */}
          {/* 오른쪽 화살표 (물체를 들어올리면 아래를 향해 생기는 애니메이션) */}


          <Instruction>
            지레를 사용하여 물체를 들어 올려보세요.
          </Instruction>
        </ExperimentSection>
      )}

      {isExperimentComplete && (
        <Conclusion>
          지레를 사용하면 물체를 들어 올리는데 더 적은 힘이 든다는 걸 알 수 있어요.
        </Conclusion>
      )}
    </Container>
  )
}

export default LeverPage;

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  min-height: 500px;
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  right: 60px;
  top: 60px;
  padding: 12px 28px;
  background: #faf6c1;
  border-radius: 50px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f5f0a3;
  }
`;

const ExperimentSection = styled.section`
  margin: 40px 0;
  padding: 20px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  background: #f9f9f9;
  min-height: 400px;
  position: relative;
`;

const ForceMeter = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  margin: 20px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Object = styled.div`
  width: 70px;
  height: 70px;
  background: #6d5c41;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  user-select: none;
  position: absolute;
  left: calc(50% - 120px);
  top: calc(60% - 100px + ${props => props.y || 0}px);
  transform: none;
  transition: box-shadow 0.1s;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  z-index: 2;
  cursor: ${props => props.isDragging ? 'grabbing' : 'grab'};

  &:hover {
    box-shadow: 0 6px 12px rgba(0,0,0,0.3);
  }
`;

const Lever = styled.div`
  width: 400px;
  height: 18px;
  background: linear-gradient(90deg, #bdbdbd 0%, #e0e0e0 100%);
  margin: 0 auto;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  bottom: 120px;
  transform: translateX(-50%) rotate(-20deg);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  /* &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translateX(-50%) rotate(0deg);
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 40px solid #795548;
    z-index: 0;
  } */
`;

const Instruction = styled.p`
  text-align: center;
  color: #666;
  margin: 20px 0;
  position: absolute;
  bottom: 20px;
  width: 100%;
  left: 0;
`;

const Conclusion = styled.p`
  text-align: center;
  font-weight: bold;
  color: #333;
  margin: 40px 0;
  padding: 20px;
  background: #e8f5e9;
  border-radius: 8px;
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;