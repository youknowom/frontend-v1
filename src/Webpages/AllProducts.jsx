// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./CSS/allProducts.css";
// import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Modal } from "react-bootstrap";
// import { FaSearch } from "react-icons/fa";
// import { productsData } from "../data/productsData";
// import { useLocation } from "react-router-dom";

// export const AllProducts = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: false });
//     AOS.refresh();
//   }, []);
//   const navigate = useNavigate();

//   // PRODUCT LIST

//   // SEARCH + FILTER STATES
//   const [search, setSearch] = useState("");
//   const [activeFilter, setActiveFilter] = useState("All Products");

//   // FILTER LOGIC
//   const filteredProducts = productsData.filter((p) => {
//     const matchSearch =
//       p.name.toLowerCase().includes(search.toLowerCase()) ||
//       p.model.toLowerCase().includes(search.toLowerCase());

//     const matchFilter =
//       activeFilter === "All Products" || p.category === activeFilter;

//     return matchSearch && matchFilter;
//   });

//   // MODAL STATES
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showMobileFilters, setShowMobileFilters] = useState(false);

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedProduct(null);
//   };

//   const location = useLocation();

// useEffect(() => {
//   const queryParams = new URLSearchParams(location.search);
//   const filterFromUrl = queryParams.get("filter"); // e.g., "Insulation Tester"
//   if (filterFromUrl) {
//     setActiveFilter(filterFromUrl); // update your filter state
//   }
// }, [location.search]);

//   return (
//     <>
//       {/* HERO BANNER */}
//       <div className="allproducts-hero">
//         <div className="allproducts-overlay flex-column text-center">
//           <h1 className="allproducts-title" data-aos="zoom-out">
//             All Products
//           </h1>

//           <p
//             className="aboutPara"
//             data-aos="zoom-out"
//             style={{ textAlign: "justify" }}
//           >
//             Explore our complete range of high-precision test and measurement
//             instruments, engineered with over 25 years of expertise and driven
//             by continuous R&D innovation to deliver accuracy, reliability, and
//             unmatched performance.
//           </p>

//           <Form className="search-bar" data-aos="zoom-in">
//             <Form.Control
//               type="text"
//               placeholder="Search product name or model..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </Form>
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <Container className="mt-5">
//         <Row>
//           {/* LEFT FILTER SIDEBAR */}
//           {/* DESKTOP FILTER SIDEBAR */}
//           <Col
//             lg={3}
//             md={4}
//             className="mb-4 sticky-filter-col d-none d-md-block"
//           >
//             <div className="filters-box">
//               <h5 className="filter-heading">Products By Categories</h5>

//               <ul className="filter-list">
//                 <li
//                   className={
//                     activeFilter === "All Products" ? "active-filter" : ""
//                   }
//                   onClick={() => setActiveFilter("All Products")}
//                 >
//                   All Products
//                 </li>

//                 <li
//                   className={
//                     activeFilter === "Insulation Tester" ? "active-filter" : ""
//                   }
//                   onClick={() => setActiveFilter("Insulation Tester")}
//                 >
//                   Insulation Tester
//                 </li>

//                 <li
//                   className={
//                     activeFilter === "Digital Earth Resistance Tester"
//                       ? "active-filter"
//                       : ""
//                   }
//                   onClick={() =>
//                     setActiveFilter("Digital Earth Resistance Tester")
//                   }
//                 >
//                   Digital Earth Resistance Tester
//                 </li>

//                 <li
//                   className={
//                     activeFilter === "Digital Micro Ohm Meter"
//                       ? "active-filter"
//                       : ""
//                   }
//                   onClick={() => setActiveFilter("Digital Micro Ohm Meter")}
//                 >
//                   Digital Micro Ohm Meter
//                 </li>

//                 <li
//                   className={
//                     activeFilter === "High Voltage Probe" ? "active-filter" : ""
//                   }
//                   onClick={() => setActiveFilter("High Voltage Probe")}
//                 >
//                   High Voltage Probe
//                 </li>
//               </ul>
//             </div>
//           </Col>

//           {/* MOBILE FILTER DROPDOWN */}
//           <Col xs={12} className="mb-4 d-md-none">
//             <Form.Select
//               value={activeFilter}
//               onChange={(e) => setActiveFilter(e.target.value)}
//               className="mobile-filter-dropdown"
//             >
//               <option value="All Products">All Products</option>
//               <option value="Insulation Tester">Insulation Tester</option>
//               <option value="Digital Earth Resistance Tester">
//                 Digital Earth Resistance Tester
//               </option>
//               <option value="Digital Micro Ohm Meter">
//                 Digital Micro Ohm Meter
//               </option>
//               <option value="High Voltage Probe">High Voltage Probe</option>
//             </Form.Select>
//           </Col>

//           {/* PRODUCT GRID */}
//           <Col lg={9} md={8} sm={12}>
//             <Row>
//               {filteredProducts.length === 0 ? (
//                 <h4>No products found</h4>
//               ) : (
//                 filteredProducts.map((item) => (
//                   <Col
//                     key={item.id}
//                     lg={4}
//                     md={6}
//                     sm={6}
//                     xs={6}
//                     className="mb-4"
//                   >
//                     <Card className="product-card ">
//                       <div className="img-wrapper">
//                         <Card.Img src={item.img} className="product-img" />
//                       </div>

//                       <Card.Body className="text-center">
//                         <Card.Title className="product-title">
//                           {item.name}
//                         </Card.Title>
//                         <p className="product-model">{item.model}</p>

//                         <Button
//                           className="btn-orange"
//                           onClick={() => navigate(`/product/${item.id}`)}
//                         >
//                           Explore
//                         </Button>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 ))
//               )}
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./CSS/allProducts.css";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { productsData } from "../data/productsData";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export const AllProducts = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    AOS.refresh();
  }, []);

  // SEARCH + FILTER STATE
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Products");

  // ✅ Set filter from URL query parameter
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const filterFromUrl = queryParams.get("filter"); // e.g., "Insulation Tester"
    if (filterFromUrl) setActiveFilter(filterFromUrl);
  }, [location.search]);

  // FILTER LOGIC
  const filteredProducts = productsData.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.model.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      activeFilter === "All Products" || p.category === activeFilter;

    return matchSearch && matchFilter;
  });

  return (
    <>
      {/* HERO BANNER */}
      <div className="allproducts-hero">
        <div className="allproducts-overlay flex-column text-center">
          <h1 className="allproducts-title" data-aos="zoom-out">
            All Products
          </h1>

          <p
            className="aboutPara"
            data-aos="zoom-out"
            style={{ textAlign: "justify" }}
          >
            Explore our complete range of high-precision test and measurement
            instruments, engineered with over 25 years of expertise and driven
            by continuous R&D innovation to deliver accuracy, reliability, and
            unmatched performance.
          </p>

          <Form className="search-bar" data-aos="zoom-in">
            <Form.Control
              type="text"
              placeholder="Search product name or model..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <Container className="mt-5">
        <Row>
          {/* LEFT FILTER SIDEBAR */}
          <Col
            lg={3}
            md={4}
            className="mb-4 sticky-filter-col d-none d-md-block"
          >
            <div className="filters-box">
              <h5 className="filter-heading">Products By Categories</h5>
              <ul className="filter-list">
                {[
                  "All Products",
                  "Insulation Tester",
                  "Digital Earth Resistance Tester",
                  "Digital Micro Ohm Meter",
                  "High Voltage Probe",
                ].map((filter) => (
                  <li
                    key={filter}
                    className={activeFilter === filter ? "active-filter" : ""}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* MOBILE FILTER DROPDOWN */}
          <Col xs={12} className="mb-4 d-md-none">
            <Form.Select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="mobile-filter-dropdown"
            >
              {[
                "All Products",
                "Insulation Tester",
                "Digital Earth Resistance Tester",
                "Digital Micro Ohm Meter",
                "High Voltage Probe",
              ].map((filter) => (
                <option key={filter} value={filter}>
                  {filter}
                </option>
              ))}
            </Form.Select>
          </Col>

          {/* PRODUCT GRID */}
          <Col lg={9} md={8} sm={12}>
            <Row>
              {filteredProducts.length === 0 ? (
                <h4>No products found</h4>
              ) : (
                filteredProducts.map((item) => (
                  <Col
                    key={item.id}
                    lg={4}
                    md={6}
                    sm={6}
                    xs={6}
                    className="mb-4"
                  >
                    <Card className="product-card">
                      <div className="img-wrapper">
                        <Card.Img src={item.img} className="product-img" />
                      </div>

                      <Card.Body className="text-center">
                        <Card.Title className="product-title">
                          {item.name}
                        </Card.Title>
                        <p className="product-model">{item.model}</p>
                        <Button
                          className="btn-orange"
                          onClick={() => navigate(`/product/${item.id}`)}
                        >
                          Explore
                          <motion.span
                            className="arrow-icon"
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <FiArrowRight />
                          </motion.span>
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
