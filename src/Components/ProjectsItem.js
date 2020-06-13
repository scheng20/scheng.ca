import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';

const Styles = styled.div`
  
  /* xs */
  img {
      width: 80%;
      height: auto;
      margin-bottom: 2rem;
  }

  /* sm */
  @media (min-width: 768px) {
      img {
          width: 80%;
      }
  }

  /* md */
  @media (min-width: 992px) {
      img {
          width: 100%;
      }
  }

  /* lg */
  @media (min-width: 1200px) {
      img {
          width: 100%;
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
                  <Col className = "text-center"> 
                    <Image src={props.image1} rounded fluid/>        
                  </Col>
                  <Col lg = {8}>
                    <strong>Summary:</strong>
                    <br/>
                    <p>{props.summary}</p>
                  </Col>
                </Row>
                <Row>
                  <Col className = "text-center">
                    <Image src={props.image2} rounded fluid />
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
              <Button style = {{'backgroundColor': '#e86100', 'borderColor': '#e86100'}} href={props.link} target="_blank" rel="noopener noreferrer">View on GitHub</Button>
            </Modal.Footer>
        </Modal>
    </div>
  );
}