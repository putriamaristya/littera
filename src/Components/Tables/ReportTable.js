import { Table } from "reactstrap";
import React, { useState } from "react";
import StudentModal from "../modal/StudentModal";
import ReportCard from "../cards/ReportCard";

const ReportTable = (props) => {
  const { buttonLabel, className } = props;

  let customer = [
    {
      id: 1,
      name: "Putri",
      address: "bandung",
      username: "put",
      password: "put",
    },
    {
      id: 2,
      name: "Unair",
      address: "bandssung",
      username: "pusssst",
      password: "pussssst",
    },
    {
      id: 3,
      name: "UNESA",
      address: "baaaandung",
      username: "putaaa",
      password: "putaaaaaaa",
    },

    {
      id: 4,
      name: "UNPAD",
      address: "bandfffung",
      username: "puffft",
      password: "puffft",
    },
  ];

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Table borderless className="text-center">
      <thead>
        <tr>
          <th>
            <StudentModal />
          </th>
        </tr>
      </thead>
      <tbody>
        {customer.map((customer) => (
          <tr>
            <td>
              <ReportCard
                name={customer.name}
                address={customer.address}
                username={customer.username}
                password={customer.password}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ReportTable;
