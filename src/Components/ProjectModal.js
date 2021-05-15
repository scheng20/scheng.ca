import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import ModalImage from "react-modal-image";
import Badge from 'react-bootstrap/Badge';

const Styles = styled.div`
  img {
    margin-bottom: 2rem;
    transition: transform .2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  .badge-pill {
    background-color: #e86100; 
    color: white;
    font-size: 0.9rem;
    margin-right: 0.5rem;
  }

  .btn-primary {
    background-color: #e86100 !important;
    border-color: #e86100 !important;
    margin-right: 1rem;
  }
`

export default function ProjectModal(props) {

  return (
    <div>
      <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              <Styles>
                <Container>
                  <Row>
                    <Col lg = "auto" style = {{'paddingRight' : '0px'}}>
                      {props.title}
                    </Col>
                    <Col>
                      {props.badges.map(badge =>
                        <Badge pill> {badge} </Badge>
                      )}
                    </Col>
                  </Row>
                </Container>
              </Styles>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Styles>
              <Container>
                <Row>
                  <Col className = "align-self-center text-center"> 
                    <ModalImage
                      small={require('../Assets/Images/'+ props.image1).default}
                      large = {require('../Assets/Images/'+ props.image1).default} 
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
                      small={require('../Assets/Images/'+ props.image2).default}
                      large = {require('../Assets/Images/'+ props.image2).default} 
                      hideDownload = {true}
                    />
                  </Col>
                  <Col lg = {8}>
                    <strong>What I learned: </strong>
                    <ul>
                      {props.learnings.map(lesson =>
                        <li> {lesson} </li>
                      )}
                    </ul>
                  </Col>
                </Row>
              </Container>
            </Styles>
          </Modal.Body>
          <Modal.Footer>
            <Styles>
              {props.extra_link ? <Button href={props.extra_link} target="_blank" rel="noopener noreferrer">{props.extra_link_text}</Button> : null}
              <Button href={props.link} target="_blank" rel="noopener noreferrer">{props.custom_text || "View on GitHub"}</Button>
            </Styles>
          </Modal.Footer>
      </Modal>
    </div>
  );
}