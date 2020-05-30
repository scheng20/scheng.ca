import React from 'react';
import {Jumbotron as Jumbo} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import mountainImage from "../Assets/mountains.jpg";

const Styles = styled.div`
	.jumbotron {
		background: url(${mountainImage}) no-repeat fixed bottom;
		color: #efefef;
		height: 300px;
		position: relative;
		z-index: -2;
	}	

	.overlay {
		background-color: #000;
		opacity: 0.2;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
	}

	.container {
		margin-top: 50px;
	}
`;

export const Jumbotron = () => (
	<Styles>
		<Jumbo fluid className = "jumbo">
			<div className = "overlay"></div>
			<Container>
				<h1>Welcome</h1>
				<p> Learn to code from my Youtube Videos</p>
			</Container>
		</Jumbo>
	</Styles>
)