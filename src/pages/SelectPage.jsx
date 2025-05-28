import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container";

const SelectPage = () => {
  const navigate = useNavigate();

  return (
    <Container>

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
    </Container>
  );
};

const Title = styled.h2`
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 2rem;
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

  .img {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 250px;
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
  bottom: 8rem;
  padding: 12px 28px;
  background: #faf6c1;
  border-radius: 50px;
  font-size: 1.2rem;
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
