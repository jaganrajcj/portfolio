import React from "react";
import { FaCode } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { RiStockLine } from "react-icons/ri"
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          {/* My <span className="green">services</span> */}
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={FaCode}
            title={"Web Developer"}
            disc={`As a web developer, I thrive on turning ideas into engaging online experiences. From crafting clean and efficient code to designing user-friendly interfaces, I'm dedicated to creating websites that provide seamless functionality.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={MdSecurity}
            title={"Penetration Tester"}
            disc={`Security is paramount in today's digital landscape, and I'm no stranger to it. With a background in web penetration testing, I specialize in identifying vulnerabilities and ensuring the robustness of web applications. `}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={RiStockLine}
            title={"Forex Trader"}
            disc={`Beyond the world of coding and cybersecurity, I'm an avid forex trader. My analytical mindset and in-depth understanding of market trends allow me to navigate the complexities of the forex market effectively. `}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
