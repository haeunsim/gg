import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container";
import icon from "../assets/images/document-icon.png";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
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

export default MainPage;

const Title = styled.h2`
  margin-bottom: 30px;
  color: #fff;
  font-size: 2rem;
  font-family: "HakgyoansimDunggeunmisoTTF-B";
`;
const Wrap = styled.div`
  width: 75%;
  z-index: 10;
`;
const ContentHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px 40px 0 0;
  background: #0c3554;
  color: #fff;
  padding: 1.5rem 0;

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
  height: 80%;
  border-radius: 0 0 40px 40px;
  padding: 40px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .text {
    height: 100%;
    /* padding: 8rem 0; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  p {
    font-size: 1.8rem;
    line-height: 2.8rem;
    /* font-size: 32px; */
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
  font-size: 2.125rem;
  /* font-size: 40px; */
  /* margin-top: 40px; */
  font-family: "HakgyoansimDunggeunmisoTTF-B";
`;
