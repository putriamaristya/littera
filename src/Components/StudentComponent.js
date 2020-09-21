import React from "react";
import { Button, Card, CardBody, Col, Nav, Row } from "reactstrap";
import StudentTable from "./Tables/StudentTable";

function StudentComponent() {
  return (
    <div className="full-height">
      <div className="my-card full-height">
        <div className="full-height p-4">
          <h3>Students</h3>
          <hr />

          <StudentTable />
        </div>
      </div>
    </div>
  );
}

export default StudentComponent;
