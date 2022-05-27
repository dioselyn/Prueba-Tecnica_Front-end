import React from "react";
import "./TableBody.scss";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function TableBody({ index, user }) {
  const formatDecimal = (number) =>
    new Intl.NumberFormat("en-EN", {
      style: "decimal",
      maximumFractionDigits: 2,
    }).format(number);

  return (
    <React.Fragment>
      <div className="table__row">
        <div>{index + 1}</div>
        <div key={user.id}>{user.id}</div>
        <div key={user.login}>{user.login}</div>
        <div key={user.url}>
          <Link to={`user/${user.login}`}>
            <FaUser />
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export { TableBody };
