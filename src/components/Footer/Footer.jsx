import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "home",
  },

  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    
    <footer className="footer ">

      <Container>
        
        <Row>
        <Col lg="5" md="4" sm="12" className="mb-4 mb-md-0 text-center d-flex align-items-center">
          <div>
            
          </div>
        </Col>
        <Col lg="5" md="4" sm="12" className="mb-4 mb-md-0 text-center d-flex align-items-center">
          <div className="logo footer__logo">
            <h1>
              <Link to="/home" className="d-flex align-items-center gap-2">
                <i className="ri-car-line"></i>
                <span>
                  Automobil <br /> Rental
                </span>
              </Link>
            </h1>
            
          </div>
        </Col>
        <Col lg="2" md="4" sm="12" className="mb-4 mb-md-0 text-center d-flex align-items-center">
          <div>
            
          </div>
        </Col>
        
          <Col lg="3" md="4" sm="6"  className="mb-4">
            <div className="mb-4">
              <h5 className="footer__link-title"></h5>
              
            </div>
          </Col>
          <Col lg="12" md="4" sm="6" className="mb-4">
            <div className="mb-4 d-flex">
              <ListGroup className="flex-row">
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-0 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          

          <Col lg="12">
            <div className="footer__bottom">
              <p id="p" className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
