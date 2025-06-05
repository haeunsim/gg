import styled from "styled-components";
import { motion } from "framer-motion";
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
  margin-top: 50px;
  border-radius: 56px 56px 0 0;
  background: linear-gradient(203deg, #004e8a 12.22%, #50ebf3 114.5%);
  box-shadow: 0px 4px 23px 10px rgba(0, 78, 138, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 40px 0px;
  box-sizing: border-box;

  .gomi {
    position: absolute;
    width: 239px;
    left: 9%;
    bottom: -5%;
    transform: scaleX(-1);
    z-index: 1000;

    @media (max-width: 1280px) {
      width: 200px;
      left: 50px;
    }
    @media (max-width: 960px) {
      width: 160px;
    }
  }
  .bee {
    position: absolute;
    width: 286px;
    right: 9%;
    bottom: -5%;
    transform: scaleX(-1);
    z-index: 1000;

    @media (max-width: 1280px) {
      width: 240px;
      right: 50px;
    }
    @media (max-width: 960px) {
      width: 180px;
    }
  }
  @media (max-width: 960px) {
    width: 100%;
    padding: 60px 40px 0px;
    margin-top: 30px;
  }
  @media (max-width: 960px) {
    width: 100%;
    padding: 40px 20px 0px;
    margin-top: 20px;
  }
`;

const BgIcon1 = styled(motion.div)`
  position: absolute;
  top: ${props => props.$isMain ? '25%' : '9%'};
  left: ${props => props.$isMain ? '10%' : '5%'};
  width: ${props => props.$isMain ? '280px' : '170px'};
  height: ${props => props.$isMain ? '280px' : '170px'};
  background-image: url(${bgIcon1});
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.5;
  z-index: 1;
  pointer-events: none;
`;

const BgIcon2 = styled(motion.div)`
  position: absolute;
  top: ${props => props.$isMain ? '60%' : '20%'};
  left: ${props => props.$isMain ? '4%' : '25%'};
  width: ${props => props.$isMain ? '170px' : '120px'};
  height: ${props => props.$isMain ? '170px' : '120px'};
  background-image: url(${bgIcon2});
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.5;
  z-index: 1;
  pointer-events: none;
`;

const BgIcon3 = styled(motion.div)`
  position: absolute;
  top: ${props => props.$isMain ? '38%' : '18%'};
  right: ${props => props.$isMain ? '10%' : '28%'};
  width: ${props => props.$isMain ? '220px' : '170px'};
  height: ${props => props.$isMain ? '220px' : '170px'};
  background-image: url(${bgIcon3});
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.5;
  z-index: 1;
  pointer-events: none;
`;

const BgIcon4 = styled(motion.div)`
  position: absolute;
  top: ${props => props.$isMain ? '12%' : '15%'};
  right: ${props => props.$isMain ? '7%' : '5%'};
  width: ${props => props.$isMain ? '180px' : '170px'};
  height: ${props => props.$isMain ? '180px' : '170px'};
  background-image: url(${bgIcon4});
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.5;
  z-index: 1;
  pointer-events: none;
`;

const Container = ({ children, isMain }) => {
  return (
    <Wrap>
      <Layer>
        <BgIcon1 
          $isMain={isMain}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <BgIcon2 
          $isMain={isMain}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <BgIcon3 
          $isMain={isMain}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <BgIcon4 
          $isMain={isMain}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {children}
      </Layer>
    </Wrap>
  );
};

export default Container;
