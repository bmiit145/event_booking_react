import React from 'react';
import { Link } from 'react-router-dom';
import * as moment from "moment";

const handleValidDate = (date: any) => {
    const date1 = moment(new Date(date)).format("DD MMM Y");
    return date1;
};

const TicketsId = (cell: any) => {
    return (
        <React.Fragment>
            <Link to="/apps-tickets-details" className="fw-medium link-primary">{cell.value}</Link>
        </React.Fragment>
    );
};

const Title = (cell: any) => {
    return (
        <React.Fragment>
            {cell.value}
        </React.Fragment>
    );
};

const Client = (cell: any) => {
    return (
        <React.Fragment>
            {cell.value}
        </React.Fragment>
    );
};

const AssignedTo = (cell: any) => {
    return (
        <React.Fragment>
            {cell.value}
        </React.Fragment>
    );
};

const CreateDate = (cell: any) => {
    return (
        <React.Fragment>
            {handleValidDate(cell.value)}
        </React.Fragment>
    );
};

const DueDate = (cell: any) => {
    return (
        <React.Fragment>
            {cell.value}
        </React.Fragment>
    );
};

const Status = (cell: any) => {
    return (
        <React.Fragment>
            {cell.value === "Inprogress" ? <span className="badge bg-warning-subtle text-warning text-uppercase">{cell.value}</span>
                : cell.value === "New" ? <span className="badge bg-info-subtle text-info text-uppercase">{cell.value}</span>
                    : cell.value === "Open" ? <span className="badge bg-success-subtle text-success text-uppercase">{cell.value}</span>
                        : cell.value === "Closed" ? <span className="badge bg-danger-subtle text-danger text-uppercase">{cell.value}</span>
                            : null
            }
        </React.Fragment>
    );
};

const Priority = (cell: any) => {
    return (
        <React.Fragment>
            {cell.value === "Medium" ?
                <span className="badge bg-warning text-uppercase">{cell.value}</span>
                :
                cell.value === "High" ?
                    <span className="badge bg-danger text-uppercase">{cell.value}</span>
                    : cell.value === "Low" ?
                        <span className="badge bg-success text-uppercase">{cell.value}</span>
                        : null
            }
        </React.Fragment>
    );
};

export { TicketsId, Title, Client, AssignedTo, CreateDate, DueDate, Status, Priority };