import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import ModalImage from "react-modal-image";

const Styles = styled.div`
  img {
    margin-bottom: 2rem;
    transition: transform .2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`

export default function ProjectsItem(props) {

  return (
    <div>
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {props.heading}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Styles>
              <Container>
                <Row>
                  <Col className = "align-self-center text-center"> 
                    <ModalImage
                      small={props.image1}
                      large = {props.image1} 
                      hideDownload = {true}
                    />
                  </Col>
                  <Col lg = {8}>
                    <strong>Summary:</strong>
                    <br/>
                    <p>{props.summary}</p>
                  </Col>
                </Row>
                <br/>
                <Row>
                  <Col className = "align-self-center text-center">
                    <ModalImage
                      small={props.image2}
                      large = {props.image2} 
                      hideDownload = {true}
                    />
                  </Col>
                  <Col lg = {8}>
                    <strong>What I learned: </strong>
                    {props.learnings}
                  </Col>
                </Row>
              </Container>
              </Styles>
            </Modal.Body>
            <Modal.Footer>
              {props.extrabutton}
              <Button style = {{'backgroundColor': '#e86100', 'borderColor': '#e86100'}} href={props.link} target="_blank" rel="noopener noreferrer">{props.customText || "View on GitHub"}</Button>
            </Modal.Footer>
        </Modal>
    </div>
  );
}