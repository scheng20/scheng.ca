import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

const Styles = styled.div `
	.navbar {
		background-color: #e86100;
		padding-left: 12%;
		padding-right: 12%;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.navbar-nav .nav-link {

		color: white;
		font-size: 1.1rem;

		&:hover {
			color: white;
		}

		&.active {
			color: white !important;
			text-decoration: underline white;
		}
	}

	.navbar-brand {
		color: white;
		font-size: 1.5rem;
	}
`;


export default function Header() {
	return(
		<div>
			<Styles>
				<Navbar variant="dark" expand="lg" fixed = "top">
					<Navbar.Brand href = "/">Sheena Cheng</Navbar.Brand>
					<Navbar.Toggle aria-controls = "basic-navbar-nav" />
					<Navbar.Collapse id = "basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Item>
								<Nav.Link href="#introduction">About</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="#experience">Experiences</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="#projects">Projects</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="#skills">Skills</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="#contact">Contact</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Styles>
		</div>
	);
}