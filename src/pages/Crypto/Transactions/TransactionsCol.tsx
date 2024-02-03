import React from 'react';

const FromCol = (cell: any) => {
    return (
        <React.Fragment>
            {cell.value}
        </React.Fragment>
    );
};

const ToCol = (cell: any) => {
    return (
        <React.Fragment>
            {cell.value}
        </React.Fragment>
    );
};

const DetailsCol = (cell: any) => {
    return (
        <React.Fragment>
            {cell.value}
        </React.Fragment>
    );
};

const TransactionID = (cell: any) => {
    return (
        <React.Fragment>
            {cell.value}
        </React.Fragment>
    );
};

const TypeCol = (cell: any) => {
    return (
        <React.Fragment>
            {cell.value}
        </React.Fragment>
    );
};

const Status = (cell: any) => {
    return (
        <React.Fragment>
            {cell.value === "Processing" ?
                <span className="badge bg-primary-subtle text-primary fs-11">{" "}<i className="ri-time-line align-bottom"></i>{" "}{cell.value}</span>
                :
                cell.value === "Success" ?
                    <span className="badge bg-success-subtle text-success fs-11">{" "}<i className="ri-checkbox-circle-line align-bottom"></i>{" "}{cell.value}</span>
                    : cell.value === "Failed" ?
                        <span className="badge bg-danger-subtle text-danger fs-11">{" "}<i className="ri-close-circle-line align-bottom"></i>{" "}{cell.value}</span>
                        : null
            }
        </React.Fragment>
    );
};

export { FromCol, ToCol, DetailsCol, TransactionID, TypeCol, Status };
