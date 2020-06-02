import React from 'react';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Emoji from './Emoji.js'

const Styles = styled.div `
	.navbar {
		background-color: #262626;
	}

	.navbar-text {
	  	width: 100%;
	 	color: white;
	}
`;

export default function Footer() {

	return (
		<Styles>
		<Navbar expand="lg">
			<Navbar.Collapse id = "basic-navbar-nav" className = "text-center">
				<Navbar.Text>
				 Made with <Emoji symbol="😎🍍"/>, React, and React Bootstrap • © Sheena Cheng {new Date().getFullYear()}
				</Navbar.Text>
			</Navbar.Collapse>
		</Navbar>
		</Styles>
	);
}