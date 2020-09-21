import { Table } from "reactstrap";
import React, { useState } from "react";
import StudentModal from "../modal/StudentModal";
import StudentCard from "../cards/StudentCard";

const StudentTable = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  let array = [
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
        {array.map((array) => (
          <tr>
            <td>
              <StudentCard
                name={array.name}
                address={array.address}
                username={array.username}
                password={array.password}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default StudentTable;
