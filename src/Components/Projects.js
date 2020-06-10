import React from 'react'
import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import ProjectsItem from "./ProjectsItem.js";
import project1 from "../Assets/project1.gif";
import project2 from "../Assets/project2.gif";
import project3 from "../Assets/project3.gif";
import game1 from "../Assets/Game1.png";
import game2 from "../Assets/Game2.png";
import sharing1 from "../Assets/Sharing1.png";
import sharing2 from "../Assets/Sharing2.png";

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
					  <Card.Img variant="top" src={project1} />
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
					  <Card.Img variant="top" src={project2} />
					  <Card.Body>
					    <Card.Title>Just a 2D Game</Card.Title>
					    <Card.Subtitle className="mb-2 text-muted">Unity, C#</Card.Subtitle>
					    <Card.Text>
					      This game may seem like a simple platformer on first sight, but it has several hidden tricks and puzzles built in for the player to explore. This game is published on Itch.io.
					    </Card.Text>
					    <Button variant="outline-primary" onClick = {() => setModalShow2(true)} >Learn More</Button>
					  </Card.Body>
					</Card>
					<Card>
					  <Card.Img variant="top" src={project3} />
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
					heading = 	{
									<div>
										Sharing Schedule Generator
										<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-left' : '0.5rem'}}>
	                  						Java
	                					</Badge>
	                				</div>
                				}
					link = 'https://github.com/scheng20/sharing-schedule-generator'
					image1 = {sharing1}
					image2 = {sharing2}
					summary = "While working as a marketing director for UBC BizTech, one thing I noticed is that the creation of our event sharing schedules is a very tedious and repetitive task. 
							   Instead of continuing to create these schedules by hand, I decided to build a program that generates these schedules automatically, directly coding our marketing strategy 
							   and scheduling algorithm into the program. The first version of the program was completed in May of 2019."
					learnings = { 
								  	<ul>
								  		<li> Java </li>
								  		<li> Eclipse Window Builder for creating the GUI </li>
								  	</ul>
								}
					extrabutton = {
									<Button style = {{'backgroundColor': '#e86100', 'borderColor': '#e86100'}} href='https://www.dropbox.com/s/uq6aao92wstuu13/SharingScheduleGenerator.exe?dl=0' target="_blank" rel="noopener noreferrer">Try the Program</Button>
								}
				/>

				<ProjectsItem
					show = {modalShow2}
					onHide = {()=> setModalShow2(false)}
					heading = 	{
									<div>
										Just a 2D Game
										<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-left' : '0.5rem'}}>
	                  						Unity
	                					</Badge>
	                					<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-left' : '0.5rem'}}>
	                  						C#
	                					</Badge>
	                				</div>
                				}
					link = 'https://github.com/scheng20/just-a-2d-game'
					image1 = {game1}
					image2 = {game2}
					summary = "Over the summer of 2018, I built a small 2D puzzle platformer game using the Unity game engine. 
							   It was definitely a great learning experience about the Unity engine and the game development process in general. 
							   The game may seem like a simple platformer on first sight, but it has several hidden tricks and puzzles built in 
							   for the player to explore."
					learnings = { 
								  	<ul>
								  		<li> How to build a game using Unity 2D </li>
								  		<li> How to use particle effects in Unity </li>
								  		<li> C# Syntax</li>
								  		<li> Basic Level Design </li>
								  	</ul>
								}
					extrabutton = {
									<Button style = {{'backgroundColor': '#e86100', 'borderColor': '#e86100'}} href='https://yobolo.itch.io/just-a-2d-game' target="_blank" rel="noopener noreferrer">Play The Game</Button>
								}
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