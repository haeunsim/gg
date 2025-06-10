import styled from "styled-components";
import { motion } from "framer-motion";
import bgIcon1 from "../assets/images/icon-idea.png";
import bgIcon2 from "../assets/images/icon-search.png";
import bgIcon3 from "../assets/images/icon-flask.png";
import bgIcon4 from "../assets/images/icon-microscope.png";

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

  @media (max-width: 768px) {
    min-height: 100vh;
    height: 100%;
    overflow-y: scroll;
  }
`;

const Layer = styled.div`
  width: 98%;
  height: 100%;
  margin-top: 50px;
  border-radius: 56px 56px 0 0;
  background: linear-gradient(203deg, #0077d2 12.22%, #91efa3 114.5%);
  /* background: linear-gradient(203deg, #004e8a 12.22%, #50ebf3 114.5%); */
  box-shadow: 0px 4px 23px 10px rgba(0, 78, 138, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 40px 0px;
  box-sizing: border-box;

  .tiger {
    position: absolute;
    width: 340px;
    left: 9%;
    bottom: -3%;
    z-index: 1000;

    @media (max-width: 1280px) {
      width: 250px;
      left: 50px;
    }
    @media (max-width: 960px) {
      width: 180px;
      display: none;
    }
  }
  .fox {
    position: absolute;
    width: 310px;
    right: 10%;
    bottom: -4%;
    z-index: 1000;
    overflow: hidden;

    @media (max-width: 1280px) {
      width: 240px;
      right: 50px;
    }
    @media (max-width: 960px) {
      width: 180px;
      bottom: 0;
    }
    @media (max-width: 480px) {
      right: -12px;
    }
  }
  @media (max-width: 960px) {
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding: 60px 40px 0px;
    margin-top: 30px;
  }
  @media (max-width: 480px) {
    padding: 80px 15px 40px;
    margin-top: 20px;
  }
`;

const BgIcon1 = styled(motion.div)`
  position: absolute;
  top: ${(props) => (props.$isMain ? "23%" : "23%")};
  left: ${(props) => (props.$isMain ? "8%" : "5%")};
  width: ${(props) => (props.$isMain ? "280px" : "280px")};
  height: ${(props) => (props.$isMain ? "280px" : "280px")};
  background-image: url(${bgIcon1});
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.15;
  z-index: 1;
  pointer-events: none;
  /* transform: rotate(-15.58deg); */
`;

const BgIcon2 = styled(motion.div)`
  position: absolute;
  top: ${(props) => (props.$isMain ? "63%" : "70%")};
  left: ${(props) => (props.$isMain ? "7%" : "5%")};
  width: ${(props) => (props.$isMain ? "179px" : "179px")};
  height: ${(props) => (props.$isMain ? "200px" : "200px")};
  background-image: url(${bgIcon2});
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.15;
  z-index: 1;
  pointer-events: none;
`;

const BgIcon3 = styled(motion.div)`
  position: absolute;
  top: ${(props) => (props.$isMain ? "42%" : "50%")};
  right: ${(props) => (props.$isMain ? "10%" : "5%")};
  width: ${(props) => (props.$isMain ? "200px" : "200px")};
  height: ${(props) => (props.$isMain ? "200px" : "200px")};
  background-image: url(${bgIcon3});
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.15;
  z-index: 1;
  pointer-events: none;
`;

const BgIcon4 = styled(motion.div)`
  position: absolute;
  top: ${(props) => (props.$isMain ? "12%" : "10%")};
  right: ${(props) => (props.$isMain ? "8%" : "10%")};
  width: ${(props) => (props.$isMain ? "210px" : "210px")};
  height: ${(props) => (props.$isMain ? "240px" : "240px")};
  background-image: url(${bgIcon4});
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.15;
  z-index: 1;
  pointer-events: none;
`;

const Container = ({ children, isMain }) => {
  return (
    <Wrap>
      <Layer>
        <BgIcon1
          $isMain={isMain}
          animate={{
            rotate: [-15.58, -15.58, -15.58],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <BgIcon2
          $isMain={isMain}
          animate={{
            rotate: [-18.682, -18.682, -18.682],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <BgIcon3
          $isMain={isMain}
          animate={{
            rotate: [29.002, 29.002, 29.002],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <BgIcon4
          $isMain={isMain}
          animate={{
            rotate: [-21.437, -21.437, -21.437],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {children}
      </Layer>
    </Wrap>
  );
};

export default Container;
