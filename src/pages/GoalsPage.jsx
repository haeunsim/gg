import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container";
import icon from "../assets/images/document-icon.png";
import Header from "../components/HeaderWhite";

const GoalsPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header/>
      <Title>힘과 우리 생활</Title>
      <Wrap>
        <ContentHead>
          <h2>
            <img src={icon} alt="" />
            학습 목표
          </h2>
        </ContentHead>
        <Content>
          <div className="text">
            <p>양팔저울을 이용해 두 물체의 무게를 비교할 수 있어요.</p>
            <p>지레와 빗면을 이용하면 어떤 차이가 있는지 비교할 수 있어요.</p>
          </div>
          <Button onClick={() => navigate("/select")}>실험 시작</Button>
        </Content>
      </Wrap>
    </Container>
  );
};

export default GoalsPage;

const Title = styled.h2`
  margin-bottom: 30px;
  color: #fff;
  font-size: 2rem;
  font-family: "HakgyoansimDunggeunmisoTTF-B";
`;
const Wrap = styled.div`
  width: 80%;
  z-index: 10;
`;
const ContentHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px 40px 0 0;
  background: #0c3554;
  color: #fff;
  padding: 16px 0;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 2rem;
    font-family: "HakgyoansimDunggeunmisoTTF-B";

    img {
      width: 40px;
    }
  }
`;
const Content = styled.div`
  height: 600px;
  box-sizing: border-box;
  border-radius: 0 0 40px 40px;
  padding: 80px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */

  .text {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  p {
    font-size: 1.8rem;
    line-height: 3.8rem;
    color: #0c3554;
  }
`;
const Button = styled.button`
  width: 280px;
  height: 90px;
  border-radius: 56px;
  background: #1499ff;
  box-shadow: 0px -8px 0px 0px #0056d6 inset;
  color: #fff;
  font-size: 2rem;
  font-family: "HakgyoansimDunggeunmisoTTF-B";
`;
