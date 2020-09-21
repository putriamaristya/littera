import React from "react";
import { Col, Row } from "reactstrap";
import GroupComponent from "./GroupComponent";
import NavbarComponent from "./NavbarComponent";
import StudentComponent from "./StudentComponent";
import Groups from "./Groups";

function MainComponent() {
  return (
    <div className="main">
      <div className="full-height">
        <NavbarComponent />
      </div>

      <div className="bottom-main full-height px-4 pb-4">
        <Groups />
        <StudentComponent />
      </div>
    </div>
  );
}

export default MainComponent;
