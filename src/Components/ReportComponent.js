import React from "react";
import { Button, Card, CardBody, Col, Nav, Row } from "reactstrap";
import ReportCard from "./cards/ReportCard";
import ReportTable from "./Tables/ReportTable";

function ReportComponent() {
  return (
    <div className="full-height">
      <div className="my-card full-height">
        <div className="full-height p-4">
          <h3>Students</h3>
          <hr />

          <ReportCard />
        </div>
      </div>
    </div>
  );
}

export default ReportComponent;
