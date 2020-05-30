import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';

const Styles = styled.div`
	h5 {
		font-size: 1.1rem;
	}

	.zoom {
	  transition: transform .2s; /* Animation */
	}

	.zoom:hover {
  		transform: scale(1.2); /* (120% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
	}

`;


export default function ExperienceItem(props) {

	return (
    	<div>
    		<Styles>
    		<br/>
    		<Card>
  				<Card.Body>
  					<Container>
	                <Row>
	                  <Col className="align-self-center text-center"> 
	                 	<div class="zoom">
	                 		<a href = {props.url} target="_blank">
		                    <Image 
		                    	src={props.image}
		                    	width = {110}
		                    	height = {110}
		                    	rounded />
		                    </a>
	                    </div>
	                  </Col>
	                  <Col xs = {10}>
	                  	<h5>{props.heading}</h5>
	                  	<h5 className="mb-2 text-muted">{props.company}</h5>
	                    {props.desp}
	                  </Col>
	                </Row>
	              	</Container>
  				</Card.Body>
			</Card>
			</Styles>
    	</div>
    );
}