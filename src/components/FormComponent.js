import React, { useState } from "react";
import { Form } from "react-bootstrap";

function FormComponent() {
  const [contactFName, setContactFName] = useState();
  const [contactLName, setContactLName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [contactBio, setContactBio] = useState();

  let mousePosition;
  let offset = [0, 0];
  let isDown = false;

  const handleCustomerFName = (e) => {
    setContactFName(e.target.value);
  };

  const handleCustomerLName = (e) => {
    setContactLName(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleContactBio = (e) => {
    setContactBio(e.target.value);
  };

  const handleAddition = (e) => {
    // e.preventDefault();
    fetch("http://localhost:3004/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: Math.random(),
        firstName: contactFName,
        lastName: contactLName,
        phoneNumber: phoneNumber,
        bio: contactBio,
      }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    console.log(contactFName, contactLName, contactBio);
  };

  const handleMouseDown = (e) => {
    const darggableForm = document.getElementById("darggableForm");
    isDown = true;
    offset = [
      darggableForm.offsetLeft - e.clientX,
      darggableForm.offsetTop - e.clientY,
    ];
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e) => {
    const darggableForm = document.getElementById("darggableForm");
    e.preventDefault();
    if (isDown) {
      mousePosition = {
        x: e.clientX,
        y: e.clientY,
      };
      darggableForm.style.left = mousePosition.x + offset[0] + "px";
      darggableForm.style.top = mousePosition.y + offset[1] + "px";
    }
  };

  return (
    <div className="form-add">
      <div
        className="form-add-div shadow"
        id="darggableForm"
        onMouseDownCapture={handleMouseDown}
        onMouseUpCapture={handleMouseUp}
        onMouseMoveCapture={handleMouseMove}
      >
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="fname"
              placeholder="Enter first name"
              onChange={handleCustomerFName}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="lname"
              placeholder="Enter last name"
              onChange={handleCustomerLName}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="phone"
              placeholder="Enter phone number"
              onChange={handlePhoneNumber}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              type="bio"
              placeholder="Enter bio"
              onChange={handleContactBio}
            />
          </Form.Group>

          <button
            className="btn btn-custom"
            type="submit"
            onClick={handleAddition}
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}

export default FormComponent;
