import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container";

const ResultPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrap>
        <ContentHead>
          <h2>
            {/* <img src={icon} alt=""/> */}
            배운 내용</h2>
        </ContentHead>
        <Content>
          <p>양팔저울은 더 무거운 물체 쪽으로 기울어요.</p>
          <p>지레와 빗면을 이용하면 더 적은 힘으로 물체를 들어 올릴 수 있어요.</p>
          <Button onClick={() => navigate("/")}>마치기</Button>
        </Content>
      </Wrap>
    </Container>
  );
};

export default ResultPage;

const Wrap = styled.div`
  width: 80%;
  z-index: 10;
`;
const ContentHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  border-radius: 56px 56px 0 0;
  background: #0c3554;
  color: #fff;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 34px;
    font-family: 'HakgyoansimDunggeunmisoTTF-B';
    
    img {
      width: 40px
    }
  }
`;
const Content = styled.div`
  border-radius: 0 0 56px 56px;
  height: 460px;
  padding: 40px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  p {
    font-size: 32px;
    color: #0c3554;
  }
`;
const Button = styled.button`
  max-width: 398px;
  width: 100%;
  height: 118px;
  border-radius: 56px;
  background: #1499ff;
  box-shadow: 0px -8px 0px 0px #0056d6 inset;
  color: #fff;
  font-size: 40px;
  margin-top: 40px;
  font-family: 'HakgyoansimDunggeunmisoTTF-B';
`;