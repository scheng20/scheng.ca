import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaGithub, FaLinkedinIn, FaFileAlt} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

const Styles = styled.div`
	h1 {
		margin-bottom: 2rem;
		color: #e86100;
		font-size: 2.2rem;
	}

	.btn {
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
			background-color: #ea4335;
			border-color: #ea4335;
			transform: scale(1.3);
		}
	}

	.btn-github {

		&:hover {
			background-color: black;
			border-color: black;
			transform: scale(1.3);
		}
	}

	.btn-linkedin {

		&:hover {
			background-color: #0274b3;
			border-color: #0274b3;
			transform: scale(1.3);
		}
	}

	.btn-resume {

		&:hover {
			background-color: #358135;
			border-color: #358135;
			transform: scale(1.3);
		}
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
				<Container>
					<Row className="justify-content-center">
						<Button className="btn-email" href="mailto:chengsheena25@gmail.com">
							<MdEmail size = {25}/>
						</Button>

						<Button className="btn-linkedin" href="https://www.linkedin.com/in/sheena-cheng/" target="_blank">
							<FaLinkedinIn size = {25}/>
						</Button>

						<Button className="btn-github" href="https://github.com/scheng20" target="_blank">
							<FaGithub size = {25}/>
						</Button>
						
						<Button className="btn-resume" href="" target="_blank">
							<FaFileAlt size = {25}/>
						</Button>
					</Row>
				</Container>
			</Styles>
		</div>

	);
}