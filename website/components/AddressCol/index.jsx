import React from "react";
import "./AddressCol.css";

function AddressCol(props) {
  const { address, address2 } = props;

  return (
    <div className="address-col">
      <div className="address rigsans-bold-white-18px">{address ? address : ""}</div>
      <p className="address-1 rigsans-regular-normal-white-14px">{address2 ? address2 : ""}</p>
    </div>
  );
}

export default AddressCol;
