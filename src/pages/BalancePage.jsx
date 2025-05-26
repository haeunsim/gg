import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import wood from '../assets/images/wood.png'
import metal from '../assets/images/metal.png'

const BalancePage = () => {
  // 저울 양쪽에 놓인 물체
  const [leftItem, setLeftItem] = useState(null);
  const [rightItem, setRightItem] = useState(null);
  
  // 드래그 중인 물체
  const [draggingItem, setDraggingItem] = useState(null);
  
  const navigate = useNavigate();

  // 무게 정의
  const weights = {
    wood: 1,  // 나무 무게: 1kg
    metal: 3  // 철 무게: 3kg
  };
  
  // 저울 각도 계산
  const calculateBalance = () => {
    const leftWeight = leftItem ? weights[leftItem] : 0;
    const rightWeight = rightItem ? weights[rightItem] : 0;
    
    // 무게 차이에 따라 각도 계산 (최대 ±20도)
    // 무거운 쪽이 아래로 기울게 수정 (부호 반대로)
    const diff = rightWeight - leftWeight;
    return Math.min(Math.max(diff * 2, -20), 20);
  };
  
  // 드래그 시작 핸들러
  const handleDragStart = (item) => {
    setDraggingItem(item);
    
    // 이미 저울에 있는 경우 제거
    if (leftItem === item) setLeftItem(null);
    if (rightItem === item) setRightItem(null);
  };
  
  // 드래그 종료 핸들러
  const handleDragEnd = (event, info, item) => {
    // 드롭 위치 확인
    const leftScaleElement = document.getElementById('left-scale');
    const rightScaleElement = document.getElementById('right-scale');
    
    if (leftScaleElement && rightScaleElement) {
      const leftScaleRect = leftScaleElement.getBoundingClientRect();
      const rightScaleRect = rightScaleElement.getBoundingClientRect();
      
      const { point } = info;
      
      // 왼쪽 접시에 드롭
      if (
        point.x >= leftScaleRect.left && 
        point.x <= leftScaleRect.right && 
        point.y >= leftScaleRect.top && 
        point.y <= leftScaleRect.bottom
      ) {
        setLeftItem(item);
      }
      // 오른쪽 접시에 드롭
      else if (
        point.x >= rightScaleRect.left && 
        point.x <= rightScaleRect.right && 
        point.y >= rightScaleRect.top && 
        point.y <= rightScaleRect.bottom
      ) {
        setRightItem(item);
      }
    }
    
    setDraggingItem(null);
  };
  
  // 저울 각도
  const balanceAngle = calculateBalance();
  
  return (
    <div className='container'>
      <Button onClick={() => navigate('/select')}>다른 활동 선택하기</Button>
      {/* <Title>양팔저울 실험</Title> */}
      
      <BalanceContainer>
        <BalanceBar
          style={{ originX: 0.5, originY: 0.5 }}
          animate={{ rotate: balanceAngle }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 10 
          }}
        >
          <ScalePlate id="left-scale" side="left">
            <ScalePlateBase />
            <ScalePlateCircle>
              {leftItem && (
                <Item 
                  type={leftItem}
                  style={{ width: '2rem', height: '2rem' }}
                />
              )}
            </ScalePlateCircle>
          </ScalePlate>
          
          <ScalePlate id="right-scale" side="right">
            <ScalePlateBase />
            <ScalePlateCircle>
              {rightItem && (
                <Item 
                  type={rightItem}
                  style={{ width: '2rem', height: '2rem' }}
                />
              )}
            </ScalePlateCircle>
          </ScalePlate>
        </BalanceBar>
        
        <ScaleBase />
        <ScaleStand />
      </BalanceContainer>
      
      <ItemsContainer>
        {leftItem !== 'wood' && rightItem !== 'wood' && (
          <Item
            type="wood"
            drag
            onDragStart={() => handleDragStart('wood')}
            onDragEnd={(e, info) => handleDragEnd(e, info, 'wood')}
            whileDrag={{ scale: 1.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={wood} alt='wood'/>
          </Item>
        )}
        {leftItem !== 'metal' && rightItem !== 'metal' && (
          <Item
            type="metal"
            drag
            onDragStart={() => handleDragStart('metal')}
            onDragEnd={(e, info) => handleDragEnd(e, info, 'metal')}
            whileDrag={{ scale: 1.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={metal} alt='metal'/>
          </Item>
        )}
      </ItemsContainer>
      
      <Description>
        <p>물체를 양팔저울 위에 올려 무게를 비교해보세요.</p>
        {/* 물체를 올리면 멘트 수정 */}
        {/* <p>[나무 조각 이미지] 보다 [철 조각 이미지] 가 더 무겁다는 것을 알 수 있어요.</p> */}
      </Description>
    </div>
  );
};

export default BalancePage;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const BalanceContainer = styled.div`
  position: relative;
  width: 20rem;
  height: 16rem;
  margin-bottom: 4rem;
`;

const BalanceBar = styled(motion.div)`
  position: absolute;
  width: 16rem;
  height: 1rem;
  background-color: #92400e;
  border-radius: 9999px;
  left: 2rem;
  top: 6rem;
`;

const ScaleBase = styled.div`
  position: absolute;
  width: 1rem;
  height: 5rem;
  background-color: #b45309;
  left: 10rem;
  top: 7rem;
`;

const ScaleStand = styled.div`
  position: absolute;
  width: 4rem;
  height: 2rem;
  background-color: #78350f;
  left: 8rem;
  top: 12rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

const ScalePlate = styled.div`
  position: absolute;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.side === 'left' ? 'left: -1rem;' : 'right: -1rem;'}
  top: -2rem;
`;

const ScalePlateBase = styled.div`
  position: absolute;
  width: 4rem;
  height: 0.75rem;
  background-color: #b45309;
  bottom: 0;
  border-radius: 9999px;
`;

const ScalePlateCircle = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background-color: #fb923c;
  border-radius: 9999px;
  margin-top: -0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = styled(motion.div)`
  /* width: 3rem; */
  /* height: 3rem; */
  /* border-radius: 0.25rem; */
  cursor: move;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  img {
    width: 100px;
  }
`;

const ItemsContainer = styled.div`
  display: flex;
  gap: 4rem;
  margin-top: 2rem;
`;

const Description = styled.div`
  margin-top: 3rem;
  text-align: center;
  max-width: 32rem;
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  position: absolute;
  right: 60px;
  top: 60px;
  padding: 12px 28px;
  background: #faf6c1;
  border-radius: 50px;
  font-size: 20px;
`