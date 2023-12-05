import React from "react";
import { Container } from "reactstrap";
import "../../styles/common-section.css";

const CommonSection = ({ title , fontSize}) => {
  return (
    <section className="common__section mb-5">
      <Container className="text-center">
        <h1 style={{ fontSize: fontSize,fontWeight: 'bold'  }} className="text-light">{title}</h1>
      </Container>
    </section>
  );
};

export default CommonSection;
