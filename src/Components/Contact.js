import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {FaGithub, FaLinkedinIn, FaFileAlt} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import Emoji from './Emoji.js';

const Styles = styled.div`
	h1 {
		margin-bottom: 2rem;
		color: #e86100;
		font-size: 2.2rem;
	}

	.btn, .btn-focus {
		height: 3.5rem;
		width: 3.5rem;

		margin-left: 0.5rem;
		margin-right: 0.5rem;

		background-color: #e86100;
		border-color: #e86100;
		color: white;
		transition: all .2s;
		display: flex;
    	justify-content: center;
    	align-items: center;
		
	}

	.btn-email {

		&:hover {
			background-color: #ea4335 !important; 
			border-color: #ea4335 !important;
			transform: scale(1.3);
		}
	}

	.btn-github {

		&:hover {
			background-color: black !important;
			border-color: black !important;
			transform: scale(1.3);
		}
	}

	.btn-linkedin {

		&:hover {
			background-color: #0274b3 !important;
			border-color: #0274b3 !important;
			transform: scale(1.3);
		}
	}

	.btn-resume {

		&:hover {
			background-color: #358135 !important;
			border-color: #358135 !important;
			transform: scale(1.3);
		}
	}

	p {
		font-size: 1.2rem;
		margin-bottom: 2rem;
	}

	@media only screen and (max-width: 600px) {
		.custom {
			text-align: center;
		}
	}

`;

export default function Contact() {
	return (
		<div>
			<Styles>			
				<h1 className = "custom">Contact Me</h1>
				<Container className="text-center">
					<p> Want to get in touch? Reach out to me on any of these platforms: <Emoji symbol="📲"/></p>
					<Row className="justify-content-center">
						<Button className="btn-email" href="mailto:chengsheena25@gmail.com">
							<MdEmail size = {25}/>
						</Button>

						<Button className="btn-linkedin" href="https://www.linkedin.com/in/sheena-cheng/" target="_blank" rel="noopener noreferrer">
							<FaLinkedinIn size = {25}/>
						</Button>

						<Button className="btn-github" href="https://github.com/scheng20" target="_blank" rel="noopener noreferrer">
							<FaGithub size = {25}/>
						</Button>
						
						{/* <Button className="btn-resume" href="" target="_blank" rel="noopener noreferrer">
							<FaFileAlt size = {25}/>
						</Button> */}
					</Row>
				</Container>
			</Styles>
		</div>

	);
}