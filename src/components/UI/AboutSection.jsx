import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/img5.jpg";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h3 className="section__subtitle">About Us</h3>
              <h3 className="section__title">Welcome to Automobil Loc Nour</h3>
              <p className="section__description">
             Automobil Loc Nour, your premier destination for hassle-free and reliable car rentals. At Automobil Loc Nour, we pride ourselves on providing top-notch vehicles and exceptional service to meet all your transportation needs.

            With a fleet of well-maintained cars ranging from sleek sedans to spacious SUVs, we offer a diverse selection to cater to various preferences and requirements. Our commitment to customer satisfaction is at the core of our business, and we strive to make every rental experience seamless and enjoyable.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img custom-margin" >
            <img src={aboutImg} alt="" className="w-100 " />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
