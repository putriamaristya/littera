import React from "react";

const { default: CustomerGroupTable } = require("./Tables/CustomerGroupTable");

function Groups() {
  return (
    <div>
      <div className="FHseYW">
        <div className="cRDmY p-2">
          <h3 className="px-3 pt-3">Groups</h3>
          <hr></hr>
          <CustomerGroupTable />
        </div>
      </div>
      ;
    </div>
  );
}

export default Groups;
