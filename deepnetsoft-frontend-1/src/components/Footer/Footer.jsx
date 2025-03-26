import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"; 

function Footer() {
  return (
    <footer className="footer">
      <Container style={{ maxWidth: "1190px" }}>
        <Row className="align-items-center">
          
          <Col md={4} xs={12} className="footer-box order-1 order-md-2">
            <div className="section-box logo-section-box">
              <div className="logo-box">
                <img src="/logo.png" alt="Deep Net Soft" className="logo" />
              </div>
              <h4 className="brand-name deep">
                DEEP <span className="net">NET</span>{" "}
                <span className="soft">SOFT</span>{" "}
              </h4>
              <div className="social-icons">
                <img src="./social media.png" alt="" />
              </div>
            </div>
          </Col>

          
          <Col md={4} xs={12} className="footer-box order-2 order-md-1">
            <div className="section-box">
              <h5 className="footer-title">CONNECT WITH US</h5>
              <div>
                <p>
                  <span>
                    <img src="./phone.png" alt="phone" />
                  </span>{" "}
                  +91 9561784340
                </p>
                <p>
                  <span>
                    <img src="./email.png" alt="email" />
                  </span>{" "}
                  info@deepnetsoft.com
                </p>
              </div>
            </div>
          </Col>

          
          <Col md={4} xs={12} className="footer-box order-3 order-md-3">
            <div className="section-box">
              <h5 className="footer-title">FIND US</h5>
              <div>
                <p>
                  <span>
                    <img src="./location.png" alt="" />
                  </span>{" "}
                  First floor, Geo Infopark,
                  <br />
                  Infopark EXPY, Kakkanad
                </p>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
      <div className="bottom">

        <p className="copyright">© 2024 Deepnetsoft Solutions. All rights reserved</p>
        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
