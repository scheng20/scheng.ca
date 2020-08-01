import React from 'react'
import styled from 'styled-components';
import Emoji from './Emoji.js'
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

const Styles = styled.div`
	h1 {
		margin-bottom: 2rem;
		color: #e86100;
		font-size: 2.2rem;
	}

	.card {
		margin-bottom: 2rem;
	}
`;

export default function Skills() {

	return (
		<div>
			<Styles>
			<h1> Skills </h1>
			<CardColumns>
				<Card>
				  <Card.Header as= "h6"><Emoji symbol="🌟"/> I can confidently build something with:</Card.Header>
				  <Card.Body>
			      	<b>Languages:</b>
				      	<ul>
						  	<li>Java</li>
						  	<li>SQL</li>
						</ul>
					<b>Tools & Frameworks:</b>
						<ul>
							<li>Git</li>
						  	<li>WordPress</li>
						  	<li>Figma</li>
						</ul>
				  </Card.Body>
				</Card>
				<Card>
				  <Card.Header as= "h6"><Emoji symbol="🔍"/> With some reference to documentation, I can use: </Card.Header>
				  <Card.Body>
			      	<b>Languages:</b>
			      		<ul>
			      			<li>C++</li>
			      			<li>JavaScript</li>
					  		<li>HTML</li>
					  		<li>CSS</li>
						</ul>
					<b>Tools & Frameworks:</b>
						<ul>
					  		<li>React</li>
					  		<li>Bootstrap</li>
					  		<li>MySQL</li>
					  		<li>MongoDB</li>
					  		<li>Unity</li>
						</ul>
				  </Card.Body>
				</Card>
				<Card>
				  <Card.Header as= "h6"><Emoji symbol="🧠"/> I am still learning:</Card.Header>
				  <Card.Body>
			      	<b>Languages:</b>
			      		<ul>
			      			<li>C</li>
					  		<li>C#</li>
			      			<li>PHP</li>
			      			<li>Python</li>
					  		<li>Ruby</li>
						</ul>
					<b>Tools & Frameworks:</b>
						<ul>
					  		<li>Ruby on Rails</li>
					  		<li>Vue.js</li>
					  		<li>Firebase</li>
						</ul>
				  </Card.Body>
				</Card>
			</CardColumns>
			</Styles>
		</div>
	);
}