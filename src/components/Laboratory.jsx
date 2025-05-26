import React from "react";
import styled from "styled-components";

const Laboratory = () => {
  return (
    <Wrap>
      <Flex>
        <Item>
          <Badge>실험실</Badge>
          <p>힘과 우리의 생활 - 탐구 1 &lt;양팔저울로 무게 비교하기&gt;</p>
        </Item>
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
          >
            <path
              d="M3.84153 10.1052L3.17174 10.775L2.50195 10.1052L3.17174 9.43545L3.84153 10.1052ZM19.9468 17.6842C19.9468 17.9354 19.847 18.1764 19.6693 18.3541C19.4917 18.5317 19.2507 18.6316 18.9994 18.6316C18.7482 18.6316 18.5072 18.5317 18.3295 18.3541C18.1519 18.1764 18.0521 17.9354 18.0521 17.6842H19.9468ZM7.90858 15.5119L3.17174 10.775L4.51132 9.43545L9.24816 14.1723L7.90858 15.5119ZM3.17174 9.43545L7.90858 4.69861L9.24816 6.03819L4.51132 10.775L3.17174 9.43545ZM3.84153 9.15787H13.3152V11.0526H3.84153V9.15787ZM19.9468 15.7895V17.6842H18.0521V15.7895H19.9468ZM13.3152 9.15787C15.074 9.15787 16.7608 9.85655 18.0044 11.1002C19.2481 12.3439 19.9468 14.0306 19.9468 15.7895H18.0521C18.0521 14.5332 17.553 13.3283 16.6647 12.44C15.7763 11.5517 14.5715 11.0526 13.3152 11.0526V9.15787Z"
              fill="white"
            />
          </svg>
          다른 활동 선택하기
        </Button>
      </Flex>

      <Textwrap>
        Q. 물체를 위로 들어 올리는데 필요한 힘이 얼마인지 확인해 보세요.
      </Textwrap>
    </Wrap>
  );
};

export default Laboratory;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.61) 0%,
    rgba(114, 208, 255, 0.61) 100%
  );
  box-sizing: border-box;
  overflow: hidden;
`;
const Flex = styled.div`
  width: 100%;
  padding: 16px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(180deg, #fff -25%, #a8deff 342.95%);
  box-sizing: border-box;
`;
const Item = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  p {
    color: #0C3554;
    font-size: 1.125rem;
  }
`;
const Button = styled.button`
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 14px;
  border-radius: 8px;
  background: #ff962c;
  box-shadow: 0px -2px 0px 0px #ff5c16 inset;
  color: #fff;

  svg {
    width: 14px;
  }
`;
const Badge = styled.div`
  border-radius: 26px;
  background: #0c3554;
  color: #fff;
  padding: 6px 12px;
`;
const Textwrap = styled.div`
  background: #fff;
  border-radius: 100px;
  border: 2px solid #65a8e3;
  box-shadow: 0px 2px 0px 0px #428bcb;
  padding: 10px;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
  color: #236daf;
  font-size: 1rem;
`;
