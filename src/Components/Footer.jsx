// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import "./CSS/footer.css";
// import footerBack from "../assets/images/footerRemovebg.png";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="footer-section ">
//       <div className="footer-overlay"></div>

//       <Container fluid className="footer-content px-0">
//         <Row className="footerRow px-4 py-1">
//           <Col className="mb-4 footer-col text-center text-md-start">
//             <img src={footerBack} alt="footerImg" className="footerImg" />
//           </Col>
//           <Col className="mb-4 footer-col">
//             <h5 className="footer-subtitle">Sector Wise Products</h5>
//             <ul className="footer-links">
//               <li>
//                 <Link to="/utilitySector" className="breadcrumb-link">
//                   Utility Sector
//                 </Link>
//               </li>
//               <li>Railways Sector</li>
//               <li>Manufacturing & OEMs</li>
//               <li>Aviation & Airports</li>
//               <li>Defence & Government</li>
//               <li>Renewable Energy</li>
//               <li>Power Generation</li>
//             </ul>
//           </Col>

//           <Col className="mb-4 footer-col">
//             <h5 className="footer-subtitle">All Products</h5>
//             <ul className="footer-links">
//               <li>Insulation Tester</li>
//               <li>Digital Earth Resistance Tester</li>
//               <li>Digital Micro Ohm Meter</li>
//               <li>High Voltage Probe</li>
//             </ul>
//           </Col>

//           <Col className="mb-4 footer-col">
//             <h5 className="footer-subtitle">Quick Links</h5>
//             <ul className="footer-links">
//               <li>
//                 <Link to={"/"} className="breadcrumb-link">
//                   Home
//                 </Link>
//               </li>
//               {/* <li>
//                 <Link to={"/about-us"}>About Us</Link>
//               </li>
//               <li>
//                 <Link to={"/Contact-us"}>Contact Us</Link>
//               </li> */}
//             </ul>
//           </Col>

//           {/* <Col className="mb-4 footer-col">
//             <h5 className="footer-subtitle">Contact Us</h5>
        
//             <p className="footer-text">
//               {" "}
//               <b style={{ color: "orange" }}> Email :</b>{" "}
//               tathastueams.mkt@gmail.com
//             </p>
//             <p className="footer-text">
//               {" "}
//               <b style={{ color: "orange" }}> Phone :</b> +91 77700 18893
//             </p>
//           </Col> */} <Col className="mb-4 footer-col">
//   <h5 className="footer-subtitle">All Products</h5>
//   <ul className="footer-links">
//     <li>
//       <Link to="/all-products?filter=Insulation Tester" className="breadcrumb-link">
//         Insulation Tester
//       </Link>
//     </li>
//     <li>
//       <Link to="/all-products?filter=Digital Earth Resistance Tester" className="breadcrumb-link">
//         Digital Earth Resistance Tester
//       </Link>
//     </li>
//     <li>
//       <Link to="/all-products?filter=Digital Micro Ohm Meter" className="breadcrumb-link">
//         Digital Micro Ohm Meter
//       </Link>
//     </li>
//     <li>
//       <Link to="/all-products?filter=High Voltage Probe" className="breadcrumb-link">
//         High Voltage Probe
//       </Link>
//     </li>
//   </ul>
// </Col>

//         </Row>

//         <Row className="text-center mt-2 m-0">
//           <Col>
//             <p className="footer-bottom">
//               © {new Date().getFullYear()} TATHASTU TEAMS Instruments Pvt. Ltd.
//               | Design By : BigHost India Private Limited
//             </p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./CSS/footer.css";
import footerBack from "../assets/images/footerRemovebg.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-overlay"></div>

      <Container fluid className="footer-content px-0">
        <Row className="footerRow px-4 py-1">
          <Col className="mb-4 footer-col text-center text-md-start">
            <img src={footerBack} alt="footerImg" className="footerImg" />
          </Col>

          <Col className="mb-4 footer-col">
            <h5 className="footer-subtitle">Sector Wise Products</h5>
            <ul className="footer-links">
              <li>
                <Link to="/utilitySector" className="breadcrumb-link">
                  Utility Sector
                </Link>
              </li>
              <li>Railways Sector</li>
              <li>Manufacturing & OEMs</li>
              <li>Aviation & Airports</li>
              <li>Defence & Government</li>
              <li>Renewable Energy</li>
              <li>Power Generation</li>
            </ul>
          </Col>

          <Col className="mb-4 footer-col">
            <h5 className="footer-subtitle">All Products</h5>
            <ul className="footer-links">
              <li>
                <Link
                  to="/allProducts?filter=Insulation Tester"
                  className="breadcrumb-link"
                >
                  Insulation Tester
                </Link>
              </li>
              <li>
                <Link
                  to="/allProducts?filter=Digital Earth Resistance Tester"
                  className="breadcrumb-link"
                >
                  Digital Earth Resistance Tester
                </Link>
              </li>
              <li>
                <Link
                  to="/allProducts?filter=Digital Micro Ohm Meter"
                  className="breadcrumb-link"
                >
                  Digital Micro Ohm Meter
                </Link>
              </li>
              <li>
                <Link
                  to="/allProducts?filter=High Voltage Probe"
                  className="breadcrumb-link"
                >
                  High Voltage Probe
                </Link>
              </li>
            </ul>
          </Col>

          <Col className="mb-4 footer-col">
            <h5 className="footer-subtitle">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <Link to={"/"} className="breadcrumb-link">
                  Home
                </Link>
              </li>
            </ul>
          </Col>

          <Col className="mb-4 footer-col">
            <h5 className="footer-subtitle">Contact Us</h5>
            <p className="footer-text">
              <b style={{ color: "orange" }}> Email :</b> tathastueams.mkt@gmail.com
            </p>
            <p className="footer-text">
              <b style={{ color: "orange" }}> Phone :</b> +91 77700 18893
            </p>
          </Col>
        </Row>

        <Row className="text-center mt-2 m-0">
          <Col>
            <p className="footer-bottom">
              © {new Date().getFullYear()} TATHASTU TEAMS Instruments Pvt. Ltd.
              | Design By : BigHost India Private Limited
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
