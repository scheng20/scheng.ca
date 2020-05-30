import React from 'react'
import Container from 'react-bootstrap/Container';
import Introduction from './Introduction';
import Experiences from './Experiences';
import Projects from './Projects'; 
import Skills from './Skills';
import Contact from './Contact';
import styled from 'styled-components';

export default function Home() {

	// Planned color scheme (for actual website):
	// Intro: dark
	// Experiences: light (or grey)
	// Projects: white (or grey)
	// Skills: light (or grey)
	// Contact: dark

	// Try things out and see what works / what doesn't!

	return(
		<div>
			<a name="introduction"></a>
			<Container fluid style = {{"background-color" : "#fafafa"}}>
				<Container>
					<br/><br/>
					<br/><br/>
					<br/><br/>
					<Introduction/>
					<a name="experience"></a>
					<br/><br/>
					<br/><br/>
				</Container>
			</Container>

			<Container fluid style = {{"background-color" : "white"}}>
				<Container>
					<br/><br/>
					<Experiences/>
					<a name="projects"></a>
					<br/><br/>
				</Container>
			</Container>

			<Container fluid style = {{"background-color" : "#fafafa"}}>
				<Container>
					<br/><br/>
					<Projects/>
					<a name="skills"></a>
					<br/><br/>
				</Container>
			</Container>

			<Container fluid style = {{"background-color" : "white"}}>
				<Container>
					<br/><br/>
					<Skills/>
					<a name="contact"></a>
					<br/><br/>
				</Container>
			</Container>

			<Container fluid style = {{"background-color" : "#fafafa"}}>
				<Container>
					<br/><br/>
					<Contact/>
					<br/><br/><br/>
				</Container>
			</Container>
		</div>
	);
}
