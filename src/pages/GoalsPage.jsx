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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="none"
            >
              <path
                stroke="#fff"
                strokeWidth="2"
                d="M34.094 7H35a6 6 0 0 1 6 6v25a6 6 0 0 1-6 6H13a6 6 0 0 1-6-6V13a6 6 0 0 1 6-6h.375"
              />
              <rect
                width="7"
                height="4"
                x="17"
                y="3"
                stroke="#fff"
                strokeWidth="2"
                rx="2"
                transform="rotate(90 17 3)"
              />
              <rect
                width="7"
                height="4"
                x="26"
                y="3"
                stroke="#fff"
                strokeWidth="2"
                rx="2"
                transform="rotate(90 26 3)"
              />
              <rect
                width="7"
                height="4"
                x="35"
                y="3"
                stroke="#fff"
                strokeWidth="2"
                rx="2"
                transform="rotate(90 35 3)"
              />
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m12 16.5 2.382 2.5L19 14M24 17h12M17 7h5M26 7h5M12 26.5l2.382 2.5L19 24M12 36.5l2.382 2.5L19 34M24 27h12M24 37h12"
              />
            </svg>
            학습 목표
          </h2>
        </ContentHead>
        <Content>
          <p>3학년 1학기 1단원 &lt;힘과 우리 생활&gt;</p>
          <div>
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
  max-width: 860px;
  width: 100%;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ContentHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 56px 56px 0 0;
  background: #0c3554;
  color: #fff;
  padding: 16px 0;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 34px;
    font-family: "HakgyoansimDunggeunmisoTTF-B";
  }
`;
const Content = styled.div`
  border-radius: 0 0 56px 56px;
  /* height: 460px; */
  padding: 40px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  p {
    font-size: 30px;
    color: #0c3554;
  }

  div {
    width: 100%;
    border-radius: 30px;
    background: #F1F4F7;
    padding: 30px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    p {
      position: relative;
      font-size: 30px;
      color: #0C3554;
      padding-left: 30px;
      margin-left: 15px;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 14px;
        width: 6px;
        height: 6px;
        background: #0C3554;
        border-radius: 50px;
      }
    }
  }
`;
const Button = styled.button`
  max-width: 280px;
  width: 100%;
  height: 80px;
  border-radius: 50px;
  background: #1499FF;
  box-shadow: 0px -5.658px 0px 0px #0056D6 inset;
  color: #fff;
  font-size: 34px;
  /* margin-top: 40px; */
  font-family: "HakgyoansimDunggeunmisoTTF-B";
`;