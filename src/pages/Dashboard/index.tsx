import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import Widget from "./Widgets";

const DashboardEcommerce = () => {
  document.title = "Dashboard | Velzon - React Admin & Dashboard Template";

  const [rightColumn, setRightColumn] = useState(true);
  const toggleRightColumn = () => {
    setRightColumn(!rightColumn);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Dashboard" pageTitle="Dashboards" />
          {/* < Widget /> */}
          <Row>
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
