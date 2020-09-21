import { Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import CustomerGroupModal from "../modal/CustomerGroupModal";
import GroupCard from "../cards/GroupCard";

const CustomerGroupTable = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  let array = [
    {
      id: 1,
      name: "ITS",
    },
    {
      id: 2,
      name: "Unair",
    },
    {
      id: 3,
      name: "UNESA",
    },

    {
      id: 4,
      name: "UNPAD",
    },
  ];

  return (
    <Table borderless>
      <thead>
        <tr>
          <th>
            <CustomerGroupModal />
          </th>
        </tr>
      </thead>
      <tbody>
        {array.map((array) => (
          <tr>
            <td>
              <GroupCard name={array.name} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomerGroupTable;
