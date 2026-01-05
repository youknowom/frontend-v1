import React from 'react'
import { useState } from 'react'
import { Container, Form, Row , Col , Button } from 'react-bootstrap'
import "./CSS/inquiry.css"
const InquiryForm = () => {
   return (
    <>
    <div className='WholePage'>
      {/* 🔹 Hero Section */}
      <div className="inquiry-hero">
        <div className="inquiry-overlay">
          <Container className="text-center">
            <h2 className="inquiry-heading">Inquiry Form</h2>
              <p className='inquiryPara'>Please fill in your details and describe your requirements. Our team will review your inquiry and respond as soon as possible.</p>
          </Container>
        </div>
      </div>

      <div className='formDiv'>
      {/* 🔹 Inquiry Form */}
      <Container className="inquiry-form-container mt-4  ">
          {/* <h2>Fill The Form Below</h2> */}
        <Form >
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
              
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
           
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  name="companyName"
                  placeholder="Enter Company Name"
             
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Email"
               
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Phone No.</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone Number"
           
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Area of Interest</Form.Label>
                <Form.Control
                  type="text"
                  name="interest"
                  placeholder="Eg: Insulation / resisteance / Power Quality / Battery testing"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* 🔹 Large Enquiry Box */}
          <Row className="mb-4">
            <Col md={12}>
              <Form.Group>
                <Form.Label>Enquiry</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  name="enquiry"
                  placeholder="Write your detailed enquiry here..."
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          {/* 🔹 Submit Button */}
          <div className="text-center">
            <Button type="submit" className="inquiry-btn">
              Send Inquiry
            </Button>
          </div>
        </Form>
      </Container>
      </div>
      </div>
    </>
  );
}

export default InquiryForm