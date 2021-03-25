import React, { useState, useEffect } from "react";
import { Col, Jumbotron, ListGroup, Row } from "react-bootstrap";
import { fetchContacts } from "../apis/ContactApi";

function HomeComponent() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetchContacts().then((data) => {
      setContacts(data);
    });
  }, [setContacts]);
  return (
    <Jumbotron className="container-jum">
      <ListGroup>
        {contacts.map((data) => (
          <ListGroup.Item className="container-jum-item">
            <Row>
              <Col xs={5} md={12} lg={3} className="avatar-container">
                <p
                  data-letters={
                    data.firstName
                      ? data.firstName
                          .split(" ")
                          .map((name) => name[0])
                          .join("")
                          .toUpperCase() +
                        data.lastName
                          .split(" ")
                          .map((name) => name[0])
                          .join("")
                          .toUpperCase()
                      : null
                  }
                ></p>
              </Col>
              <Col xs={12} md={12} lg={9} className="text-container">
                <div>
                  <h3>
                    {data.firstName} {data.lastName}
                  </h3>
                  <p>{data.bio}</p>
                  <button className="btn btn-custom">Edit Contact</button>
                  <button
                    className="btn btn-custom-delete fa fa-times"
                    // onClick={handleDelete}
                  ></button>
                </div>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Jumbotron>
  );
}

export default HomeComponent;
