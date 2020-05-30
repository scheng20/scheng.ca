import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

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
              <Container>
                <Row>
                  <Col> 
                    <Image src={props.image1} rounded fluid />
                    <br/><br/>
                    <Image src={props.image2} rounded fluid />
                  </Col>
                  <Col xs = {8}>
                    {props.desp}
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              {props.extraButton}
              <Button style = {{'backgroundColor': '#e86100', 'borderColor': '#e86100'}} href={props.link} target="_blank">View on GitHub</Button>
            </Modal.Footer>
        </Modal>
    </div>
  );
}