import React from 'react'
import styled from 'styled-components';
import ProjectContents from '../Assets/Projects.json'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ProjectCard from "./ProjectCard.js";

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
		display: flex !important;
	}

	.col-md-6 {
		display: flex !important;
	}

	.container {
		margin-top: 300px;
	}
`;

export default function AllProjects() {

	return (
		<Styles>
		<Container>
        	<Row>
                {ProjectContents.map(project => 
                    <Col lg = {4} md = {6} xs = {12}>
                        <ProjectCard
                        	title = {project.title}
                        	tech = {project.tech}
                        	card_summary = {project.card_summary}
                        	modal_summary = {project.modal_summary}
                        	learnings = {project.learnings}
                        	demo_gif = {project.demo_gif}
                        	img1 = {project.img1}
                        	img2 = {project.img2}
                        	github_link = {project.github_link}
                        	extra_link = {project.extra_link}
                        	extra_link_text = {project.extra_link_text}
                        	custom_text = {project.custom_text}
                        />
                    </Col>
                )}
            </Row>
        </Container>
    	</Styles>
    );

}
