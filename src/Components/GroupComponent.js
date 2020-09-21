import { faEraser, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, CardBody, Nav, NavItem, NavLink, Row } from "reactstrap";

function GroupComponent() {
  return (
    <div className="group full-height">
      <div className="my-card full-height">
        <div className="full-height">
          <h4 className="px-4 pt-4">Groups</h4>
          <hr className="line-horizontal"></hr>

          <Nav vertical className="justify-content-center">
            <Nav className="justify-content-center mb-2">
              <Button
                outline
                color="primary"
                className="button-width rounded-pill"
              >
                +
              </Button>{" "}
            </Nav>

            <Nav className="justify-content-center mb-2">
              <Button outline color="primary" className="button-2 rounded-pill">
                Unair
              </Button>{" "}
              <Button outline color="primary" className="rounded-pill ">
                <FontAwesomeIcon icon={faPen} size="" />
              </Button>{" "}
              <Button outline color="primary" className="rounded-pill ">
                <FontAwesomeIcon icon={faEraser} />
              </Button>{" "}
            </Nav>

            <Nav className="justify-content-center mb-2">
              <Button
                outline
                color="primary"
                className="button-width rounded-pill"
              >
                ITS
              </Button>{" "}
            </Nav>

            <Nav className="justify-content-center mb-2">
              <Button
                outline
                color="primary"
                className="button-width rounded-pill"
              >
                other
              </Button>{" "}
            </Nav>
          </Nav>
        </div>
      </div>
    </div>
  );
}

export default GroupComponent;
