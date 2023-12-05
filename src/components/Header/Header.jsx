import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import { Button } from 'reactstrap';


const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
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

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top fixed-top">
        <Container>
          <Row>
            <Col lg="2" md="6" sm="6">
              <div className="header__top__left"  style={{ marginTop: '5px' }}>
                <span className="header__top__help">
                Need Help?<i class="ri-phone-fill"></i> +212654014259
                </span>
              </div>
            </Col>
            <Col lg="8" md="6" sm="6" >
            <img width="33px" height="33px"
              src="https://th.bing.com/th/id/R.7e25b0ad261047c411d2ff100727e79a?rik=B%2bxaOzDZ1ko%2bxg&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2011%2f03%2fbmw-logo_54043.jpg&ehk=rxlgA2hUV26Hz337e%2bTdLicspOlHWiuGO5ceQr4OrPI%3d&risl=&pid=ImgRaw&r=0"
              alt="Logo 1"
              style={{ marginRight: '15px' }}
              className="imgs-logo logos"
            />
            <img width="36px" height="36px"
              src="https://th.bing.com/th/id/OIP.6Pb2ldDSaOVGRE5cwU24VwHaHa?w=1500&h=1500&rs=1&pid=ImgDetMain"
              alt="Logo 1"
              style={{ marginRight: '15px' }}
              className="imgs-logo"
            />
             <img width="36px" height="34px"
              src="https://i.pinimg.com/originals/d6/3a/e6/d63ae6d7be22dcae3da9a295c7bfaafd.png"
              alt="Logo 1"
              style={{ marginRight: '15px' }}
              className="imgs-logo"
            />
            <img width="39px" height="35px"
              src="https://th.bing.com/th/id/R.feb211f3cd0b93a08cfdc062a577c43c?rik=UtFcimXBcgtKXg&riu=http%3a%2f%2fpicsnews.net%2fwp-content%2fuploads%2f2021%2f01%2f20-1.jpg&ehk=B4ZEEk4w0ON5Lr6HpCWd7K06BP1bDHGA1unF4rfgkH0%3d&risl=&pid=ImgRaw&r=0"
              alt="Logo 1"
              style={{ marginRight: '15px' }}
              className="imgs-logo"
            />
             <img width="41px" height="43px"
              src="https://www.incpak.com/wp-content/uploads/2021/06/KIA-Car-Delivery-Delay.jpg"
              alt="kia"
              style={{ marginRight: '15px' }}
              className="imgs-logo"
            />
            
            <img width="44px" height="48px"
              src="https://logos-marques.com/wp-content/uploads/2021/02/Symbole-Ford.jpg"
              alt="ford"
              style={{ marginRight: '15px' }}
              className="imgs-logo"
            />
             <img width="50px" height="37px"
              src="https://www.actionfonts.com/wp-content/uploads/nissan-font.jpg"
              alt="kia"
              style={{ marginRight: '15px' }}
              className="imgs-logo"
            />
           <img width="35px" height="32px"
              src="https://data.topquizz.com/distant/question/big/6/3/2/3/763236_7fe7d5a8be.jpg"
              alt="hyundai"
              style={{ marginRight: '15px' }}
              className="imgs-logo"
            />
           <img width="50px" height="40px"
              src="https://www.quizz.biz/uploads/quizz/760959/8_S7tyU.jpg"
              alt="clio"
              style={{ marginRight: '15px' , marginTop:"2px"}}
              className="imgs-logo"
            />
            <img width="30px" height="32px"
              src="https://th.bing.com/th/id/OIP.pOE4HGluA8K68ZJvK8rYTQHaG1?w=736&h=679&rs=1&pid=ImgDetMain"
              alt="citroin"
              style={{ marginRight: '15px' , marginTop:"2px"}}
              className="imgs-logo"
            />
            <img width="36px" height="30px"
              src="https://th.bing.com/th/id/OIP.-m6UxvNHkY60MhrRAfNgvAHaHa?rs=1&pid=ImgDetMain"
              alt="puegeot"
              style={{ marginRight: '15px' , marginTop:"2px"}}
              className="imgs-logo"
            />
            <img width="40px" height="40px"
              src="https://th.bing.com/th/id/OIP._HDLthWi9UtVyDGrwXKjIgAAAA?w=400&h=400&rs=1&pid=ImgDetMain"
              alt="Opel"
              style={{ marginRight: '15px' , marginTop:"2px"}}
              className="imgs-logo"
            />
            <img width="50px" height="45px"
              src="https://www.logolynx.com/images/logolynx/fa/fa970c780627f2fb9371cc2156d85e52.jpeg"
              alt="jeep"
              style={{ marginRight: '15px' , marginTop:"2px"}}
              className="imgs-logo"
            />
            <img width="55px" height="35px"
              src="https://th.bing.com/th/id/OIP.e3mGp92Z46gEZ0h5ZiYTewHaC9?rs=1&pid=ImgDetMain"
              alt="audi"
              style={{ marginRight: '15px' , marginTop:"2px"}}
              className="imgs-logo"
            />
            <img width="46px" height="40px"
              src="https://089-kfz-gutachten-muenchen.de/wp-content/uploads/dacia-fahrzeughersteller.jpg"
              alt="dacia"
              className="img-logo"
            />
            </Col>
            <Col lg="2" md="6" sm="6" className=" d-flex align-items-center justify-content-end ">
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i class="ri-car-line"></i>
                    <span>
                    Automobil  <br />Loc Nour
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Morrocco</h4>
                  <h6>Asilah City, Morrocco</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <div className="search__box mr-3">
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar ">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="header__top__right d-flex align-items-center justify-content-end gap-3" style={{ marginTop: '8px' }}>
              <Button
                tag={Link} to="#"
                className="d-flex align-items-center gap-1"
                style={{
                  color: 'black',
                  backgroundColor: 'white',
                  transition: 'background-color 0.3s, color 0.3s',
                  fontWeight:"bolder",
                }}
                active
                onMouseEnter={(e) => e.target.style.backgroundColor = 'red'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
              >
                <i ></i> Log In
              </Button>

              <Button
                tag={Link}
                to="#"
                className="d-flex align-items-center gap-1"
                style={{
                  color: 'black',
                  backgroundColor: 'white',
                  transition: 'background-color 0.3s, color 0.3s',
                  fontWeight:"bolder",
                }}
                active
                onMouseEnter={(e) => e.target.style.backgroundColor = 'red'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
              > 
              <i ></i> Sign Up
              </Button>
              </div>
          </div>
          
        </Container>
      </div>
    </header>
  );
};

export default Header;
