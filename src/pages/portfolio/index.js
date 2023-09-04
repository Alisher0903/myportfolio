import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import Typewriter from "typewriter-effect";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Portfolio</title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4 text-danger fw-bold"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <h4 className="project_animation">
          <Typewriter
            options={{
              strings: [
                "The wisdom of life! Consists in the elimination of non-essentials."
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 15,
            }}
          />
        </h4>

        <h4 className="mt-5 project_txt"> Projects </h4>

        <div className="mb-5 mt-2 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="projectImg" />
                <div className="content">
                  <p className="project_dec">{data.description}</p>
                  <p className="project_tech">{data.descriptionTech}</p>
                  <a href={data.link} target="_blank">view project</a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};