
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Compunents/Sidebar";
import NavBar from "../../Compunents/Navbar";
import FeedRewies from "./FeedRewies";


const Feedback = () => {
  return (
    <>
     <Container fluid>
        <Row>
          <Col xs={2} md={2} className=" ps-0">
            <Sidebar activeTab="Feedback" />
          </Col>
          <Col xs={10} md={10} style={{ backgroundColor: "#FAFBFF" }}>
            <Row>
              <NavBar  className=''/>
            </Row>
            <Row>
              <Col md={12} className="p-4 bg-white" style={{background:'#F9F9F9'}}>
               
              <FeedRewies/>
              </Col>
            
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Feedback;
