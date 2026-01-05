

// import { useState, useEffect } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { FaBars, FaTimes, FaChevronUp, FaChevronDown } from "react-icons/fa";
// import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
// import { RiArrowRightSFill } from "react-icons/ri";
// import { Row, Col } from "react-bootstrap";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Link } from "react-router-dom";
// import { MdDirectionsRailwayFilled, MdAirplanemodeActive, MdSolarPower  } from "react-icons/md";
// import { LuUtilityPole } from "react-icons/lu";
// import { FcEngineering } from "react-icons/fc";
// import { GiRadarDish, GiGreenPower } from "react-icons/gi";
// import { PiCircuitryFill } from "react-icons/pi";
// import { TbCircuitInductor, TbCircuitResistor } from "react-icons/tb";
// import { FaGlobe, FaBolt, FaPlug } from "react-icons/fa";
// import { FaEnvelope } from "react-icons/fa";
// import { RiWhatsappFill } from "react-icons/ri";


// import "./CSS/nav.css";
// import "./CSS/productNav.css";

// const MyNavbar = () => {
//   const [showMegaMenu, setShowMegaMenu] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [mobileProducts, setMobileProducts] = useState(false);
//   const handleSidebarClose = () => {
//     closeMenu();
//     setMobileProducts(false); // also close Products dropdown
//   };


//   const location = useLocation();

//   /* ============================
//       FIX 1 — Close menus on route change
//   ============================= */
//   useEffect(() => {
//     setShowMegaMenu(false);
//     setMobileMenu(false);
//     setMobileProducts(false);

//     // scrollTo fix
//     setTimeout(() => {
//       window.scrollTo(0, 0);
//     }, 100);
//   }, [location.pathname]);

//   /* ============================
//         MOBILE SIDEBAR
//   ============================= */
//   const openMenu = () => {
//     setMobileMenu(true);
//     document.body.classList.add("no-scroll");
//   };

//   const closeMenu = () => {
//     setMobileMenu(false);
//     document.body.classList.remove("no-scroll");
//   };
//   useEffect(() => {
//     AOS.init({ duration: 800, once: false });
//     AOS.refresh();
//   }, []);

//   // DESKTOP – Hover handlers
// const handleMegaEnter = () => {
//   if (window.innerWidth > 992) {
//     setShowMegaMenu(true);
//   }
// };

// const handleMegaLeave = () => {
//   if (window.innerWidth > 992) {
//     setShowMegaMenu(false);
//   }
// };
// let hoverTimer;

// const openMegaMenu = () => {
//   clearTimeout(hoverTimer);
//   if (window.innerWidth > 992) {
//     setShowMegaMenu(true);
//   }
// };

// const closeMegaMenu = () => {
//   hoverTimer = setTimeout(() => {
//     setShowMegaMenu(false);
//   }, 200);
// };


//   return (
//     <>
//       {/* ============================
//               MAIN NAVBAR
//       ============================= */}
//       <Navbar expand="lg" sticky="top" className="custom-navbar">
//         <Container fluid className="px-0">
//           <Navbar.Brand href="/" className="ms-2 ">
//             <img src="/logo.png" alt="Logo" className="nav-logo" />
//           </Navbar.Brand>

//           {/* MOBILE MENU ICON */}
//           <div className="mobile-menu-icon" onClick={openMenu}>
//             <FaBars size={25} />
//           </div>

//           <Navbar.Collapse className="justify-content-start">
//             <Nav className="me-0 ms-5">

//               <Nav.Link as={NavLink} to="/" className="nav-item-link p-2 me-4">
//                 Home
//               </Nav.Link>

//               {/* ================================
//                   PRODUCTS MEGA MENU BUTTON
//               ================================= */}
//               <Nav.Link
//                 className="nav-item-link d-flex align-items-center p-2 me-4"
//                 onClick={() => {
//                   setShowMegaMenu(!showMegaMenu);
//                 }}
//                 style={{ cursor: "pointer" }}
//               >
//                 Products
//                 <span style={{ marginLeft: 2, fontSize: 14 }}>
//                   {showMegaMenu ? (
//                     <MdOutlineArrowDropUp className="upDownIcon" />
//                   ) : (
//                     <MdOutlineArrowDropDown className="upDownIcon" />
//                   )}
//                 </span>
//               </Nav.Link>

//               <Nav.Link as={NavLink} to="/about" className="nav-item-link p-2 me-4">
//                 About Us
//               </Nav.Link>

//               <Nav.Link as={NavLink} to="/contact" className="nav-item-link p-2 me-4">
//                 Contact
//               </Nav.Link>

//             </Nav>
//           </Navbar.Collapse>
//           {/* RIGHT SIDE ICONS */}


//         </Container>
//       </Navbar>

//       {/* ============================
//           FIXED — MEGA MENU DROPDOWN
//       ============================= */}
//       <div className={`mega-menu m-0 ${showMegaMenu ? "open" : ""}`}>

//         <Container className="px-0">
//           <Row className="megaMenuOption">
//             {/* LEFT SIDE */}
//             <Col md={3} className="category-column">
//               <h5>Products</h5>
//               <ul>
//                 <li>
//                   <NavLink
//                     to="/allProducts"
//                     onClick={() => setShowMegaMenu(false)}
//                     style={{ color: "white" }}>
//                     <RiArrowRightSFill />All Products
//                   </NavLink>
//                 </li>
//                 <li><RiArrowRightSFill />Category Wise</li>
//                 <li><RiArrowRightSFill />Sector Wise</li>
//               </ul>
//             </Col>

//             {/* RIGHT SIDE */}
//             <Col md={9} className="details-column">
//               <Row>
//                 <Col md={6} className="megaList">
//                   <h5 className="mb-3">Category Wise</h5>
//                   <p className="mb-4"><PiCircuitryFill className="icon" /> Insulation Testers</p>
//                   <p className="mb-4"><TbCircuitInductor className="icon" /> Digital Micro Ohm Meters</p>
//                   <p className="mb-4"><TbCircuitResistor className="icon" /> Safety Ohm Meter</p>
//                   <p className="mb-4"><FaGlobe className="icon" /> Digital Earth Resistance Tester</p>
//                   <p className="mb-4"><FaPlug className="icon" /> High Voltage Probe</p>
//                   <p className="mb-2"><FaBolt className="icon" /> Meter Test Leads</p>
//                 </Col>

//                 <Col md={6}>
//                   <h5 className="mb-3">Sector Wise</h5>
//                   <p className="mb-4">

//                     <Link to="/utilitySector" className="breadcrumb-link" >
//                       <LuUtilityPole className="icon" />  Utility Sector
//                     </Link>
//                   </p>
//                   <p className="mb-4"><MdDirectionsRailwayFilled className="icon" /> Railways Sector</p>
//                   <p className="mb-4"><FcEngineering className="icon" /> Manufacturing & OEMs</p>
//                   <p className="mb-4"><MdAirplanemodeActive className="icon" /> Aviation & Airports</p>
//                   <p className="mb-4"><GiRadarDish className="icon" /> Defence & Government</p>
//                   <p className="mb-4"><GiGreenPower className="icon" /> Renewable Energy</p>
//                   <p className="mb-2"><MdSolarPower className="icon" /> Power Generation Sector</p>
//                 </Col>
//                 {/* <Col md={4}>
//                 <h1></h1>
//                 <br />
//                 <p className="mb-4"><MdSolarPower className="icon" /> Power Generation Sector</p>
//                 </Col> */}
//               </Row>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* ============================
//           MOBILE SIDEBAR MENU
//       ============================= */}
//       {mobileMenu && (
//         <div className="mobile-sidebar">
//           <div className="sidebar-header">
//             <img src="/logo.png" alt="Logo" className="sidebar-logo" />
//             <FaTimes size={26} className="close-btn" onClick={closeMenu} />
//           </div>

//           <ul className="sidebar-links">
//             <li>
//               <NavLink to="/" onClick={handleSidebarClose}>Home</NavLink>
//             </li>

//             {/* MOBILE PRODUCTS */}
//             <li
//               className="sidebar-dropdown"
//               onClick={() => setMobileProducts(!mobileProducts)}
//             >
//               Products
//               <span>{mobileProducts ? <FaChevronUp /> : <FaChevronDown />}</span>
//             </li>

//             {mobileProducts && (
//               <div className="sidebar-submenu">
//                 <ul>
//                   <li>
//                     <NavLink
//                       to="/allProducts"
//                       onClick={handleSidebarClose}
//                     >
//                       All Products
//                     </NavLink>
//                   </li>
//                   <li>Category Wise</li>
//                   <li className="mb-4">Sector Wise</li>
//                 </ul>

//                 <h5 className="mb-3">Category Wise</h5>
//                 <p className="mb-4"><PiCircuitryFill className="icon" /> Insulation Testers</p>
//                 <p className="mb-4"><TbCircuitInductor className="icon" /> Digital Micro Ohm Meters</p>
//                 <p className="mb-4"><TbCircuitResistor className="icon" /> Safety Ohm Meter</p>
//                 <p className="mb-4"><FaGlobe className="icon" /> Digital Earth Resistance Tester</p>
//                 <p className="mb-4"><FaPlug className="icon" /> High Voltage Probe</p>
//                 <p className="mb-4"><FaBolt className="icon" /> Meter Test Leads</p>

//                 <h5>Sector Wise</h5>
//                 <p className="mb-">

//                   <Link to="/utilitySector" onClick={handleSidebarClose}>
//                     <LuUtilityPole className="icon" /> Utility Sector
//                   </Link>
//                 </p>
//                 <p className="mb-4"><MdDirectionsRailwayFilled className="icon" /> Railways Sector</p>
//                 <p className="mb-4"><FcEngineering className="icon" /> Manufacturing & OEMs</p>
//                 <p className="mb-4"><MdAirplanemodeActive className="icon" /> Aviation & Airports</p>
//                 <p className="mb-4"><GiRadarDish className="icon" /> Defence & Government</p>
//                 <p className="mb-4"><GiGreenPower className="icon" /> Renewable Energy</p>
//                  <p className="mb-2"><MdSolarPower className="icon" /> Power Generation Sector</p>
//               </div>
//             )}

//             <li>
//               <NavLink to="/about" onClick={handleSidebarClose}>About Us</NavLink>
//             </li>

//             <li>
//               <NavLink to="/contact" onClick={handleSidebarClose}>Contact</NavLink>
//             </li>

//           </ul>


//         </div>
//       )}
//     </>
//   );
// };

// export default MyNavbar;






import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBars, FaTimes, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { RiArrowRightSFill } from "react-icons/ri";
import { Row, Col } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import { MdDirectionsRailwayFilled, MdAirplanemodeActive, MdSolarPower } from "react-icons/md";
import { LuUtilityPole } from "react-icons/lu";
import { FcEngineering } from "react-icons/fc";
import { GiRadarDish, GiGreenPower } from "react-icons/gi";
import { PiCircuitryFill } from "react-icons/pi";
import { TbCircuitInductor, TbCircuitResistor } from "react-icons/tb";
import { FaGlobe, FaBolt, FaPlug } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { useRef } from "react";


import "./CSS/nav.css";
import "./CSS/productNav.css";

const MyNavbar = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const handleSidebarClose = () => {
    closeMenu();
    setMobileProducts(false); // also close Products dropdown
  };


  const location = useLocation();

  /* ============================
      FIX 1 — Close menus on route change
  ============================= */
  useEffect(() => {
    setShowMegaMenu(false);
    setMobileMenu(false);
    setMobileProducts(false);

    // scrollTo fix
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, [location.pathname]);

  /* ============================
        MOBILE SIDEBAR
  ============================= */
  const openMenu = () => {
    setMobileMenu(true);
    document.body.classList.add("no-scroll");
  };

  const closeMenu = () => {
    setMobileMenu(false);
    document.body.classList.remove("no-scroll");
  };
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();
  }, []);

  const hoverTimer = useRef(null);

  const openMegaMenu = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
    }

    if (window.innerWidth > 992) {
      setShowMegaMenu(true);
    }
  };

  const closeMegaMenu = () => {
    hoverTimer.current = setTimeout(() => {
      setShowMegaMenu(false);
    }, 150);
  };


  return (
    <>
      {/* ============================
              MAIN NAVBAR
      ============================= */}

      <Navbar expand="lg" sticky="top" className="custom-navbar">
        <Container fluid className="px-0">
          <Navbar.Brand href="/" className="ms-2 ">
            <img src="/logo.png" alt="Logo" className="nav-logo" />
          </Navbar.Brand>

          {/* MOBILE MENU ICON */}
          <div className="mobile-menu-icon" onClick={openMenu}>
            <FaBars size={25} />
          </div>

          <Navbar.Collapse className="justify-content-start">
            <Nav className="me-0 ms-5">

              <Nav.Link as={NavLink} to="/" className="nav-item-link p-2 me-4">
                Home
              </Nav.Link>

              {/* ================================
                  PRODUCTS MEGA MENU BUTTON
              ================================= */}

              {/* ===== PRODUCTS + MEGA MENU WRAPPER ===== */}


              <Nav.Link
                className="nav-item-link d-flex align-items-center p-2 me-4"
                style={{ cursor: "pointer" }}
                onMouseEnter={openMegaMenu}
                onMouseLeave={closeMegaMenu}
                // onClick={closeMegaMenu}
              >
                Products
                <span style={{ marginLeft: 2, fontSize: 14 }}>
                  {showMegaMenu ? (
                    <MdOutlineArrowDropUp className="upDownIcon" />
                  ) : (
                    <MdOutlineArrowDropDown className="upDownIcon" />
                  )}
                </span>
              </Nav.Link>

              <div className={`mega-menu m-0 ${showMegaMenu ? "open" : ""}`}>
                
                  <Container 
                    className="mega-wrapper px-0"
                    onMouseEnter={openMegaMenu}
                    onMouseLeave={closeMegaMenu}
                  >
                    <Row className="megaMenuOption">
                      {/* LEFT SIDE */}
                      <Col md={3} className="category-column">
                        <h5>Products</h5>
                        <ul>
                          <li>
                            <NavLink 
                              to="/allProducts"
                              onClick={() => setShowMegaMenu(false)}
                              >
                              <RiArrowRightSFill />All Products
                            </NavLink>
                          </li>
                          <li><RiArrowRightSFill />Category Wise</li>
                          <li><RiArrowRightSFill />Sector Wise</li>
                        </ul>
                      </Col>

                      {/* RIGHT SIDE */}
                      <Col md={9} className="details-column">
                        <Row>

                          <Col md={6}>
                            <h5 className="mb-3">Sector Wise</h5>
                            <p className="mb-4">

                              <Link to="/utilitySector" className="breadcrumb-link" >
                                <LuUtilityPole className="icon" />  Utility Sector
                              </Link>
                            </p>
                            <p className="mb-4"><MdDirectionsRailwayFilled className="icon" /> Railways Sector</p>
                            <p className="mb-4"><FcEngineering className="icon" /> Manufacturing & OEMs</p>
                            <p className="mb-4"><MdAirplanemodeActive className="icon" /> Aviation & Airports</p>
                            <p className="mb-4"><GiRadarDish className="icon" /> Defence & Government</p>
                            <p className="mb-4"><GiGreenPower className="icon" /> Renewable Energy</p>
                            <p className="mb-2"><MdSolarPower className="icon" /> Power Generation Sector</p>
                          </Col>
                          
                          <Col md={6} className="megaList">
                            <h5 className="mb-3">Category Wise</h5>
                            <p className="mb-4"><PiCircuitryFill className="icon" /> Insulation Testers</p>
                            <p className="mb-4"><TbCircuitInductor className="icon" /> Digital Micro Ohm Meters</p>
                            <p className="mb-4"><TbCircuitResistor className="icon" /> Safety Ohm Meter</p>
                            <p className="mb-4"><FaGlobe className="icon" /> Digital Earth Resistance Tester</p>
                            <p className="mb-4"><FaPlug className="icon" /> High Voltage Probe</p>
                            <p className="mb-2"><FaBolt className="icon" /> Meter Test Leads</p>
                          </Col>

                          

                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </div>

                 <Nav.Link as={NavLink} to="/allProducts" className="nav-item-link p-2 me-4">
                Applications
              </Nav.Link>
           
              {/* <Nav.Link as={NavLink} to="/about" className="nav-item-link p-2 me-4">
                About Us
              </Nav.Link>

              <Nav.Link as={NavLink} to="/contact" className="nav-item-link p-2 me-4">
                Contact Us
              </Nav.Link> */}

            </Nav>
          </Navbar.Collapse>
          {/* RIGHT SIDE ICONS */}


        </Container>
      </Navbar>

      {/* ============================
          FIXED — MEGA MENU DROPDOWN
      ============================= */}


      {/* ============================
          MOBILE SIDEBAR MENU
      ============================= */}
      {mobileMenu && (
        <div className="mobile-sidebar">
          <div className="sidebar-header">
            <img src="/logo.png" alt="Logo" className="sidebar-logo" />
            <FaTimes size={26} className="close-btn" onClick={closeMenu} />
          </div>

          <ul className="sidebar-links">
            <li>
              <NavLink to="/" onClick={handleSidebarClose}>Home</NavLink>
            </li>

            {/* MOBILE PRODUCTS */}
            <li
              className="sidebar-dropdown"
              onClick={() => setMobileProducts(!mobileProducts)}
            >
              Products
              <span>{mobileProducts ? <FaChevronUp /> : <FaChevronDown />}</span>
            </li>

            {mobileProducts && (
              <div className="sidebar-submenu">
                <ul>
                  <li>
                    <NavLink
                      to="/allProducts"
                      onClick={handleSidebarClose}
                    >
                      All Products
                    </NavLink>
                  </li>

                  <h5>Sector Wise</h5>
                <p className="mb-">

                  <Link to="/utilitySector" onClick={handleSidebarClose}>
                    <LuUtilityPole className="icon" /> Utility Sector
                  </Link>
                </p>
                <p className="mb-4"><MdDirectionsRailwayFilled className="icon" /> Railways Sector</p>
                <p className="mb-4"><FcEngineering className="icon" /> Manufacturing & OEMs</p>
                <p className="mb-4"><MdAirplanemodeActive className="icon" /> Aviation & Airports</p>
                <p className="mb-4"><GiRadarDish className="icon" /> Defence & Government</p>
                <p className="mb-4"><GiGreenPower className="icon" /> Renewable Energy</p>
                <p className="mb-2"><MdSolarPower className="icon" /> Power Generation Sector</p>

                  <li>Category Wise</li>
                  <li className="mb-4">Sector Wise</li>
                </ul>

                <h5 className="mb-3">Category Wise</h5>
                <p className="mb-4"><PiCircuitryFill className="icon" /> Insulation Testers</p>
                <p className="mb-4"><TbCircuitInductor className="icon" /> Digital Micro Ohm Meters</p>
                <p className="mb-4"><TbCircuitResistor className="icon" /> Safety Ohm Meter</p>
                <p className="mb-4"><FaGlobe className="icon" /> Digital Earth Resistance Tester</p>
                <p className="mb-4"><FaPlug className="icon" /> High Voltage Probe</p>
                <p className="mb-4"><FaBolt className="icon" /> Meter Test Leads</p>

                
              </div>
            )}

            <li>
              <NavLink to="/about" onClick={handleSidebarClose}>About Us</NavLink>
            </li>

            <li>
              <NavLink to="/contact" onClick={handleSidebarClose}>Contact</NavLink>
            </li>

          </ul>


        </div>
      )}
    </>
  );
};

export default MyNavbar;


