import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container";
import Header from "../components/HeaderWhite";
import useExperimentStore from "../store/experimentStore";

const SelectPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAllComplete = useExperimentStore((state) => state.isAllComplete());

  const handleExitClick = () => {
    if (isAllComplete) {
      navigate("/result");
    } else {
      setIsModalOpen(true);
    }
  };

  const handleModalConfirm = () => {
    setIsModalOpen(false);
    navigate("/goals");
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Header/>
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

    </Container>
  );
};

const Title = styled.h2`
  margin: 2rem 0;
  color: #fff;
  font-size: 2.5rem;
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
  box-shadow: 0px 10px 20px rgba(12, 53, 84, 0.1);
  
  .img {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 300px;
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
  bottom: 3rem;
  width: 200px;
  height: 70px;
  border-radius: 56px;
  background: #1499ff;
  box-shadow: 0px -8px 0px 0px #0056d6 inset;
  color: #fff;
  font-size: 1.4rem;
  font-family: "HakgyoansimDunggeunmisoTTF-B";
`;

const Badge = styled.span`
  border-radius: 38px;
  background: #1499FF;
  color: #fff;
  font-size: 1.4rem;
  padding: 8px 20px;
  font-family: 'HakgyoansimDunggeunmisoTTF-B';
`
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

export default SelectPage;
