import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Styles = styled.div`
	h1 {
		margin-bottom: 2rem;
		color: #e86100;
		font-size: 2.2rem;
	}

	.btn-primary {
		border-color: #e86100;
		background-color: #e86100;
		color: white;
	}
`;

// This section needs JS to be completed
// Note to self: hmm it seems that in order to have this form, it will need a separate back end...
// I'm not so sure on whether or not I want to build a backend for this because it'll be hosted on github pages... 

// I think what I'll do is just turn this section into a "find me on..." area. Too much work to actually build backend lol

export default function Contact() {
	return (
		<div>
			<Styles>			
			<h1> Contact Me </h1>
			<Form>
				<Form.Row>
					<Form.Group as={Col} controlId="formName">
				    	<Form.Label>Name</Form.Label>
				    	<Form.Control type="text" placeholder="Cool Name"/>
				  	</Form.Group>

				  	<Form.Group as={Col} controlId="formEmail">
				    	<Form.Label>Email Address</Form.Label>
				    	<Form.Control type="email" placeholder="coolemail@example.com" />
				  	</Form.Group>
			  	</Form.Row>

			  	<Form.Group controlId="formSubject">
				    <Form.Label>Subject</Form.Label>
				    <Form.Control type="text" placeholder="Cool Topic"/>
				</Form.Group>

				<Form.Group controlId="formMessage">
				    <Form.Label>Message</Form.Label>
				    <Form.Control as="textarea" rows = "5" placeholder="Cool Message"/>
				</Form.Group>

			  	<Button className="float-right" variant="primary" type="submit">
			    	Submit
			  	</Button>

			</Form>
			</Styles>
		</div>

	);
}