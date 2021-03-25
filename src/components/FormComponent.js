import React, { useState } from "react";
import { Form } from "react-bootstrap";

function FormComponent() {
  const [contactFName, setContactFName] = useState();
  const [contactLName, setContactLName] = useState();
  const [contactBio, setContactBio] = useState();

  const handleCustomerFName = (e) => {
    setContactFName(e.target.value);
  };

  const handleCustomerLName = (e) => {
    setContactLName(e.target.value);
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
        bio: contactBio,
      }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    console.log(contactFName, contactLName, contactBio);
  };
  return (
    <div className="form-add">
      <div className="form-add-div shadow">
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
