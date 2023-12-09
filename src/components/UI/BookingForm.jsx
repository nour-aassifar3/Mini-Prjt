import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup,Row,Col } from "reactstrap";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  const [comeToYou, setComeToYou] = useState(false);
  const handleCheckboxChange = () => {
    setComeToYou(!comeToYou);
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="tel" placeholder="Phone Number" />
      </FormGroup>
      

      {!comeToYou && (
        <>
          <FormGroup className="booking__form d-inline-block me-4 mb-4">
            <input type="text" placeholder="From Address" />
          </FormGroup>
          <FormGroup className="booking__form d-inline-block ms-1 mb-4">
            <input type="text" placeholder="To Address" />
          </FormGroup>
        </>
      )}
      <Row>
        <Col lg="12">
            <FormGroup check>
              <label check>
                <input
                  type="checkbox"
                  checked={comeToYou}
                  onChange={handleCheckboxChange}
                />
                
                <span className="ml-2 fw-bold text-success"> I will come to you to take it</span>
              </label>
            </FormGroup>
        </Col>
        
      </Row>
      <FormGroup className="booking__form d-inline-block me-4 mb-4 mt-4">
        <label htmlFor=""> <h5 className="mb-4 fw-bold ">Enter your driver's license</h5></label>
        <input type="file" name="" id="" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
      <label htmlFor=""> <h5 className="mb-4 fw-bold ">Enter a photo copy of your national card</h5></label>
      <input type="file" name="" id="" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
        ></textarea>
      </FormGroup>
      
    </Form>
  );
};

export default BookingForm;