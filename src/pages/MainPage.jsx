import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container";
import character01 from "../assets/images/character01.png";
import character02 from "../assets/images/character02.png";
import character03 from "../assets/images/character03.png";
import logo from "../assets/images/logo.png";
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
        <TapGradeMobile className="on" onClick={() => navigate("/goals")}>
          <div>
            <span className="on">1학년</span>
          </div>
          <div>
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
        </TapGradeMobile>
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
              <img src={character03} alt="실험 이미지" />
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
                  <h6>지레를 이용해 물건 들기</h6>
                </Flex>
                <p>막대 지레를 이용해 무거운 물체를 들어 보아요.</p>
              </div>
              <div>
                <Flex>
                  <span>탐구3</span>
                  <h6>빗면을 이용해 물건 들기</h6>
                </Flex>
                <p>경사면을 따라 물체를 들어 올려 보아요.</p>
              </div>
            </TextWrap>
          </UnitView>
        </View>
      </Content>

      <img src={character01} className="tiger" alt="백호 캐릭터" />
      <img src={character02} className="fox" alt="여우 캐릭터" />
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

  @media (max-width: 1280px) {
    width: 400px;
  }
  @media (max-width: 768px) {
    width: 280px;
    padding: 0 0 10px;
  }
`;
const Content = styled.div`
  width: 90%;
  max-width: 1200px;
  background: #35be9a;
  border-radius: 56px;
  box-sizing: border-box;
  padding: 14px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0px 10px 0px 0px rgba(26, 64, 54, 0.2);
  z-index: 100;
  box-sizing: border-box;

  @media (max-width: 1280px) {
    max-width: 900px;
    height: auto;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    border-radius: 36px;
    box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 20px;
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

  @media (max-width: 768px) {
    > div {
      font-size: 1.2rem;
      padding: 8px 20px;
    }
  }
`;
const TapGradeMobile = styled.div`
  display: none;
  
  @media (max-width: 480px) {
    cursor: pointer;
    display: block;
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;

    > div {
      flex: 1;
      text-align: center;
      color: #fff;
      font-family: "HakgyoansimDunggeunmisoTTF-B";
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-left: 15px;
        width: 8px;
      }

      &:last-child {
        border-right: none;
      }
    }
    .on {
      background: #fff;
      color: #35be9a;
      font-family: "HakgyoansimDunggeunmisoTTF-B";
      border-radius: 20px;
      display: block;
      width: 80px;
      padding: 10px;
      cursor: pointer;
    }
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
    background: #fff;
    color: #35be9a;
    font-family: "HakgyoansimDunggeunmisoTTF-B";
    border-radius: 20px;
    display: block;
    width: 80px;
    padding: 10px;
    cursor: pointer;
  }

  @media (max-width: 960px) {
    > div {
      font-size: 1.25rem;
      border-right: 1px solid #fff;
    }
  }
  @media (max-width: 480px) {
    display: none;
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

    @media (max-width: 1280px) {
      font-size: 1.2rem;
      padding: 15px 25px;
    }
  }
  .on {
    display: flex;
    gap: 20px;
    width: 320px;
    padding: 30px 18px;
    background: #509CFF;
    color: #fff;
    font-family: "HakgyoansimDunggeunmisoTTF-B";
    font-size: 1.6rem;
    border-radius: 0 20px 20px 0;
    border: 1px solid #2A69BA;
    border-left: none;
    box-shadow: 8px 0px 0px 0px rgba(0, 0, 0, 0.25),
      0px 8px 0px 0px rgba(0, 0, 0, 0.25) inset;
    margin-right: 8px; /* 그림자가 짤리지 않도록 오른쪽 여백 추가 */
    cursor: pointer;

    @media (max-width: 1280px) {
      max-width: 240px;
      font-size: 1.2rem;
      padding: 15px;
      
      > svg {
        width: 8px;
      }
    }
    @media (max-width: 1024px) {
      max-width: 200px;
    }
  }

  @media (max-width: 960px) {
    flex-direction: row;
    border-radius: 0px;

    > div {
      margin-right: 0;
      border-radius: 0px;
      text-align: center;
      
      &:last-child {
        border-bottom: 1px solid #adadad;
      }
      &.on {
        border-radius: 0px;
        margin-right: 0;
        box-shadow: none;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const View = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 10px 10px 48px 48px;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.25) inset;

  @media (max-width: 960px) {
    display: block;
  }
  @media (max-width: 480px) {
    border-radius: 10px 10px 30px 30px;
  }
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
    padding-top: 8px;
  }

  @media (max-width: 1280px) {
    padding: 20px 10px;
    h6 {
      font-size: 16px;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 960px) {
    padding: 20px 40px;
  }
  @media (max-width: 768px) {
    padding: 30px 20px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;
const Img = styled.div`
  display: flex;
  align-items: center;
  width: 340px;
  height: 340px;
  border: 1px solid #808080;
  overflow: hidden;
  border-radius: 38px;

  > img {
    width: 100%;
  }

  @media (max-width: 1280px) {
    width: 250px;
    height: auto;
  }
`;
const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  * {
    font-family: "HakgyoansimDunggeunmisoTTF-R";
  }
  @media (max-width: 1280px) {
    /* min-width: 300px; */
    gap: 15px;
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
