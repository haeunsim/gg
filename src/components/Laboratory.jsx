import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import desk from "../assets/images/bg-desk.png";
import { motion } from "framer-motion";
import useExperimentStore from "../store/experimentStore";

const Laboratory = ({ title, children, text, isComplete, className }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const state = useExperimentStore();

  const handleSelectClick = () => {
    let isExperimentComplete = false;
    
    // 각 페이지별 완료 상태 확인
    if (title.includes("양팔저울")) {
      isExperimentComplete = state.isBalanceComplete;
    } else if (title.includes("지레")) {
      isExperimentComplete = state.isLeverComplete;
    } else if (title.includes("빗면")) {
      isExperimentComplete = state.isSlopeComplete;
    }

    if (isExperimentComplete) {
      navigate("/select");
    } else {
      setIsModalOpen(true);
    }
  };

  const handleModalConfirm = () => {
    setIsModalOpen(false);
    navigate("/select");
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrap className={className}>
      <Nav>
        <Item>
          <Badge>실험실</Badge>
          <p>{title}</p>
        </Item>
      </Nav>

      <Button onClick={handleSelectClick}>
        다른 활동 선택하기
      </Button>

      <Main>{children}</Main>

      {!isComplete && (
        <Text>
          <p>{text}</p>
        </Text>
      )}

      {isComplete && (
        <ResultText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
          >
            <circle cx="35" cy="35" r="35" fill="white" />
            <path
              d="M21 38.6552L29.1441 47L52 25"
              stroke="#34C9FF"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>{text}</p>
        </ResultText>
      )}

      {isModalOpen && (
        <>
          <ModalOverlay />
          <Modal>
            <div className="modal">
              <div className="modal__title">안내</div>
              <div className="modal__message">
                <p>활동을 마치지 않아</p>
                <p>처음부터 다시 시작해야 할 수 있습니다.</p>
                <p>정말로 종료하시겠습니까?</p>
              </div>
              <div className="modal__buttons">
                <button className="modal__button modal__button--cancel" onClick={handleModalCancel}>
                  아니요
                </button>
                <button className="modal__button modal__button--confirm" onClick={handleModalConfirm}>
                  예
                </button>
              </div>
            </div>
          </Modal>
        </>
      )}

      <div className="bg-floor"></div>
    </Wrap>
  );
};

export default Laboratory;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(0deg, #e0efff 23.62%, #4197d8 178.01%);
  box-sizing: border-box;
  overflow: hidden;

  .bg-floor {
    width: 100%;
    height: 350px;
    position: absolute;
    bottom: 0;
    background: url(${desk}) center bottom no-repeat;
    z-index: 1;
    background-size: cover;
  }
`;

const Nav = styled.div`
  width: 100%;
  padding: 16px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(180deg, #fff -25%, #a8deff 342.95%);
  box-sizing: border-box;
`;

const Main = styled.div`
  position: relative;
  z-index: 1000 !important;
  width: 100%;
  height: 100%;
`;

const Item = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  p {
    color: #0c3554;
    font-size: 1.4rem;
  }
`;

const Button = styled.button`
  width: 280px;
  height: 80px;
  position: absolute;
  top: 110px;
  right: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  border-radius: 50px;
  background: #FF962C;
  box-shadow: 0px -5.658px 0px 0px #FF5C16 inset;
  font-family: 'HakgyoansimDunggeunmisoTTF-B';
  color: #fff;
  font-size: 1.6rem;
  z-index: 100000 !important;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;

  &:hover {
    background: #ffa94d;
    cursor: pointer;
  }

  @media (max-width: 1280px) {
    right: 40px;
    width: 220px;
    height: 66px;
    font-size: 1.4rem;
  }
`;

const Badge = styled.div`
  border-radius: 26px;
  background: #0c3554;
  color: #fff;
  padding: 6px 20px;
  font-size: 1.4rem;
`;

const Text = styled.div`
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 100;
  width: 90%;

  * {
    font-family: "HakgyoansimDunggeunmisoTTF-R" !important;
  }

  p {
    color: #0c3554;
    font-size: 2rem;
  }
`;
const ResultText = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 200px;
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  background: linear-gradient(
    90deg,
    rgba(186, 225, 255, 0) 0%,
    #89e3ff 50%,
    rgba(186, 225, 255, 0) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  * {
    font-family: "HakgyoansimDunggeunmisoTTF-R" !important;
  }

  svg {
    position: absolute;
    top: -16%;
  }
  p {
    color: #0c3554;
    font-size: clamp(1.8rem, 4vw, 3rem);
    font-weight: 400;
    padding: 0 40px;
    text-align: center;

    @media (max-width: 1280px) {
      font-size: 2rem;
    }
  }
`;
const Modal = styled.div`
  width: 80%;
  height: 80%;
  max-width: 860px;
  max-height: 530px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999999;
  border-radius: 50px;
  overflow: hidden;
  
  .modal {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .modal__title {
    width: 100%;
    background: #0c3554;
    color: #fff;
    text-align: center;
    padding: 16px 0;
    font-size: 38px;
    font-family: "HakgyoansimDunggeunmisoTTF-B";
  }
  .modal__message {
    font-size: 26px;
    text-align: center;
    line-height: 50px;
    color: #0c3554;
  }
  .modal__buttons {
    display: flex;
    gap: 32px;
    padding-bottom: 40px;

    .modal__button {
      display: flex;
      width: 280px;
      height: 80px;
      padding: 19px 0px;
      justify-content: center;
      align-items: center;
      color: #FFF;
      font-family: "HakgyoansimDunggeunmisoTTF-B";
      font-size: 34px;
    }
    .modal__button--cancel {
      border-radius: 50px;
      background: #ff962c;
      box-shadow: 0px -5.658px 0px 0px #ff5c16 inset;
    }
    .modal__button--confirm {
      border-radius: 50px;
      background: #1499ff;
      box-shadow: 0px -5.658px 0px 0px #0056d6 inset;
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  z-index: 9999998;
`;
