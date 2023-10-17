import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Card, Container } from "react-bootstrap";
import {
  dataabout,
  meta,
  skills,
} from "../../content_option";
import { Link } from "react-router-dom";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jfif";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jfif";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jfif";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | About</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 text-danger fw-bold mb-4" style={{ letterSpacing: "1px" }}>About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div className="about_me">
              <p>
                {dataabout.aboutme}
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 24 24">
                  <g transform="rotate(180 12 12)">
                    <path fill="currentColor" d="M10.928 21a2.978 2.978 0 0 1-2.121-.879L1.686 13l7.121-7.121c1.133-1.134 3.109-1.134 4.242 0c.566.564.879 1.317.879 2.119c0 .746-.27 1.451-.764 2.002H18c1.654 0 3 1.346 3 3s-1.346 3-3 3h-4.836c.493.549.764 1.252.764 1.998a2.977 2.977 0 0 1-.879 2.124a2.983 2.983 0 0 1-2.121.878zm-6.414-8l5.707 5.707a1.023 1.023 0 0 0 1.414 0c.189-.189.293-.441.293-.708s-.104-.517-.291-.705L8.342 14H18a1.001 1.001 0 0 0 0-2H8.342l3.293-3.293a.996.996 0 0 0 .001-1.413a1.023 1.023 0 0 0-1.415-.001L4.514 13z" />
                  </g>
                </svg>
                <Link to="/portfolio" className="ms-2">view projects</Link>
              </p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Where I Study</h3>
          </Col>
          <Col lg="7">
            <Row className="w-100">
              <Col className="col-12 col-md-5 me-4 ms-2 g-3 about_img">
                <img src={img1} alt="imgEducation" />
              </Col>
              <Col className="col-12 col-md-5 me-4 ms-2 g-3 about_img">
                <img src={img2} alt="imgEducation" />
              </Col>
              <Col className="col-12 col-md-5 me-4 ms-2 g-3 about_img">
                <img src={img3} alt="imgEducation" />
              </Col>
              <Col className="col-12 col-md-5 me-4 ms-2 g-3 about_img">
                <img src={img4} alt="imgEducation" />
              </Col>
              <Col className="col-12 col-md-5 me-4 ms-2 g-3 about_img">
                <img src={img5} alt="imgEducation" />
              </Col>
              <Col className="col-12 col-md-5 me-4 ms-2 g-3 about_img">
                <img src={img6} alt="imgEducation" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="sec_sp pb-5">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7" className="grid-container">
            {skills.map((skills, i) => {
              return (
                <div key={i}>
                  <Card className="skill-card">
                    <Card.Body>
                      <h2 className="card-title">{skills.name}</h2>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
