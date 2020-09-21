import {
  faAlignJustify,
  faClock,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col, Table } from "reactstrap";

const StudentCard = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Username</th>
          <th scope="col">Password</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <td>{props.name}</td>
        <td>{props.address}</td>
        <td>{props.username}</td>
        <td>{props.password}</td>
        <td>
          {" "}
          <a className="align-self-center text-center ">
            <FontAwesomeIcon icon={faEdit} />
          </a>
        </td>
        <td>
          {" "}
          <a className="align-self-center text-center ">
            <FontAwesomeIcon icon={faTrash} />
          </a>
        </td>
      </tbody>
    </Table>
  );
};

export default StudentCard;
{
  /* <div className="BaYsc">
      <Link to="/qbank" className="cRDmY  d-flex justify-content-between px-3">
        <div className="align-self-center">{props.name}</div>
      </Link>
      <div className="cRDmY  d-flex justify-content-between px-4">
        <a className="align-self-center ml-4">
          <FontAwesomeIcon icon={faEdit} />
        </a>
        <a className="align-self-center mr-4">
          <FontAwesomeIcon icon={faTrash} />
        </a>
      </div>
    </div> */
}
