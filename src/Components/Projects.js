import React from 'react'
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import demo1 from "../Assets/demo1.gif";
import demo2 from "../Assets/demo2.gif";
import demo3 from "../Assets/demo3.gif";
import ProjectsItem from "./ProjectsItem.js";
import Badge from 'react-bootstrap/Badge';
import game1 from "../Assets/Game1.png";
import game2 from "../Assets/Game2.png";

const Styles = styled.div`
	.btn-outline-primary {
		border-color: #e86100;
		color: #e86100;
	}

	.btn-outline-primary:hover, .btn-outline-primary-focus {
		box-shadow: none !important;
		border-color: #e86100 !important;
		background-color: #e86100 !important;
		color: white !important;
	}

	.card-subtitle {
		color: #e86100 !important;
	}

	h1 {
		margin-bottom: 2rem;
		color: #e86100;
		font-size: 2.2rem;
	}

	.card {
		margin-bottom: 2rem;
	}
`;

export default function Projects() {

	// Project 1-6 modals
	const [modalShow1, setModalShow1] = React.useState(false);
	const [modalShow2, setModalShow2] = React.useState(false);

	return (
		<div>
			<Styles>
				<h1> Projects </h1>
				<CardDeck>
					<Card>
					  <Card.Img variant="top" src={demo1} />
					  <Card.Body>
					    <Card.Title>Sharing Schedule Generator</Card.Title>
					    <Card.Subtitle className="mb-2 text-muted">Java</Card.Subtitle>
					    
					    <Card.Text>
					      A program that automatically generates sharing schedules based on event date and sharing groups. Currently being used as a marketing tool for UBC BizTech.
					    </Card.Text>
					    <Button variant="outline-primary" onClick = {() => setModalShow1(true)}>Learn More</Button>
					  </Card.Body>
					</Card>
					<Card>
					  <Card.Img variant="top" src={demo2} />
					  <Card.Body>
					    <Card.Title>Just a 2D Game</Card.Title>
					    <Card.Subtitle className="mb-2 text-muted">Unity, C#</Card.Subtitle>
					    <Card.Text>
					      This game may seem like a simple platformer on first sight, but it has several hidden tricks and puzzles built in for the player to explore.
					    </Card.Text>
					    <Button variant="outline-primary" onClick = {() => setModalShow2(true)} >Learn More</Button>
					  </Card.Body>
					</Card>
					<Card>
					  <Card.Img variant="top" src={demo3} />
					  <Card.Body>
					    <Card.Title>Online Management Platform</Card.Title>
					    <Card.Subtitle className="mb-2 text-muted">PHP, SQL</Card.Subtitle>
					    <Card.Text>
					      A management platform for a wechat app. Features include: adding and removing insights, publishing articles, managing user comments, and viewing user statistics.
					    </Card.Text>
					    <Button variant="outline-primary">Learn More</Button>
					  </Card.Body>
					</Card>
				</CardDeck>

				<ProjectsItem
					show = {modalShow1}
					onHide = {()=> setModalShow1(false)}
					heading = "Sharing Schedule Generator"

				/>

				<ProjectsItem
					show = {modalShow2}
					onHide = {()=> setModalShow2(false)}
					link = 'https://github.com/scheng20/just-a-2d-game'
					image1 = {game1}
					image2 = {game2}
					desp = {<div> <strong>Summary:</strong>
								  <br/>
								  <p>Over the summer of 2018, I built a small 2D puzzle platformer game using the Unity game engine. The same may seem like a simple platformer on first sight, 
								     but it has several hidden tricks and puzzles built in for the player to explore.</p>
								  <br/>
								  <strong>What I learned: </strong>
								  <p>This was the first game I've built using the Unity game engine, so I definitely learned a lot on how to use Unity and code in C# in general.
								  	 I also learned about some basic game design concepts such as level design, camera movement, and pixel art.</p></div>}
					extraButton = {<Button style = {{'backgroundColor': '#e86100', 'borderColor': '#e86100'}} href='https://www.google.com' target="_blank">Play The Game</Button>}
					heading = {<div>
									Just a 2D Game
									<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-left' : '0.5rem'}}>
                  						Unity
                					</Badge>
                					<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-left' : '0.5rem'}}>
                  						C#
                					</Badge>
                				</div>}
				/>

			</Styles>
		</div>
	);
}

// OLD TUTORIAL STYLE
/*
export const Projects = () => (

	<div>
		<Styles>
			<h1 style = {{'margin-bottom': '2rem', 'color': '#e86100'}}> My Projects </h1>

			<CardDeck>
				<Card style={{ width: '20rem' }}>
				  <Card.Img variant="top" src={demo1} />
				  <Card.Body>
				    <Card.Title>Sharing Schedule Generator</Card.Title>
				    <Card.Subtitle className="mb-2 text-muted">Java</Card.Subtitle>
				    <Card.Text>
				      A program that automatically generates sharing schedules based on event date and sharing groups. Currently being used as a marketing tool for UBC BizTech.
				    </Card.Text>
				    <Button variant="outline-primary">Learn More</Button>
				  </Card.Body>
				</Card>
				<Card style={{ width: '20rem' }}>
				  <Card.Img variant="top" src={demo2} />
				  <Card.Body>
				    <Card.Title>Just a 2D Game</Card.Title>
				    <Card.Subtitle className="mb-2 text-muted">Unity, C#</Card.Subtitle>
				    <Card.Text>
				      This game may seem like a simple platformer on first sight, but it has several hidden tricks and puzzles built in for the player to explore.
				    </Card.Text>
				    <Button variant="outline-primary">Learn More</Button>
				  </Card.Body>
				</Card>
				<Card style={{ width: '20rem' }}>
				  <Card.Img variant="top" src={demo3} />
				  <Card.Body>
				    <Card.Title>Sharing Schedule Generator</Card.Title>
				    <Card.Subtitle className="mb-2 text-muted">PHP, SQL</Card.Subtitle>
				    <Card.Text>
				      A management platform for a wechat app. Features include: adding and removing insights, publishing articles, managing user comments, and viewing user statistics.
				    </Card.Text>
				    <Button variant="outline-primary">Learn More</Button>
				  </Card.Body>
				</Card>
			</CardDeck>
		</Styles>
	</div>
) */