import React from 'react'
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from "./ProjectCard.js";
import ProjectContents from '../Assets/Content/Projects.json'

const Styles = styled.div`

	h1 {
		margin-bottom: 2rem;
		color: #e86100;
		font-size: 2.2rem;
	}

	.col-lg-4 {
		display: flex;
	}

	.col-md-6 {
		display: flex;
	}

`;

export default function Projects() {

	return (
		<div>
			<Styles>
				<h1> Projects </h1>
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
			</Styles>
		</div>
	);
	
}