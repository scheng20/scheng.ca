import React from 'react'
import styled from 'styled-components';
import ProjectContents from '../Assets/Projects.json'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Styles = styled.div`

	.btn-outline-primary {
		border-color: #e86100;
		color: #e86100;
	}

	.btn-outline-primary:hover, .btn-outline-primary-focus {
		box-shadow: none !important;
		border-color: #e86100 !important;
		background-color: #e86100 !important;
		color: white !important;
	}

	.card-subtitle {
		color: #e86100 !important;
	}

	.card {
		margin-bottom: 2rem;
	}

	.card-footer {
		background-color: white;
		border-top: none;
		padding-top: 0px;
		padding-bottom: 1rem;
	}

	.col-lg-4 {
		display: flex;
	}

	.col-md-6 {
		display: flex;
	}

	.container {
		margin-top: 300px;
	}
`;

export default function AllProjects() {

	const [modalShow, setModalShow] = React.useState(false);

	return (
		<Styles>
		<Container>
        	<Row>
                {ProjectContents.map(project => 
                    <Col lg = {4} md = {6} xs = {12}>
                        <Card>
                        	<Card.Img variant="top" src={require('../Assets/'+ project.demo_gif)} />
							<Card.Body>
								<Card.Title>{project.title}</Card.Title>
								<Card.Subtitle className="mb-2 text-muted">{project.tech + " "}</Card.Subtitle>
								<Card.Text>{project.card_summary}</Card.Text>
							</Card.Body>
							<Card.Footer>
						  		<Button variant="outline-primary" onClick = {() => setModalShow(true)}>Learn More</Button>
							</Card.Footer>
						</Card>
                    </Col>
                )}
            </Row>
        </Container>
    	</Styles>
    );

}
