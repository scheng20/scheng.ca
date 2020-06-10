import React from 'react'
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
  		transform: scale(1.2); /* (110% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
	}

	.col {
		margin-top: 2rem;
    	margin-bottom: 2rem;
	}

	.card {
		margin-bottom: 0.5rem;
	}
`;


export default function ExperiencesItem(props) {

	return (
		<div>
    	<Styles>
    		<br/>
    		<Card>
  				<Card.Body>
  					<Container>
		                <Row>
		                  <Col className="align-self-center text-center"> 
		                 	<div className="zoom">
		                 		<a href = {props.url} target="_blank" rel="noopener noreferrer">
			                    <Image 
			                    	src={props.image}
			                    	width = {110}
			                    	height = {110}
			                    	rounded />
			                    </a>
		                    </div>
		                  </Col>
		                  <Col className = "align-self-center" xs = {10}>
		                  	<h5>{props.heading}</h5>
		                  	<h5 style = {{"color" : "#6c6c6d"}}>{props.company}</h5>
		                    <p>{props.desp}</p>
		                  </Col>
		                </Row>
	              	</Container>
  				</Card.Body>
			</Card>
    	</Styles>
    	</div>
    );
}