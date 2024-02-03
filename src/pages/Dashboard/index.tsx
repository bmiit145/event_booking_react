import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";

import  Section  from "./Section";
const DashboardEcommerce = () => {
    document.title = "Dashboard | Event Booking ";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Dashboard" pageTitle="Dashboards" />
                    <Row>
                        <Section/>
                        <Col>
                            <div className="h-100">
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default DashboardEcommerce;
