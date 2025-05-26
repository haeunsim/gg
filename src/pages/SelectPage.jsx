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
        <Item onClick={() => navigate("/Slope")}>
        <Badge>탐구3</Badge>
          <h4><span>빗면</span>을 이용해<br/>물건 들기</h4>
          <p>경사면을 따라 물체를 들어 올려 보아요.</p>
          <div className="img">이미지</div>
        </Item>
      </Flex>

      <Button onClick={() => navigate("/result")}>실험 종료</Button>
    </Container>
  );
};

const Title = styled.h2`
  color: #fff;
  font-size: 40px;
  margin-bottom: 30px;
  font-family: 'HakgyoansimDunggeunmisoTTF-B';
`;

const Flex = styled.div`
  display: flex;
  gap: 30px;
`;
const Item = styled.div`
  width: 30%;
  padding: 30px;
  background: #fff;
  border-radius: 40px;
  text-align: center;
  cursor: pointer;
  color: #0C3554;

  .img {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 400px;
    height: 300px;
    background: #f1f1f1;
    border-radius: 20px;
    color: #b7c5d1;
  }

  p {
    font-size: 22px;
    margin-bottom: 20px;
  }

  h4 {
    margin: 30px;
    font-size: 34px;
    font-family: 'HakgyoansimDunggeunmisoTTF-R';
    span {
      font-family: 'HakgyoansimDunggeunmisoTTF-B';
    }
  }
`;
const Button = styled.button`
  position: absolute;
  right: 60px;
  bottom: 100px;
  padding: 12px 28px;
  background: #faf6c1;
  border-radius: 50px;
  font-size: 20px;
`;
const Badge = styled.span`
  border-radius: 38px;
  background: #1499FF;
  color: #fff;
  font-size: 22px;
  padding: 8px 20px;
  font-family: 'HakgyoansimDunggeunmisoTTF-B';
`
export default SelectPage;
