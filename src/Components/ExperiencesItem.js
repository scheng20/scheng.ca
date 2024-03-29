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

	img {
    	transition: transform .2s;

	    &:hover {
	      transform: scale(1.25);
	    }
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
	                 		<a href = {props.url} target="_blank" rel="noopener noreferrer">
		                    <Image 
		                    	src={require('../Assets/Images/' + props.image)}
		                    	width = {110}
		                    	height = {110}
		                    	rounded />
		                    </a>
		                  </Col>
		                  <Col className = "align-self-center" xl = {10}>
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