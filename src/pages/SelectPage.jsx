import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import Container from "../components/Container";
import Header from "../components/HeaderWhite";
import useExperimentStore from "../store/experimentStore";
import balance from "../assets/images/balance-img.png";
import lever from "../assets/images/lever-img.png";
import slope from "../assets/images/slope-img.png";

const SelectPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAllComplete = useExperimentStore((state) => state.isAllComplete());
  const isBalanceComplete = useExperimentStore(
    (state) => state.isBalanceComplete
  );
  const isLeverComplete = useExperimentStore((state) => state.isLeverComplete);
  const isSlopeComplete = useExperimentStore((state) => state.isSlopeComplete);

  const handleExitClick = () => {
    if (isAllComplete) {
      navigate("/result");
    } else {
      setIsModalOpen(true);
    }
  };

  const handleModalConfirm = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Header />
      <Title>힘과 우리 생활</Title>
      <Flex>
        <Item
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{
            type: "tween",
            ease: [0.4, 0, 0.2, 1],
            duration: 0.4,
            scale: {
              type: "tween",
              ease: [0.4, 0, 0.2, 1],
              duration: 0.4,
            },
          }}
          onClick={() => navigate("/balance")}
        >
          {isBalanceComplete && (
            <div className="done">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="88"
                height="88"
                viewBox="0 0 88 88"
                fill="none"
              >
                <circle
                  cx="44"
                  cy="44"
                  r="42"
                  fill="white"
                  stroke="#34C9FF"
                  strokeWidth="4"
                />
                <path
                  d="M28 48.1771L37.3075 57.714L63.4286 32.5712"
                  stroke="#34C9FF"
                  strokeWidth="7.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
          <Badge>탐구1</Badge>
          <h4>
            <span>양팔저울</span>로<br />
            무게 비교하기
          </h4>
          <p>
            수평 잡기를 이용하여
            <br />
            물체의 무게를 비교해 보아요.
          </p>
          <div className="img balance">
            <img src={balance} alt="양팔저울 이미지" />
          </div>
        </Item>
        <Item
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{
            type: "tween",
            ease: [0.4, 0, 0.2, 1],
            duration: 0.4,
            scale: {
              type: "tween",
              ease: [0.4, 0, 0.2, 1],
              duration: 0.4,
            },
          }}
          onClick={() => navigate("/lever")}
        >
          {isLeverComplete && (
            <div className="done">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="88"
                height="88"
                viewBox="0 0 88 88"
                fill="none"
              >
                <circle
                  cx="44"
                  cy="44"
                  r="42"
                  fill="white"
                  stroke="#34C9FF"
                  strokeWidth="4"
                />
                <path
                  d="M28 48.1771L37.3075 57.714L63.4286 32.5712"
                  stroke="#34C9FF"
                  strokeWidth="7.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
          <Badge>탐구2</Badge>
          <h4>
            <span>지레</span>를 이용해
            <br />
            물건 들기
          </h4>
          <p>
            막대 지레를 이용해
            <br />
            무거운 물체를 들어 보아요.
          </p>
          <div className="img lever">
            <img src={lever} alt="지레 이미지" />
          </div>
        </Item>
        <Item
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{
            type: "tween",
            ease: [0.4, 0, 0.2, 1],
            duration: 0.4,
            scale: {
              type: "tween",
              ease: [0.4, 0, 0.2, 1],
              duration: 0.4,
            },
          }}
          onClick={() => navigate("/slope")}
        >
          {isSlopeComplete && (
            <div className="done">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="88"
                height="88"
                viewBox="0 0 88 88"
                fill="none"
              >
                <circle
                  cx="44"
                  cy="44"
                  r="42"
                  fill="white"
                  stroke="#34C9FF"
                  strokeWidth="4"
                />
                <path
                  d="M28 48.1771L37.3075 57.714L63.4286 32.5712"
                  stroke="#34C9FF"
                  strokeWidth="7.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
          <Badge>탐구3</Badge>
          <h4>
            <span>빗면</span>을 이용해
            <br />
            물건 들기
          </h4>
          <p>
            경사면을 따라 물체를
            <br />
            들어 올려 보아요.
          </p>
          <div className="img slope">
            <img src={slope} alt="경사면 이미지" />
          </div>
        </Item>
      </Flex>

      <Button onClick={handleExitClick}>실험 종료</Button>

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
                <button
                  className="modal__button modal__button--cancel"
                  onClick={handleModalCancel}
                >
                  아니요
                </button>
                <button
                  className="modal__button modal__button--confirm"
                  onClick={handleModalConfirm}
                >
                  예
                </button>
              </div>
            </div>
          </Modal>
        </>
      )}
    </Container>
  );
};

const Title = styled.h2`
  margin: 2rem 0;
  color: #fff;
  font-size: 2.5rem;
  font-family: "HakgyoansimDunggeunmisoTTF-B";

  @media (max-width: 1280px) {
    margin: 0 0 40px;
    font-size: 2.125rem;
  }
  @media (max-width: 768px) {
    margin: 0 0 20px;
  }
`;

const Flex = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  gap: 1.8rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0 60px;
  }
`;
const Item = styled(motion.div)`
  position: relative;
  width: 30%;
  padding: 2rem;
  background: #fff;
  border-radius: 56px;
  text-align: center;
  cursor: pointer;
  color: #0c3554;
  box-shadow: 0px 10px 20px rgba(12, 53, 84, 0.1);

  .done {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;
    border-radius: 56px;
    background-color: #fff;
    background: linear-gradient(
      180deg,
      rgba(137, 227, 255, 0) 52.24%,
      rgba(137, 227, 255, 0.6) 91.85%,
      #89e3ff 110.26%
    );

    svg {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 2rem;
    }
  }

  .img {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;

    > img {
      width: 90%;
    }

    &.balance img {
      width: 75%;
    }
    &.slope img {
      width: 80%;
    }
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }

  h4 {
    margin: 30px 0;
    font-size: 2rem;
    font-family: "HakgyoansimDunggeunmisoTTF-R";

    span {
      font-family: "HakgyoansimDunggeunmisoTTF-B";
    }

    @media (max-width: 1280px) {
      font-size: 28px;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Button = styled.button`
  position: absolute;
  right: 4rem;
  bottom: 2rem;
  width: 200px;
  height: 70px;
  border-radius: 56px;
  background: #1499ff;
  box-shadow: 0px -8px 0px 0px #0056d6 inset;
  color: #fff;
  font-size: 1.6rem;
  font-family: "HakgyoansimDunggeunmisoTTF-B";

  &:hover {
    background: #0693ff;
  }
  @media (max-width: 480px) {
    width: 160px;
    height: 60px;
    font-size: 22px;
    right: 20px;
    bottom: 20px;
  }
`;

const Badge = styled.span`
  border-radius: 38px;
  background: #1499ff;
  color: #fff;
  font-size: 1.4rem;
  padding: 8px 20px;
  font-family: "HakgyoansimDunggeunmisoTTF-B";
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
    padding: 0 20px;
  }

  .modal__buttons {
    display: flex;
    gap: 32px;
    padding-bottom: 40px;
    flex-wrap: wrap;
    justify-content: center;

    .modal__button {
      display: flex;
      width: 280px;
      height: 80px;
      padding: 19px 0px;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-family: "HakgyoansimDunggeunmisoTTF-B";
      font-size: 34px;
      border-radius: 50px;

      @media (max-width: 480px) {
        width: 160px;
        height: 60px;
        font-size: 22px;
        padding: 12px 0;
      }
    }

    .modal__button--cancel {
      background: #ff962c;
      box-shadow: 0px -5.658px 0px 0px #ff5c16 inset;
    }

    .modal__button--confirm {
      background: #1499ff;
      box-shadow: 0px -5.658px 0px 0px #0056d6 inset;
    }
  }

  @media (max-width: 480px) {
    width: 90%;
    height: auto;
    max-height: 90%;
    border-radius: 30px;

    .modal__title {
      font-size: 26px;
      padding: 12px 0;
    }

    .modal__message {
      font-size: 18px;
      line-height: 30px;
      padding: 40px 20px;
    }

    .modal__buttons {
      gap: 16px;
      padding-bottom: 20px;
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999998;
`;

export default SelectPage;
