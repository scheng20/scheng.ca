import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Emoji from './Emoji.js'

const Styles = styled.div `

	.container-fluid {
		display: inline-block;
		background-color: #262626;
		color: white;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
`;

export default function Footer() {

	return (
		<Styles>
			<Container fluid className = "text-center">
				Made with <Emoji symbol="😎🍍"/>, React, and React Bootstrap • © Sheena Cheng {new Date().getFullYear()}
			</Container>
		</Styles>
	);
}