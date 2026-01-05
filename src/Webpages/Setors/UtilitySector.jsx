import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./utility.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdDoubleArrow } from "react-icons/md";

/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

/* Images */
import sectorImg from "../../assets/Sector Images/1Utility/utility1.png";

import Img1 from "../../assets/ProductsImage/1.png";
import Img2 from "../../assets/ProductsImage/2.png";
import Img3 from "../../assets/ProductsImage/3.png";
import Img4 from "../../assets/ProductsImage/4.png";
import Img5 from "../../assets/ProductsImage/5.png";
import Img6 from "../../assets/ProductsImage/13.png";
import Img7 from "../../assets/ProductsImage/18.png";
import Img8 from "../../assets/ProductsImage/19.png";

import img1 from "../../assets/Sector Images/1Utility/DS.PNG";
import img2 from "../../assets/Sector Images/1Utility/BAR.PNG";
import img3 from "../../assets/Sector Images/1Utility/S.PNG";
import img4 from "../../assets/Sector Images/1Utility/Transformer.jpg";
import img5 from "../../assets/Sector Images/1Utility/CTs.jpg";
import img6 from "../../assets/Sector Images/1Utility/PTsCopy.jpg";
import img7 from "../../assets/Sector Images/1Utility/Busbar.jpg";
import img8 from "../../assets/images/breaker.jpg";
import img9 from "../../assets/images/Cable.jpg";
import img10 from "../../assets/Sector Images/1Utility/Overhead.jpg";
import img11 from "../../assets/Sector Images/1Utility/line.jpg";
import img12 from "../../assets/Sector Images/1Utility/CT-PT.PNG";
import { BiDownArrow } from "react-icons/bi";
import { FiChevronDown, FiChevronsDown } from "react-icons/fi";
import { productsData } from "../../data/productsData";

const UtilitySector = () => {
  const navigate = useNavigate();
  const productsRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    AOS.refresh();
  }, []);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* Products */

  // const productsNew = productsData;

 
  const products = [
    {
      id: 1,
      name: "15kV Insulation Tester",
      model: "DIT 15K68 (*8mA)",
      button: "/product/Tester15kV",
      image: Img1,
    },
    {
      id: 2,
      name: "10kV Insulation Tester",
      model: "DIT 10K68 (*8mA)",
      button: "/product/Tester10kV",
      image: Img2,
    },
    {
      id: 3,
      name: "5kV Insulation Tester",
      model: "DIT 5K68 (*8mA)",
      button: "/product/Tester5kV68",
      image: Img3,
    },
    {
      id: 4,
      name: "Digital Micro Ohm Meter 10A-HD",
      model: "DLRM 10A-HD",
      button: "/product/MicroOhm10AHD",
      image: Img4,
    },
    {
      id: 5,
      name: "Digital Micro Ohm Meter 10A",
      model: "DLRM 10A",
      button: "/product/MicroOhm10A",
      image: Img5,
    },
    {
      id: 6,
      name: "Digital Micro Ohm Meter 1A",
      model: "DLRM 1A",
      button: "/product/MicroOhm1A",
      image: Img6,
    },
    {
      id: 7,
      name: "Digital Earth Resistance Tester",
      model: "DET2-4T_c",
      button: "/product/EarthTester4T_c",
      image: Img7,
    },
    {
      id: 8,
      name: "Digital Earth Resistance Tester",
      model: "DET2-4T",
      button: "/product/EarthTester4T",
      image: Img8,
    },
  ];

  /* Images */
  const imagesRow1 = [img1, img2, img9, img4, img8, img6];
  const imagesRow2 = [img7, img5, img3, img10, img11, img12];
  const images6Row = [img1, img3, img6, img7, img10, img11];

  const mobileImages = [
    img1,
    img2,
    img9,
    img4,
    img8,
    img6,
    img7,
    img10,
    img5,
    img3,
    img11,
    img12,
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <Container fluid className="utility-hero">
        <Row className="hero-row g-0 align-items-stretch mb-2">
          {/* LEFT CONTENT */}
          <Col
            md={7}
            className="hero-content d-flex flex-column justify-content-center"
          >
            <h2 className="hero-subtitle" data-aos="fade-right">
              UTILITY SECTOR
            </h2>

            <h3 data-aos="fade-right" className="fw-semibold text-white">
              Smart Solutions for a Stronger Utility Network.
            </h3>

            <p data-aos="fade-right" style={{ textAlign: "justify" }}>
              Testing Solutions for State Electricity Boards, Distribution
              networks, Substations, Switchyards, Transformer testing &
              monitoring, Circuit Breaker Testing, LT/HT Overhead Lines &
              cables, CTs, PTs & Bus bar Testing.
            </p>

            {/* ===== MOBILE SLIDER ===== */}
            <div className="mobile-only" data-aos="zoom-in">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={12}
                slidesPerView={3}
                centeredSlides
                loop
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: true,
                }}
                // pagination={{ clickable: true }}
              >
                {mobileImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="mobile-slider-card">
                      <img src={img} alt={`utility-${index}`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* ===== DESKTOP VIEW (UNCHANGED) ===== */}
            <div className="my-1 text-start desktop-only">
              <Row className="justify-content-start" data-aos="zoom-in">
                {images6Row.map((img, index) => (
                  <Col key={index} xs="auto">
                    <div className="circleimg">
                      <img src={img} alt={`circle-${index}`} />
                    </div>
                  </Col>
                ))}
              </Row>

              {/* <Row className="justify-content-start mt-3" data-aos="zoom-in">
                {imagesRow2.map((img, index) => (
                  <Col key={index} xs="auto">
                    <div className="circleimg">
                      <img src={img} alt={`circle-${index}`} />
                    </div>
                  </Col>
                ))}
              </Row> */}
            </div>

            <div className="hero-buttons">
              <Button className="hero-btn-primary" onClick={scrollToProducts}>
                View Products <FiChevronsDown />
              </Button>
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col md={5} className="hero-image-col">
            <div className="hero-image-wrapper">
              <img src={sectorImg} alt="Utility" className="imagesector" />
            </div>
          </Col>
        </Row>
      </Container>

      {/* PRODUCTS SECTION */}
      <Container className="products-section" ref={productsRef}>
        <Row className="mt-4 mb-2">
          <Col>
            <h4 className="section-title mt-4">
              <MdDoubleArrow className="icon" /> Products
            </h4>
          </Col>
        </Row>

        <Row className="g-4 mb-4">
          {products.map((product) => (
            <Col key={product.id} lg={3} md={4} sm={6} xs={12}>
              <Card className="product-card" data-aos="fade-up">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <h6 className="product-name m-0">{product.name}</h6>
                  <p className="product-model">Model: {product.model}</p>
                  <Button
                    className="btn-orange"
                    onClick={() => navigate(product.button)}
                  >
                    Explore
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default UtilitySector;
