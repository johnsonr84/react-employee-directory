import React from "react";

function Table({ name, image, phone, email }) {

  return (
    <tr>
      <td>{name}</td>
      <td><img alt={name} src={image} /></td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr> 
  );
}

export default Table;