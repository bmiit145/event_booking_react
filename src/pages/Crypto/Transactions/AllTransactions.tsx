import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

//redux
import { useSelector, useDispatch } from "react-redux";
import TableContainer from '../../../Components/Common/TableContainer';
import { getTransationList } from "../../../slices/thunks";

import {
    FromCol,
    ToCol,
    DetailsCol,
    TransactionID,
    TypeCol,
    Status
} from "./TransactionsCol";

const AllTransactions = () => {
    const dispatch = useDispatch<any>();

    const { transationList } = useSelector((state: any) => ({
        transationList: state.Crypto.transationList,
    }));

    useEffect(() => {
        dispatch(getTransationList());
    }, [dispatch]);


    useEffect(() => {
        setTransation(transationList);
    }, [transationList]);

    const [transation, setTransation] = useState(transationList);

    const category = (e: any) => {
        if (e === "All") {
            var filter = transationList.filter((item: any) => item.category !== e);
        } else {
            filter = transationList.filter((item: any) => item.category === e);
        }
        setTransation(filter);
    };

    const flowType = (e: any) => {
        setTransation(
            transationList.filter((item: any) => item.type === e));
    };


    const columns = useMemo(
        () => [
            {
                Header: "#",
                Cell: (transation: any) => (
                    <>
                        <div className="avatar-xs">
                            <div className={"avatar-title bg-" + transation.row.original.iconClass + "-subtle text-" + transation.row.original.iconClass + " rounded-circle fs-16"}>
                                <i className={transation.row.original.icon}></i>
                            </div>
                        </div>
                    </>
                ),
            },
            {
                Header: "Timestamp",
                Cell: (transation: any) => (
                    <>
                        {transation.row.original.date}{" "}
                        <small className="text-muted">{transation.row.original.time}</small>
                    </>
                ),
            },
            {
                Header: "Currency",
                Cell: (transation: any) => (
                    <>
                        <div className="d-flex align-items-center">
                            <img src={transation.row.original.image} alt="" className="avatar-xxs me-2" />
                            {transation.row.original.currency}
                        </div>
                    </>
                ),
            },
            {
                Header: "From",
                accessor: "from",
                filterable: false,
                Cell: (cellProps: any) => {
                    return <FromCol {...cellProps} />;
                },
            },
            {
                Header: "To",
                accessor: "to",
                filterable: false,
                Cell: (cellProps: any) => {
                    return <ToCol {...cellProps} />;
                },
            },
            {
                Header: "Details",
                accessor: "details",
                filterable: false,
                Cell: (cellProps: any) => {
                    return <DetailsCol {...cellProps} />;
                },
            },
            {
                Header: "Transaction ID",
                accessor: "id",
                filterable: false,
                Cell: (cellProps: any) => {
                    return <TransactionID {...cellProps} />;
                },
            },
            {
                Header: "Type",
                accessor: "type",
                filterable: false,
                Cell: (cellProps: any) => {
                    return <TypeCol {...cellProps} />;
                },
            },
            {
                Header: "Amount",
                Cell: (transation: any) => (
                    <>
                        <h6 className={"text-" + transation.row.original.iconClass + " amount mb-1"}>-{transation.row.original.amount}</h6>
                        <p className="text-muted mb-0">{transation.row.original.amount1}</p>
                    </>
                ),
            },
            {
                Header: "Status",
                accessor: "status",
                filterable: false,
                Cell: (cellProps: any) => {
                    return <Status {...cellProps} />;
                },
            },
        ],
        []
    );
    return (
        <React.Fragment>
            <Row className="align-items-center mb-4 g-3">
                <Col sm={2}>
                    <div className="d-flex align-items-center gap-2">
                        <span className="text-muted flex-shrink-0">Sort by: </span>
                        <select className="form-control mb-0" data-choices data-choices-search-false name="choices-single-default" id="choices-single-default" onChange={(e: any) => category(e.target.value)}>
                            <option defaultValue="All">All</option>
                            <option value="USD">USD</option>
                            <option value="ETH">ETH</option>
                            <option value="BTC">BTC</option>
                            <option value="EUR">EUR</option>
                            <option value="JPY">JPY</option>
                        </select>
                    </div>
                </Col>
                <div className="col-sm-auto ms-auto">
                    <div className="d-flex gap-2">
                        <Link to="#" data-bs-toggle="modal" className="btn btn-soft-secondary" onClick={() => flowType("Deposit")}>Deposite</Link>
                        <Link to="#" data-bs-toggle="modal" className="btn btn-soft-success" onClick={() => flowType("Withdraw")}>Withdraw</Link>
                    </div>
                </div>
            </Row>

            <Card>
                <CardHeader>
                    <Row className="align-items-center g-3">
                        <Col md={3}>
                            <h5 className="card-title mb-0">All Transactions</h5>
                        </Col>
                        <div className="col-md-auto ms-auto">
                            <div className="d-flex gap-2">
                                <div className="search-box">
                                    <input type="text" className="form-control search" placeholder="Search for transactions..." />
                                    <i className="ri-search-line search-icon"></i>
                                </div>
                                <button className="btn btn-primary">
                                    <i className="ri-equalizer-line align-bottom me-1"></i>
                                    Filters
                                </button>
                            </div>
                        </div>
                    </Row>
                </CardHeader>
                <CardBody>
                    <TableContainer
                        columns={columns}
                        data={(transation || [])}
                        isGlobalFilter={false}
                        isAddUserList={false}
                        customPageSize={8}
                        className="custom-header-css"
                        divClass="table-responsive table-card mb-4"
                        tableClass="align-middle table-nowrap mb-0"
                        theadClass="table-light table-nowrap"
                        thClass="table-light text-muted"
                    />
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default AllTransactions;