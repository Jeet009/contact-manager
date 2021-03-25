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

  const handleDelete = (id) => {
    fetch("http://localhost:3004/contact/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        console.log(res);
        window.location = "/";
      })
      .catch((err) => console.log(err));
  };
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
                  <button
                    className="btn btn-custom fa fa-phone"
                    onClick={() => {
                      window.open("tel:" + data.phoneNumber);
                    }}
                  ></button>
                  <button
                    className="btn btn-custom-whatsapp fa fa-whatsapp"
                    onClick={() => {
                      window.open("https://wa.me/91" + data.phoneNumber);
                    }}
                  ></button>
                  <button
                    className="btn btn-custom-delete fa fa-times"
                    type="submit"
                    onClick={() => handleDelete(data.id)}
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
