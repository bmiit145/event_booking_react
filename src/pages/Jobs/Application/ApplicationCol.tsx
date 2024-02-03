import React from "react";
import { NavLink } from "react-router-dom";

const AppId = (cell: any) => {
  return (
    <NavLink to="#" className="fw-semibold link-primary">
      #VZ0{cell.value ? cell.value < 10 ? ("0" + cell.value) : cell.value : ""}
    </NavLink>
  );
};
const Name = (cell: any) => {
  return <React.Fragment>{cell.value}</React.Fragment>;
};
const Designation = (cell: any) => {
  return <React.Fragment>{cell.value}</React.Fragment>;
};

const Date = (cell: any) => {
  return <React.Fragment>{cell.value}</React.Fragment>;
};


const Contact = (cell: any) => {
  return <React.Fragment>{cell.value}</React.Fragment>;
};
const Type = (cell: any) => {
  return <React.Fragment>{cell.value}</React.Fragment>;
};

const Status = (cell: any) => {
  return (
    <React.Fragment>
      {cell.value === "New" ? (
        <span className="badge bg-info-subtle text-info text-uppercase">
          {cell.value}
        </span>
      ) : cell.value === "Rejected" ? (
        <span className="badge bg-danger-subtle text-danger text-uppercase">
          {cell.value}
        </span>
      ) : cell.value === "Pending" ? (
        <span className="badge bg-warning-subtle text-warning text-uppercase">
          {cell.value}
        </span>
      ) : cell.value === "Approved" ? (
        <span className="badge bg-success-subtle text-success text-uppercase">
          {cell.value}
        </span>
      ) : null}
    </React.Fragment>
  );
};

export { AppId, Name, Designation, Date, Contact, Type, Status };
