import React from 'react'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProjectModal from "./ProjectModal.js";

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
`;

export default function ProjectCard(props) {

	const [modalShow, setModalShow] = React.useState(false);

	return (
		<Styles style = {{'display': 'flex'}}>

            <Card>
            	<Card.Img variant="top" src={require('../Assets/Images/'+ props.demo_gif)} />
				<Card.Body>
					<Card.Title>{props.title}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{props.tech.join(", ")}</Card.Subtitle>
					<Card.Text>{props.card_summary}</Card.Text>
				</Card.Body>
				<Card.Footer>
			  		<Button variant="outline-primary" onClick = {() => setModalShow(true)}>Learn More</Button>
				</Card.Footer>
			</Card>

			<ProjectModal
				show = {modalShow}
				onHide = {()=> setModalShow(false)}
				title = {props.title}
				badges = {props.tech}
				link = {props.github_link}
				image1 = {props.img1}
				image2 = {props.img2}
				summary = {props.modal_summary}
				learnings = {props.learnings}
				extra_link = {props.extra_link}
				extra_link_text = {props.extra_link_text}
				custom_text = {props.custom_text}
			/>

    	</Styles>
    );

}
