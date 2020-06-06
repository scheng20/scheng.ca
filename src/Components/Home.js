import React from 'react'
import Container from 'react-bootstrap/Container';
import Introduction from './Introduction';
import Experiences from './Experiences';
import Projects from './Projects'; 
import Skills from './Skills';
import Contact from './Contact';
import styled from 'styled-components';

const Styles = styled.div`

	.container-fluid {
    	padding-left: 12%;
    	padding-right: 12%;
    	padding-top: 3rem;
    	padding-bottom: 3rem;
	} 
`;

export default function Home() {

	return(
		<Styles>
		<div>
			<a name = "introduction"></a>
			<Container fluid style = {{"backgroundColor" : "#fafafa", "paddingTop" : "7.5rem"}}>
			
					<Introduction/>
					<a href="#experience" name="experience"></a>

			</Container>

			<Container fluid style = {{"backgroundColor" : "white"}}>

					<Experiences/>
					<a name="projects"></a>

			</Container>

			<Container fluid style = {{"backgroundColor" : "#fafafa"}}>

					<Projects/>
					<a name="skills"></a>

			</Container>

			<Container fluid style = {{"backgroundColor" : "white"}}>

					<Skills/>
					<a name="contact"></a>

			</Container>

			<Container fluid style = {{"backgroundColor" : "#fafafa", "paddingBottom" : "4rem"}}>

					<Contact/>

			</Container>
		</div>
		</Styles>
	);
}
