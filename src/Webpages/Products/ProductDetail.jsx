import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { productsData } from "../../data/productsData";
import "../CSS/singlePages.css";
import "./ProductDetail.css";
import { MdPlayArrow } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import cable from "../../assets/images/Cable.jpg";
import Tansformer from "../../assets/images/Transformer.jpg";
import breaker from "../../assets/images/breaker.jpg";
import powergrid from "../../assets/images/powergrid.jpg";
import station from "../../assets/images/power-substation.avif";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    AOS.refresh();
  }, []);

  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [showCatalogueModal, setShowCatalogueModal] = useState(false);

  // HANDLERS
  const openInquiry = () => setShowInquiryModal(true);
  const closeInquiry = () => setShowInquiryModal(false);

  const openCatalogue = () => setShowCatalogueModal(true);
  const closeCatalogue = () => setShowCatalogueModal(false);

  // Find the product by ID
  const product = productsData.find((p) => p.id === id);

  // If product not found, show error
  if (!product) {
    return (
      <Container className="mt-5 text-center">
        <h2>Product Not Found</h2>
        <Button onClick={() => navigate("/allProducts")} className="mt-3">
          Back to All Products
        </Button>
      </Container>
    );
  }

  return (
    <>
      <div className="single-product-section">
        <div className="top-section-bg">
          <Container>
            <Row className="align-items-center">
              {/* left Side image */}
              <Col xs={12} md={6} className="single-product-image-col">
                <div className="product-image-wrapper">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="single-product-img"
                  />
                </div>
              </Col>

              {/* left SIDE TEXT CONTENT */}
              <Col xs={12} md={6} className="single-product-info-col mt-4">
                {/* DEVICE NAME */}
                <h1 className="single-product-title">{product.name}</h1>

                {/* MODEL NUMBER */}
                <h5 className="single-product-model">{product.model}</h5>
                {product.orderCode && (
                  <p style={{ color: "orange" }}>
                    {" "}
                    <b>Order Code - {product.orderCode} </b>{" "}
                  </p>
                )}

                {/* PARAGRAPH */}
                <h4 className="single-product-description">
                  {product.description}
                </h4>

                {/* FEATURES */}
                {product.features && product.features.length > 0 && (
                  <Row className="key-features" data-aos="zoom-in">
                    <h5>
                      <MdPlayArrow className="icon" /> Key Features
                    </h5>

                    {product.features.map((feature, index) => (
                      <Col xs={12} className="feature-col" key={index}>
                        <Row className="feature-row">
                          <Col xs={2} md={1} className="feature-number">
                            {index + 1}
                          </Col>
                          <Col xs={10} md={11}>
                            <p>
                              <strong> {feature}</strong>
                              <br />
                            </p>
                          </Col>
                        </Row>
                      </Col>
                    ))}
                    <div className="button-group d-flex mt-4">
  <Button
    className="theme-button-secondary me-3"
    onClick={openInquiry}
  >
    Send Inquiry
  </Button>

  <Button
    className="theme-button-secondary"
    onClick={openCatalogue}
  >
    View Catalogue
  </Button>
</div>

                  </Row>
                )}

                {/* <Button variant="primary" className="buy-btn">Enquire Now</Button> */}
              </Col>
            </Row>
          </Container>
        </div>
        <Container className="five-image-container">
          <Row className="five-image-bootstrap mt-3 mb-4 d-flex ">
            <Col xs={12} className="text-center mb-3 ">
              <h2 style={{ color: "#eb7a11", fontSize: "30px" }}>Applications</h2>
            </Col>
            {/* TOP ROW (3 circles) */}

            <Row className="justify-content-center mb-4">
              <Col
                xs={6}
                sm={6}
                md={3}
                lg={2}
                className="d-flex justify-content-center circle"
              >
                <div className="circle-item" data-aos="zoom-in">
                  <img src={cable} alt="appli1" />
                  <p>Cabel</p>
                </div>
              </Col>

              <Col
                xs={6}
                sm={6}
                md={3}
                lg={2}
                className="d-flex justify-content-center circle"
              >
                <div className="circle-item" data-aos="zoom-in">
                  <img src={Tansformer} alt="appli2" />
                  <p>Transformers</p>
                </div>
              </Col>

              <Col
                xs={6}
                sm={6}
                md={3}
                lg={2}
                className="d-flex justify-content-center circle "
              >
                <div className="circle-item" data-aos="zoom-in">
                  <img src={breaker} alt="appli3" />
                  <p>Circuit Breakers</p>
                </div>
              </Col>

              <Col
                xs={6}
                sm={6}
                md={3}
                lg={2}
                className="d-flex justify-content-center circle"
              >
                <div className="circle-item" data-aos="zoom-in">
                  <img src={powergrid} alt="appli4" />
                  <p>Bushings</p>
                </div>
              </Col>

              <Col
                xs={12}
                sm={6}
                md={3}
                lg={2}
                className="d-flex justify-content-center "
              >
                <div className="circle-item" data-aos="zoom-in">
                  <img src={station} alt="appli5" />
                  <p>Power Substation</p>
                </div>
              </Col>
            </Row>
          </Row>
        </Container>

        <Col xs={12} className="text-center mb-3 ">
          <h2 style={{ color: "#eb7a11", fontSize: "30px" }}>Certificates</h2>
        </Col>

        <Container></Container>
      </div>
      <Modal
        show={showInquiryModal}
        onHide={closeInquiry}
        centered
        backdrop="static"
        keyboard={false}
        dialogClassName="custom-inquiry-modal "
        scrollable={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Inquiry request for Teams</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form className="inForm">
            <Col md={12} className="mb-3 ">
              <label>Name</label>
              <input
                type="text"
                className="form-control "
                required
                placeholder="Enter Your Name"
              />
            </Col>

            <Col md={12} className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                required
                placeholder="Enter Your Email"
              />
            </Col>

            <Col md={12} className="mb-3">
              <label>Phone</label>
              <input
                type="tel"
                className="form-control"
                required
                placeholder="Enter Your Phone No."
              />
            </Col>

            <Col className="mb-3">
              <label>Enquiry</label>
              <textarea
                rows="4"
                className="form-control"
                placeholder="Write your enquiry here..."
              ></textarea>
            </Col>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                type="submit"
                className="w-50 inquiry-submit-button"
                onClick={closeInquiry}
              >
                Submit Inquiry
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <Modal
        show={showCatalogueModal}
        onHide={closeCatalogue}
        centered
        scrollable={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>View Catalogue</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form className="inForm">
            <Col className="mb-3">
              <label>Name</label>
              <input className="form-control" required />
            </Col>

            <Col className="mb-3">
              <label>Contact</label>
              <input type="tel" className="form-control" required />
            </Col>

            <Col className="mb-3">
              <label>Email</label>
              <input type="email" className="form-control" required />
            </Col>

            <div className="text-center">
              <Button
                type="submit"
                className="w-50 inquiry-submit-button"
                onClick={closeCatalogue}
              >
                Send
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductDetail;
