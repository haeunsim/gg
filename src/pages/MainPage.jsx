import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container";
import gomi from "../assets/images/gomi.png";
import bee from "../assets/images/bee.png";
import gomibee from "../assets/images/main-img.png";
import logo from "../assets/images/main-logo.png";
import Header from "../components/Header";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Container isMain>
      <Header />

      <Logo>
        <img src={logo} alt="logo" />
      </Logo>

      <TapSemester>
        <div className="on">1학기</div>
        <div>2학기</div>
      </TapSemester>

      <Content>
        <TapGrade>
          <div>
            <span className="on">1학년</span>
          </div>
          <div>2학년</div>
          <div>3학년</div>
          <div>4학년</div>
        </TapGrade>
        <View>
          <TapUnit>
            <div className="on" onClick={() => navigate("/goals")}>
              힘과 우리의 생활
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="27"
                viewBox="0 0 18 27"
                fill="none"
              >
                <path
                  d="M4 4L14 13.5L4 23"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>동물의 생활</div>
            <div>식물의 생활</div>
            <div>생물의 한살이</div>
          </TapUnit>
          <UnitView>
            <Img>
              <img src={gomibee} alt="실험 이미지" />
            </Img>
            <TextWrap>
              <div>
                <Flex>
                  <span>탐구1</span>
                  <h6>양팔저울로 무게 비교하기</h6>
                </Flex>
                <p>수평 잡기를 이용하여 물체의 무게를 비교해 보아요.</p>
              </div>
              <div>
                <Flex>
                  <span>탐구2</span>
                  <h6>지레를 이용해 물건 들기기</h6>
                </Flex>
                <p>막대 지레를 이용해 무거운 물체를 들어 보아요.</p>
              </div>
              <div>
                <Flex>
                  <span>탐구3</span>
                  <h6>빗면을 이용해 물건 들기기</h6>
                </Flex>
                <p>경사면을 따라 물체를 들어 올려 보아요.</p>
              </div>
            </TextWrap>
          </UnitView>
        </View>
      </Content>

      <img src={gomi} className="gomi" alt="고미" />
      <img src={bee} className="bee" alt="버리" />
    </Container>
  );
};

export default MainPage;

const Logo = styled.div`
  width: 630px;
  padding: 20px 0 10px;
  > img {
    width: 100%;
  }
`;
const Content = styled.div`
  width: 90%;
  max-width: 1200px;
  height: 500px;
  background: #0c3554;
  border-radius: 56px;
  box-sizing: border-box;
  padding: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0px 20px 0px 0px rgba(0, 0, 0, 0.25);
  z-index: 100;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;
const TapSemester = styled.div`
  display: flex;
  background: #0c3554;
  padding: 8px;
  border-radius: 56px;
  margin-bottom: 20px;
  text-align: center;

  > div {
    padding: 10px 40px;
    border-radius: 56px;
    color: #fff;
    font-family: "HakgyoansimDunggeunmisoTTF-R";
    font-size: 1.5rem;
  }
  .on {
    background: #fff;
    color: #0c3554;
    font-family: "HakgyoansimDunggeunmisoTTF-B";
  }
`;
const TapGrade = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;

  > div {
    flex: 1;
    text-align: center;
    color: #fff;
    font-family: "HakgyoansimDunggeunmisoTTF-B";
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px 0;
    border-right: 2px solid #fff;

    &:last-child {
      border-right: none;
    }
  }
  .on {
    background: #ff4747;
    color: #fff;
    font-family: "HakgyoansimDunggeunmisoTTF-B";
    border-radius: 20px;
    display: block;
    width: 100px;
    padding: 10px;
    cursor: pointer;
  }
`;
const TapUnit = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px 0 0 40px;
  overflow: hidden;

  > div {
    flex: 1;
    max-width: 300px;
    margin-right: 20px;
    box-sizing: border-box;
    background: #d9d9d9;
    padding: 30px;
    font-family: "HakgyoansimDunggeunmisoTTF-R";
    font-size: 1.48rem;
    color: #10353c;
    border-bottom: 1px solid #adadad;
    border-right: 1px solid #adadad;
    display: flex;
    align-items: center;
    justify-content: end;

    &:last-child {
      border-bottom: none;
    }

    @media (max-width: 1024px) {
      font-size: 1.2rem;
      padding: 15px 25px;
    }
  }
  .on {
    display: flex;
    gap: 20px;
    width: 320px;
    padding: 30px 18px;
    background: #ff9270;
    color: #fff;
    font-family: "HakgyoansimDunggeunmisoTTF-B";
    font-size: 1.6rem;
    border-radius: 0 20px 20px 0;
    border: 1px solid #bc2c00;
    border-left: none;
    box-shadow: 8px 0px 0px 0px rgba(0, 0, 0, 0.25),
      0px 8px 0px 0px rgba(0, 0, 0, 0.25) inset;
    margin-right: 8px; /* 그림자가 짤리지 않도록 오른쪽 여백 추가 */
    cursor: pointer;

    @media (max-width: 1024px) {
      max-width: 200px;
      font-size: 1.2rem;
      padding: 15px;

      > svg {
        width: 8px;
      }
    }
  }
`;

const View = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 10px 10px 48px 48px;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.25) inset;
`;
const UnitView = styled.div`
  /* width: 100%; */
  padding: 38px 40px;
  display: flex;
  gap: 30px;

  h6 {
    color: #0c3554;
    font-size: 1.6rem;
  }
  p {
    font-size: 1.125rem;
    font-family: "Pretendard";
    font-weight: 300;
    padding-top: 10px;
  }

  @media (max-width: 1024px) {
    padding: 20px 10px;
    h6 {
      font-size: 1.2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
const Img = styled.div`
  display: flex;
  align-items: center;
  width: 340px;
  height: 340px;
  > img {
    border-radius: 37px;
    width: 100%;
    border: 1px solid #808080;
  }
  @media (max-width: 1024px) {
    width: 250px;
  }
`;
const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  * {
    font-family: "HakgyoansimDunggeunmisoTTF-R";
  }

  @media (max-width: 1024px) {
    min-width: 300px;
  }
`;
const Flex = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  span {
    background: #0c3554;
    color: #fff;
    padding: 4px 16px;
    border-radius: 38px;
    font-size: 1.2rem;
    font-family: "HakgyoansimDunggeunmisoTTF-B";
  }
`;
