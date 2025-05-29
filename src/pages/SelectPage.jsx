import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container";
import Header from "../components/HeaderWhite";

const SelectPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header/>
      <Title>힘과 우리 생활</Title>
      <Flex>
        <Item onClick={() => navigate("/balance")}>
          <Badge>탐구1</Badge>
          <h4><span>양팔저울</span>로<br/>무게 비교하기</h4>
          <p>수평 잡기를 이용하여<br/>물체의 무게를 비교해 보아요.</p>
          <div className="img">이미지</div>
        </Item>
        <Item onClick={() => navigate("/lever")}>
          <Badge>탐구2</Badge>
          <h4><span>지레</span>를 이용해<br/>물건 들기</h4>
          <p>막대 지레를 이용해<br/>무거운 물체를 들어 보아요.</p>
          <div className="img">이미지</div>
        </Item>
        <Item onClick={() => navigate("/slope")}>
          <Badge>탐구3</Badge>
          <h4><span>빗면</span>을 이용해<br/>물건 들기</h4>
          <p>경사면을 따라 물체를<br/>들어 올려 보아요.</p>
          <div className="img">이미지</div>
        </Item>
      </Flex>

      <Button onClick={() => navigate("/result")}>실험 종료</Button>
      {/* 모든 실험 활동을 실행했을 때만 배운 내용 화면으로 이동, (result) */}
      {/* "활동을 마치지 않아 처음부터 다시 시작해야 할 수 있습니다! 정말로 종료하시겠습니까?"
      모달에 "예","아니요" 버튼 추가 */}
      {/* "예" : 아무 실험도 하지 않았거나 일부만 했을 때 -> 배운 내용 화면은 스킵, 학습 목표 화면으로 이동  */}
    </Container>
  );
};

const Title = styled.h2`
  margin: 2rem 0;
  color: #fff;
  font-size: 2.5rem;
  font-family: 'HakgyoansimDunggeunmisoTTF-B';
`;

const Flex = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  gap: 1.8rem;
`;
const Item = styled.div`
  width: 30%;
  padding: 1.6rem;
  background: #fff;
  border-radius: 2rem;
  text-align: center;
  cursor: pointer;
  color: #0C3554;
  box-shadow: 0px 10px 20px rgba(12, 53, 84, 0.1);
  
  .img {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 300px;
    background: #f1f1f1;
    border-radius: 20px;
    color: #b7c5d1;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }

  h4 {
    margin: 30px 0;
    font-size: 2rem;
    font-family: 'HakgyoansimDunggeunmisoTTF-R';
    span {
      font-family: 'HakgyoansimDunggeunmisoTTF-B';
    }
  }
`;
const Button = styled.button`
  position: absolute;
  right: 5rem;
  bottom: 3rem;
  width: 200px;
  height: 70px;
  border-radius: 56px;
  background: #1499ff;
  box-shadow: 0px -8px 0px 0px #0056d6 inset;
  color: #fff;
  font-size: 1.4rem;
  font-family: "HakgyoansimDunggeunmisoTTF-B";
`;

const Badge = styled.span`
  border-radius: 38px;
  background: #1499FF;
  color: #fff;
  font-size: 1.4rem;
  padding: 8px 20px;
  font-family: 'HakgyoansimDunggeunmisoTTF-B';
`
export default SelectPage;
