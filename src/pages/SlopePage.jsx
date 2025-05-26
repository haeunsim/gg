import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Laboratory from '../components/Laboratory';

const SlopePage = () => {
  const navigate = useNavigate();

  return (
    <Laboratory>
      <Button onClick={() => navigate('/select')}>다른 활동 선택하기</Button>
      {/* 빗면 실험 */}
    
      {/* 1. 물체 들어올리기 */}
      <div>
        <p>그냥 들어 올릴 때 : 0g</p> {/* 들어 올리면 0 -> 240g 으로 변경 */}
        <p>빗면을 사용할 때 : 0g</p>
      </div>

      <div>저울에 달린 물체</div>
      <div>용수철 저울</div>

      <p>물체를 위로 들어 올리면서 무게가 얼마인지 확인해 보세요.</p>

      {/* 물체를 들어올리면, 빗면 생성 */}

      {/* 2. 빗면에 물체 들어올리기 */}
      <div>
        <p>그냥 들어 올릴 때 : 240g</p>
        <p>빗면을 사용할 때 : 0g</p> {/* 들어 올리면 0g -> 120g으로 변경 */}
      </div>

      <div>용수철 저울 + 저울에 달린 물체</div>
      <div>빗면</div>

      <p>물체를 위로 들어 올리면서 무게가 얼마인지 확인해 보세요.</p>

      {/* 클릭 시 저울과 물체가 빗면 따라 올라가면서 '빗면을 사용할 때' 저울 실행 */}
      {/* 일정 위치까지 올라가면 그 위치에 물체가 고정되고, 저울 멈춤 */}

      <p>빗면을 사용하면 물체를 들어 올리는데 더 적은 힘이 든다는 걸 알 수 있어요.</p>
    </Laboratory>
  )
}

export default SlopePage;

const Button = styled.button`
  position: absolute;
  right: 60px;
  top: 60px;
  padding: 12px 28px;
  background: #faf6c1;
  border-radius: 50px;
  font-size: 20px;
`