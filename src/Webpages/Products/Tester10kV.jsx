import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import testerImg from "../../assets/ProductsImage/2.png";
import "../CSS/singlePages.css";
import { MdPlayArrow } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Tester10kV = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    AOS.refresh();
  }, []);

  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [showCatalogueModal, setShowCatalogueModal] = useState(false);

  const openInquiry = () => setShowInquiryModal(true);
  const closeInquiry = () => setShowInquiryModal(false);

  const openCatalogue = () => setShowCatalogueModal(true);
  const closeCatalogue = () => setShowCatalogueModal(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="single-product-section">
        <div className="top-section-bg">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6} className="single-product-image-col">
                <div className="product-image-wrapper">
                  <img
                    src={testerImg}
                    alt="10 kV Insulation Tester"
                    className="single-product-img"
                  />
                </div>
              </Col>

              <Col xs={12} md={6} className="single-product-info-col mt-4">
                <h1 className="single-product-title">10kV Insulation Tester</h1>
                <h5 className="single-product-model">
                  DIT 10K68 / DIT 10K68_b
                </h5>
                <p style={{ color: "orange" }}>
                  <b>Order Code - DIT10K68</b>
                </p>

                <h4 className="single-product-description">
                  TEAMS DIT 10K68 – 10kV Insulation Resistance Tester is
                  designed for power utilities and service companies working in
                  generation, transmission and distribution.
                </h4>

                <Row className="key-features" data-aos="zoom-in">
                  <h5>
                    <MdPlayArrow className="icon" /> Key Features
                  </h5>

                  <Col xs={12} className="feature-col">
                    <Row className="feature-row">
                      <Col xs={2} md={1} className="feature-number">
                        1
                      </Col>
                      <Col xs={10} md={11}>
                        <p>
                          <strong>Short Circuit Current 8mA</strong>
                        </p>
                      </Col>
                    </Row>
                  </Col>

                  <Col xs={12} className="feature-col">
                    <Row className="feature-row">
                      <Col xs={2} md={1} className="feature-number">
                        2
                      </Col>
                      <Col xs={10} md={11}>
                        <p>
                          <strong>Interference Noise Rejection</strong>
                        </p>
                      </Col>
                    </Row>
                  </Col>

                  <Col xs={12} className="feature-col">
                    <Row className="feature-row">
                      <Col xs={2} md={1} className="feature-number">
                        3
                      </Col>
                      <Col xs={10} md={11}>
                        <p>
                          <strong>Inbuilt Thermal Printer</strong>
                        </p>
                      </Col>
                    </Row>
                  </Col>

                  <Col xs={12} className="feature-col">
                    <Row className="feature-row">
                      <Col xs={2} md={1} className="feature-number">
                        4
                      </Col>
                      <Col xs={10} md={11}>
                        <p>
                          <strong>Easily Accessible Battery</strong>
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <div className="button-group mt-3">
                  <Button className="btn-download" onClick={openCatalogue}>
                    Download Catalogue
                  </Button>
                  <Button className="btn-inquiry" onClick={openInquiry}>
                    Send Inquiry
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Tester10kV;
