import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Card, Container } from "react-bootstrap";
import {
  dataabout,
  meta,
  skills,
} from "../../content_option";

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
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Where I Study</h3>
          </Col>
          <Col lg="7">
            <Row className="w-100">
              <Col className="col-12 col-md-6">
                <img src="https://yuz.uz/file/news/7cd8deb6553915d6b86b6c3a1f3b0a55.jpg" className="img-fluid" alt="" />
              </Col>
              <Col className="col-12 col-md-6">
                <img src="https://www.tuitkf.uz/media/news/images/photo_2023-07-24_15-59-38_PDEdJeB.jpg" className="img-fluid" alt="" />
              </Col>
              <Col className="col-12 col-md-6">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/TATU_Qarshi_filiali.jpg" className="img-fluid" alt="" />
              </Col>
              <Col className="col-12 col-md-6">
                <img src="https://lh6.googleusercontent.com/-Boh5Je6EA04/WOCiE5a8FaI/AAAAAAAAAUA/ZtTouK9VAocZQbZAUlrwYq8vFt77-3NNQCLIB/s1600-w400/" className="img-fluid" alt="" />
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
                      <h3 className="card-title">{skills.name}</h3>
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
