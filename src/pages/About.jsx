import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";


import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  
  return (
    <Helmet title="About">
      <CommonSection title="About Us" fontSize="50px" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" height="400px" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                Committed to ensuring your safety on every journey, we provide reliable and secure ride solutions. Our dedicated team prioritizes your well-being, offering peace of mind as you travel. With a steadfast commitment to safety, we strive to deliver a secure and comfortable ride experience, making your every trip with us a trustworthy and enjoyable adventure.
                Committed to ensuring your safety on every journey, we provide reliable and secure ride solutions. Our dedicated team prioritizes your well-being, offering peace of mind as you travel. With a steadfast commitment to safety, we strive to deliver a secure and comfortable ride experience, making your every trip with us a trustworthy and enjoyable adventure we strive to deliver a secure and comfortable ride experience.
                </p>
                
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <br></br>
      <br></br>
      <BecomeDriverSection />
      
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
