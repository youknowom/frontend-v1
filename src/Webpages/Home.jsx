import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Carousel,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/home.css";
import CompanyImg from "../assets/images/HomeCompany.jpeg";
import { MdDoubleArrow } from "react-icons/md";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import LogoLoop from "../Webpages/LogoLoop.jsx";
// import Certificate1 from "../assets/certificates/certificate1.jpg";
// import Certificate2 from "../assets/certificates/certificate2.jpg";
import Certificate1 from "../../assets/certificate1.jpeg"
import Certificate2 from "../../assets/certificate2.jpeg"
import Certificate3 from "../../assets/certificate3.jpeg"
import Certificate4 from "../../assets/certificate4.jpeg"

//imported the customer Slider image

import com1 from "../assets/images/Clients/Capture.PNG";
import com2 from "../assets/images/Clients/IndiaRail.png";
import com3 from "../assets/images/Clients/HAL.avif";
import com4 from "../assets/images/Clients/NTPC.png";
import com5 from "../assets/images/Clients/DRDO.png";
import com6 from "../assets/images/Clients/Voltamp.png";
import com7 from "../assets/images/Clients/Bontom.png";
import com8 from "../assets/images/Clients/BharatElectronic.webp";
import com9 from "../assets/images/Clients/godrej.jpg";
// import HeroSlider from "../Components/CustomerSlider";
// Import your slider images
import Img1 from "../assets/Sector Images/1Utility/1.6Copy.png";
import Img2 from "../assets/Sector Images/2PowerGeneration/2.jpg";
import Img3 from "../assets/Sector Images/3Railway/1.2Copy.png";
import Img4 from "../assets/Sector Images/4Manufacture/manufacture2.jpeg";
import Img5 from "../assets/Sector Images/5Airport/5.1Copy.png";
import Img6 from "../assets/Sector Images/6Defence/6.1Copy.png";
import Img7 from "../assets/Sector Images/7Green Energy/7.2Copy.png";
import { Cpu, ShieldCheck, Activity, Award, ActivityIcon } from "lucide-react";
import PermanentlyBlurredImage from "../Components/BlurImgHelper.jsx";

const HeroBannerText = ({
  heading,
  subtext,
  buttonText,
  onButtonClick,
  description,
}) => {
  const navigate = useNavigate();

  return (
    <div className="hero-text-overlay">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h1 className="hero-heading">{heading}</h1>
            <h4 className="hero-subtext">{subtext}</h4>
            <p className="hero-discription">{description}</p>
           <Button className="theme-button-secondary" onClick={() => navigate("/utilitySector")}>
  {buttonText}
</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
// ------------------------------------------

const Home = () => {
  // Define the content for each slide
  const slideContent = [
    {
      img: Img1,
      heading: "UTILITIES",
      subtext: "Smart Solutions for a Stronger Utility Network.",
      buttonText: "Explore Product",
    },
    {
      img: Img2,
      heading: "POWER GENERATION",
      subtext: "Empowering the Future of Power Generation.",
      description: "",
      buttonText: "Explore Product",
    },
    {
      img: Img3,
      heading: "RAILWAY",
      subtext: "Driving Safety, Precision, and Reliability on Every Track.",
      description: "",
      buttonText: "Explore Product",
    },
    {
      img: Img4,
      heading: "MANUFACTURING AND OEMs",
      subtext: "Engineering Excellence for Every Manufacturing Need.",
      description: "",
      buttonText: "Explore Product",
    },
    {
      img: Img5,
      heading: "AVIATION AND AIRPORTS",
      subtext: "Where Safety, Precision, and Performance Take Of",
      description: "",
      buttonText: "Explore Product",
    },
    {
      img: Img6,
      heading: "DEFENCE AND GOVERNMENT INSTALLATIONS",
      subtext: "Precision Technology for Protected Installations",
      description: "",
      buttonText: "Explore Product",
    },
    {
      img: Img7,
      heading: "RENEWABLE ENERGY",
      subtext: "Reliable Solutions for Clean and Green Energy",
      buttonText: "Explore Product", 
    },
    // Add content for Img4, Img5, Img6, Img7...
  ];

  const customerLogos = [
    { src: com1, alt: "Client 1" },
    { src: com2, alt: "Client 2" },
    { src: com3, alt: "Client 3" },
    { src: com4, alt: "Client 4" },
    { src: com5, alt: "Client 5" },
    { src: com6, alt: "Client 6" },
    { src: com7, alt: "Client 7" },
    { src: com8, alt: "Client 8" },
    { src: com9, alt: "Client 9" },
  ];

const valuePropositions = [
  {
    icon: Cpu,
    title: "R&D Driven Innovation",
    description:
      "Backed by over 25 years of engineering expertise, our dedicated Research & Development team designs advanced electrical testing solutions that stay ahead of industry challenges.",
    color: "#4A90E2",
  },
  {
    icon: ActivityIcon,
    title: "High Precision & Performance",
    description:
      "Our instruments are built to deliver exceptional accuracy, reliability, and performance, even in the most demanding industrial environments.",
    color: "#7ED321",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Reliability",
    description:
      "Designed with safety at the core, TEAMS instruments ensure dependable operation while meeting stringent industrial and electrical safety standards.",
    color: "#FF6B6B",
  },
  {
    icon: Award,
    title: "World-Class Quality",
    description:
      "We manufacture technologically superior, high-quality testing instruments that empower industries with confidence, durability, and long-term value.",
    color: "#F5A623",
  },
];

const certificates = [
  {
    img: Certificate1,
    // title: "ISO 9001:2015",
    // description: "Certified Quality Management System",
  },
  {
    img: Certificate2,
    // title: "ISO 14001:2015",
    // description: "Environmental Management Certification",
  },
   {
    img: Certificate3,
    // title: "ISO 9001:2015",
    // description: "Certified Quality Management System",
  },
  {
    img: Certificate4,
    // title: "ISO 14001:2015",
    // description: "Environmental Management Certification",
  },
];


  return (
    <>
      <div>
        <div className="slider-wrapper mb-4">
          <Carousel
            controls={false}
            indicators={true}
            interval={2000}
            fade
            pause={false}
            touch={false}
          >
            {slideContent.map((slide, i) => (
              <Carousel.Item key={i}>
                <div className="slider-item">
                  <img
                    src={slide.img}
                    alt={`Slide-${i}`}
                    className="slider-img"
                  />

                  {/* Dark Overlay */}
                  <div className="slider-overlay"></div>

                  {/* Text content over the image */}
                  <HeroBannerText
                    heading={slide.heading}
                    subtext={slide.subtext}
                    buttonText={slide.buttonText}
                    onButtonClick={slide.onButtonClick}
                    description={slide.description}
                  />
                  {/* Right Gradient (if needed) */}
                  {/* <div className="right-gradient"></div> */}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <div className="company-intro">
          <Container style={{ overflow: "hidden" }}>
            <Row className="align-items-center g-5 ">
              {/* LEFT SIDE – COMPANY INFO */}

              <Col xs={12} md={7}>
                <h2 className="company-title" data-aos="zoom-in">
                  {" "}
                  About Teams Instruments
                </h2>
                <div data-aos="fade-right">
                  <p className="company-text">
                    TATHASTU TEAMS Instruments Manufacturing Pvt. Ltd. is a
                    leading developer of high-precision electrical test and
                    measurement equipment, backed by over 25 years of
                    multi-domain engineering expertise. With a strong focus on
                    innovation and a dedicated Research & Development division,
                    the company creates advanced, reliable, and technologically
                    superior solutions that address complex industrial testing
                    challenges. Driven by a commitment to accuracy, safety, and
                    performance, TATHASTU TEAMS aims to empower industries with
                    world-class, high-quality testing instruments built for
                    demanding environments.
                  </p>
                  <p className="company-text">
                    At the heart of our operations lies a committed Research &
                    Development team, continuously working to develop
                    cutting-edge solutions for complex electrical testing needs.
                    Our R&D-led approach ensures that our products remain at the
                    forefront of technology while delivering unmatched
                    performance and reliability.
                  </p>
                </div>

                {/* <Button className="AboutUs-more-button" onClick={() => window.location.href = '/aboutUs'}>
                  More About Us <TbArrowBadgeRightFilled className="mb-1" />
                </Button> */}
              </Col>

              {/* RIGHT SIDE – COMPANY IMAGE */}
              <Col xs={12} md={5} className="text-center">
                <Image
                  data-aos="zoom-in"
                  src={CompanyImg}
                  alt="Company"
                  fluid
                  className="company-image"
                />
              </Col>
            </Row>

            {/*added */}
            <div className="value-propositions-section">
              <h2 className="value-title">We value our customers</h2>
              <Row className="g-4 mt-4">
                {valuePropositions.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Col key={index} lg={3} md={4} sm={6} xs={6}>
                      <Card
                        className="value-product-card"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        <div className="value-icon-container">
                          <div
                            className="value-icon-wrapper"
                            style={{ backgroundColor: `${item.color}20` }}
                          >
                            <IconComponent
                              size={40}
                              color={item.color}
                              strokeWidth={2}
                            />
                          </div>
                        </div>
                        <Card.Body>
                          <h6 className="value-name m-0">{item.title}</h6>
                          <p className="value-description">
                            {item.description}
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Container>
        </div>
        <div>
         {/* CERTIFICATES */}
      <Container className="my-5">
        <h2 className="text-center customer-title mb-4">Certificates</h2>
        <Row className="g-4">
          {certificates.map((cert, i) => (
            <Col key={i} lg={3} md={4} sm={6} xs={6}>
              <Card className="value-product-card h-30 text-center"  >
                <Card.Body>
                  {/* <img src={cert.img} alt={cert.title} className="img-fluid mb-3 blur-image" /> */}
                  <PermanentlyBlurredImage src={cert.img} />
                  {/* <h6>{cert.title}</h6> */}
                  {/* <p>{cert.description}</p> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
        </div>
        <div
         className="py-4"
        >
          <div className="client ">
            <h2 className="customer-title mb-3 ">Our Co-operative Client</h2>
          </div>
          {/* Basic horizontal loop */}
          <LogoLoop 
        
            logos={customerLogos}
            speed={120}
            direction="left"
            logoHeight={100}
            gap={50}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Our Clients"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
