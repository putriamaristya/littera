import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const CustomerGroupForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="groupName">Name</Label>
        <Input
          type="text"
          name="groupName"
          id="groupName"
          placeholder="Enter Group Name"
        />
      </FormGroup>
    </Form>
  );
};

export default CustomerGroupForm;
