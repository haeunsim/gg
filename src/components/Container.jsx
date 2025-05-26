import styled from "styled-components";
import bgIcon1 from "../assets/images/bg-icon-01.png";
import bgIcon2 from "../assets/images/bg-icon-02.png";
import bgIcon3 from "../assets/images/bg-icon-03.png";
import bgIcon4 from "../assets/images/bg-icon-04.png";

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #08bbdd 0%, #5afff1 100%);
  box-sizing: border-box;
  padding: 0 1rem;
  overflow: hidden;
`;

const Layer = styled.div`
  width: 98%;
  height: 100%;
  background: linear-gradient(203deg, #004e8a 12.22%, #50ebf3 114.5%);
  box-shadow: 0px 4px 23px 10px rgba(0, 78, 138, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
`;

const BgIcon = styled.div`
  position: absolute;
  width: 170px;
  height: 170px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.5;
  z-index: 10;
`;

const BgIcon1 = styled(BgIcon)`
  top: -2%;
  left: 5%;
  background-image: url(${bgIcon1});
`;

const BgIcon2 = styled(BgIcon)`
  width: 120px;
  height: 120px;
  top: 8%;
  left: 25%;
  background-image: url(${bgIcon2});
`;

const BgIcon3 = styled(BgIcon)`
  top: 8%;
  right: 18%;
  background-image: url(${bgIcon3});
`;

const BgIcon4 = styled(BgIcon)`
  top: 3%;
  right: 2%;
  background-image: url(${bgIcon4});
`;

const Container = ({ children }) => {
  return (
    <Wrap>
      <Layer>
        <BgIcon1 />
        <BgIcon2 />
        <BgIcon3 />
        <BgIcon4 />
        {children}
      </Layer>
    </Wrap>
  );
};

export default Container;
