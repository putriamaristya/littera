import {
  faAlignJustify,
  faClock,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

const GroupCard = (props) => {
  return (
    <div className="BaYsc d-flex justify-content-between">
      <Link
        to={"/students/"}
        className=" button-group d-flex justify-content-between px-3"
      >
        <div className="align-self-center">{props.name}</div>
      </Link>
      <div className="edit-delete d-flex align-self-center">
        <a className="align-self-center button-remove text-center ">
          <FontAwesomeIcon icon={faEdit} />
        </a>
        <a className="align-self-center button-remove text-center">
          <FontAwesomeIcon icon={faTrash} />
        </a>
      </div>
    </div>
  );
};

export default GroupCard;
