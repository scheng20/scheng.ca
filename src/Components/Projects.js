import React from 'react'
import styled from 'styled-components';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ProjectsItem from "./ProjectsItem.js";
import project1 from "../Assets/project1.gif";
import project2 from "../Assets/project2.gif";
import project3 from "../Assets/project3.gif";
import project4 from "../Assets/project4.gif";
import project5 from "../Assets/project5.gif";
import project6 from "../Assets/project6.gif";
import project7 from "../Assets/project7.gif";
import project8 from "../Assets/project8.gif";
import game1 from "../Assets/Game1.png";
import game2 from "../Assets/Game2.png";
import sharing1 from "../Assets/Sharing1.png";
import sharing2 from "../Assets/Sharing2.png";
import manage1 from "../Assets/Management1.png";
import manage2 from "../Assets/Management2.png";
import assigner1 from "../Assets/Assigner1.png";
import assigner2 from "../Assets/Assigner2.png";
import it1 from "../Assets/IT1.png";
import it2 from "../Assets/IT2.png";
import afk1 from "../Assets/AFK1.png";
import afk2 from "../Assets/AFK2.png";
import issue1 from "../Assets/IssueViewer1.png";
import issue2 from "../Assets/IssueViewer2.png";
import health1 from "../Assets/MentalHealth1.png";
import health2 from "../Assets/MentalHealth2.png";

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

	.card-deck {
		margin-bottom: 1rem;
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

	.card-footer {
		background-color: white;
		border-top: none;
		padding-top: 0px;
		padding-bottom: 1rem;
	}

	.col-lg-4 {
		display: flex;
	}

	.col-md-6 {
		display: flex;
	}
`;

export default function Projects() {

	// TODO - Use a loop to make things cleaner and maybe move data to separate JSON file

	// Project Modals
	const [modalShow1, setModalShow1] = React.useState(false);
	const [modalShow2, setModalShow2] = React.useState(false);
	const [modalShow3, setModalShow3] = React.useState(false);
	const [modalShow4, setModalShow4] = React.useState(false);
	const [modalShow5, setModalShow5] = React.useState(false);
	const [modalShow6, setModalShow6] = React.useState(false);
	const [modalShow7, setModalShow7] = React.useState(false);
	const [modalShow8, setModalShow8] = React.useState(false);

	return (
		<div>
			<Styles>
				<h1> Projects </h1>
				<Row>
					<Col lg = {4} md = {6} xs = {12}>
						<Card>
						  <Card.Img variant="top" src={project1} />
						  <Card.Body>
						    <Card.Title>Sharing Schedule Generator</Card.Title>
						    <Card.Subtitle className="mb-2 text-muted">Java, WindowBuilder</Card.Subtitle>
						    <Card.Text>
						    	A program that automatically generates sharing schedules which are used to share club events to different Facebook groups. It is currently being used as a marketing tool for UBC BizTech, UBC's largest tech club.
						    </Card.Text>
						  </Card.Body>
						  <Card.Footer>
						  	<Button variant="outline-primary" onClick = {() => setModalShow1(true)}>Learn More</Button>
						  </Card.Footer>
						</Card>
					</Col>

					<Col lg = {4} md = {6} xs = {12}>
						<Card>
						  <Card.Img variant="top" src={project2} />
						  <Card.Body>
						    <Card.Title>AFK (Away From Keyboard)</Card.Title>
						    <Card.Subtitle className="mb-2 text-muted">JavaScript, HTML, CSS</Card.Subtitle>
						    <Card.Text>
						    	AFK is a chrome extension that allows users to navigate web pages through their voice. This project was in the top 35 out of 500+ project submissions for nwHacks2020, winning our team the “Wolfram Award”.
						    </Card.Text>
						  </Card.Body>
						  <Card.Footer>
						  	<Button variant="outline-primary" onClick = {() => setModalShow2(true)}>Learn More</Button>
						  </Card.Footer>
						</Card>
					</Col>

					<Col lg = {4} md = {6} xs = {12}>
						<Card>
						  <Card.Img variant="top" src={project3} />
						  <Card.Body>
						    <Card.Title>Online Management Platform</Card.Title>
						    <Card.Subtitle className="mb-2 text-muted">PHP, SQL</Card.Subtitle>
						    <Card.Text>
						    	A management web-app for a stock analysis service. Features include: adding and removing stock insights, publishing articles, managing user comments, and viewing user statistics.
						    </Card.Text>
						  </Card.Body>
						  <Card.Footer>
						  	<Button variant="outline-primary" onClick = {() => setModalShow3(true)}>Learn More</Button>
						  </Card.Footer>
						</Card>
					</Col>

					<Col lg = {4} md = {6} xs = {12}>
						<Card>
						  <Card.Img variant="top" src={project4} />
						  <Card.Body>
						    <Card.Title>Schedule Assigner</Card.Title>
						    <Card.Subtitle className="mb-2 text-muted">Java, JavaFX, JUnit</Card.Subtitle>
						    <Card.Text>
						    	Works as an add-on to my “Sharing Schedule Generator” project. Takes a list of names and a sharing schedule in the form of .txt files, then outputs an assigned schedule showing who should share in what group and when.
						    </Card.Text>
						  </Card.Body>
						  <Card.Footer>
						  	<Button variant="outline-primary" onClick = {() => setModalShow4(true)}>Learn More</Button>
						  </Card.Footer>
						</Card>
					</Col>

					<Col lg = {4} md = {6} xs = {12}>
						<Card>
						  <Card.Img variant="top" src={project5} />
						  <Card.Body>
						    <Card.Title>Just a 2D Game</Card.Title>
						    <Card.Subtitle className="mb-2 text-muted">Unity, C#</Card.Subtitle>
						    <Card.Text>
						    	This game may seem like a simple platformer on first sight, but it has several hidden tricks and puzzles built in for the player to explore. It’s the first Unity game I’ve created and it’s currently published on Itch.io.
						    </Card.Text>
						  </Card.Body>
						  <Card.Footer>
						  	<Button variant="outline-primary" onClick = {() => setModalShow5(true)}>Learn More</Button>
						  </Card.Footer>
						</Card>
					</Col>

					<Col lg = {4} md = {6} xs = {12}>
						<Card>
						  <Card.Img variant="top" src={project7} />
						  <Card.Body>
						    <Card.Title>GitHub Issues Viewer</Card.Title>
						    <Card.Subtitle className="mb-2 text-muted">React, Bootstrap</Card.Subtitle>
						    <Card.Text>
						    	A simple web app that utilizes the GitHub API to fetch and display a list of issues from any GitHub repository. Users can further filter the fetched issues by their status: “open”, “closed”, or “pull-request”.
						    </Card.Text>
						  </Card.Body>
						  <Card.Footer>
						  	<Button variant="outline-primary" onClick = {() => setModalShow7(true)}>Learn More</Button>
						  </Card.Footer>
						</Card>
					</Col>

			        <Col lg = {4} md = {6} xs = {12}>
		                <Card>
						  <Card.Img variant="top" src={project8} />
						  <Card.Body>
						    <Card.Title>Mental Health Webapp</Card.Title>
						    <Card.Subtitle className="mb-2 text-muted">PHP, SQL, CSS, HTML</Card.Subtitle>
						    <Card.Text>
						    	Designed for mental health help seekers and counsellors, our app acts as a one-stop-shop for one’s mental health resources, whether that be hotlines, resource centres, or even to search and book appointments.
						    </Card.Text>
						  </Card.Body>
						  <Card.Footer>
						  	<Button variant="outline-primary" onClick = {() => setModalShow8(true)}>Learn More</Button>
						  </Card.Footer>
						</Card>
			        </Col>

			        <Col lg = {4} md = {6} xs = {12}>
		                <Card>
						  <Card.Img variant="top" src={project6} />
						  <Card.Body>
						    <Card.Title>Designed Websites</Card.Title>
						    <Card.Subtitle className="mb-2 text-muted">WordPress, Elementor</Card.Subtitle>
						    <Card.Text>
						    	From 2016-2018 I ran a small web-design business: ITReliable. Working as the web designer, I created websites for clients using WordPress and managed them using cPanel and phpMyAdmin.
						    </Card.Text>
						  </Card.Body>
						  <Card.Footer>
						  	<Button variant="outline-primary" onClick = {() => setModalShow6(true)}>Learn More</Button>
					  	  </Card.Footer>
						</Card>
			        </Col>

			  	</Row>

				<ProjectsItem
					show = {modalShow1}
					onHide = {()=> setModalShow1(false)}
					title = "Sharing Schedule Generator"
					badges = 	{
									<div>
										<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-right' : '0.5rem'}}>
	                  						Java
	                					</Badge>
	                					<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-right' : '0.5rem'}}>
	                  						WindowBuilder
	                					</Badge>
	                				</div>
                				}
					link = 'https://github.com/scheng20/sharing-schedule-generator'
					image1 = {sharing1}
					image2 = {sharing2}
					summary = "While working as a marketing director for UBC BizTech, I noticed that the creation of our event sharing schedules is a very tedious and repetitive task. 
							   As a result, I decided to build a Java program that generates these schedules automatically, directly coding our marketing strategy and scheduling 
							   algorithm into the program. I single handily wrote this 1500+ line program using Java for the algorithms and WindowBuilder for the GUI."
					learnings = { 
								  	<ul>
								  		<li> How to code in Java </li>
								  		<li> Basic data structures and algorithms </li>
								  		<li> How to create a GUI using WindowBuilder </li>
								  		<li> Project planning </li>
								  	</ul>
								}
					extrabutton = {
									<Button style = {{'backgroundColor': '#e86100', 'borderColor': '#e86100'}} href='https://www.dropbox.com/s/uq6aao92wstuu13/SharingScheduleGenerator.exe?dl=0' target="_blank" rel="noopener noreferrer">Try the Program</Button>
								}
				/>

				<ProjectsItem
					show = {modalShow2}
					onHide = {()=> setModalShow2(false)}
					title = "AFK (Away From Keyboard)"
					badges = 	{
									<div>
										<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-right' : '0.5rem'}}>
	                  						JavaScript
	                					</Badge>
	                					<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-right' : '0.5rem'}}>
	                  						HTML
	                					</Badge>
	                					<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-right' : '0.5rem'}}>
	                  						CSS
	                					</Badge>
	                				</div>
                				}
					link = 'https://github.com/scheng20/afk-chrome-extension'
					image1 = {afk1}
					image2 = {afk2}
					summary = 'Working in a team of 5, I was responsible for implementing the auto-scroll feature, which enabled a webpage to scroll down when the user reads the last words on screen out loud. 
							   I implemented this feature using a text-scraping function written in JavaScript. Additionally, I also implemented a toggle button, allowing the user to turn voice recognition on/off inside the extension popup.  
							   Other commands of our extension include: "go down/up", "open/close tab", "go back/forward", and "reload/refresh".'
					learnings = { 
								  	<ul>
								  		<li> How to create a Chrome Extension</li>
								  		<li> Basic JavaScript</li>
								  		<li> Using JavaScript to trigger browser and web page actions</li>
								  		<li> Don't give up even if you have to switch ideas halfway into the 24-hour hackathon :')</li>
								  	</ul>
								}
					extrabutton = {
									<Button style = {{'backgroundColor': '#e86100', 'borderColor': '#e86100'}} href='https://devpost.com/software/afk-bec9g1' target="_blank" rel="noopener noreferrer">View on DevPost</Button>
								}
				/>

				<ProjectsItem
					show = {modalShow3}
					onHide = {()=> setModalShow3(false)}
					title = "Online Management Platform"
					badges = 	{
									<div>
										<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-right' : '0.5rem'}}>
	                  						PHP
	                					</Badge>
	                					<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-right' : '0.5rem'}}>
	                  						SQL
	                					</Badge>
	                				</div>
                				}
					link = 'https://github.com/scheng20/management-platform'
					image1 = {manage1}
					image2 = {manage2}
					summary = "In summer of 2019, I received the opportunity to collaborate on the creation of a management web-app for a Chinese stock analysis service 
							   with over 900 monthly users. I was responsible for writing 80% of all back-end code, where I used PHP and SQL queries to connect front-end 
							   inputs to back-end data changes in our MySQL database."
					learnings = { 
								  	<ul>
								  		<li> How to write complex SQL queries</li>
								  		<li> Basic PHP </li>
								  		<li> Basic MySQL operations</li>
								  	</ul>
								}
					extrabutton = {
									<Button style = {{'backgroundColor': '#e86100', 'borderColor': '#e86100'}} href='https://www.youtube.com/watch?v=mSV1RIWVRtQ' target="_blank" rel="noopener noreferrer">View Demo Video</Button>
								}
				/>

				<ProjectsItem
					show = {modalShow4}
					onHide = {()=> setModalShow4(false)}
					title = "Schedule Assigner"
					badges = 	{
									<div>
										<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-right' : '0.5rem'}}>
	                  						Java
	                					</Badge>
	                					<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-right' : '0.5rem'}}>
	                  						JavaFX
	                					</Badge>
	                					<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-right' : '0.5rem'}}>
	                  						JUnit
	                					</Badge>
	                				</div>
                				}
					link = 'https://github.com/scheng20/schedule-assigner'
					image1 = {assigner1}
					image2 = {assigner2}
					summary = "This was my final project for the CPSC 210: Software Construction Course I took at UBC. Although I have built software prior to the course, 
							   I learned how to truly design programs instead of just piecing code together after CPSC 210. This project was a learning experience on 
							   how to design, test, and write cohesive code to create truly robust programs. I used Java to write the algorithms, JavaFX to build the GUI, 
							   and tested my code using JUnit."
					learnings = { 
								  	<ul>
								  		<li> Object-oriented design principles (Single Responsibility Principle, Liskov Substitution Principle)</li>
								  		<li> Writing robust programs and throwing exceptions</li>
								  		<li> Testing my code using JUnit</li>
								  		<li> How to build a GUI using JavaFX</li>
								  	</ul>
								}
				/>

				<ProjectsItem
					show = {modalShow5}
					onHide = {()=> setModalShow5(false)}
					title = "Just a 2D Game"
					badges = 	{
									<div>
										<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-right' : '0.5rem'}}>
	                  						Unity
	                					</Badge>
	                					<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-right' : '0.5rem'}}>
	                  						C#
	                					</Badge>
	                				</div>
                				}
					link = 'https://github.com/scheng20/just-a-2d-game'
					image1 = {game1}
					image2 = {game2}
					summary = "Over the summer of 2018, I built a small 2D puzzle platformer game using the Unity game engine. I coded and designed all aspects of the 
							   game using C#, some basic pixel art, and lots of YouTube tutorials. It was definitely a great learning experience about the Unity engine 
							   and the game development process in general."
					learnings = { 
								  	<ul>
								  		<li> How to create moveable characters in Unity</li>
								  		<li> How to use a tiling system in Unity </li>
								  		<li> How to use particle effects in Unity </li>
								  		<li> Basic C# </li>
								  		<li> Basic level design </li>
								  	</ul>
								}
					extrabutton = {
									<Button style = {{'backgroundColor': '#e86100', 'borderColor': '#e86100'}} href='https://yobolo.itch.io/just-a-2d-game' target="_blank" rel="noopener noreferrer">Play The Game</Button>
								}
				/>

				<ProjectsItem
					show = {modalShow6}
					onHide = {()=> setModalShow6(false)}
					title = "Designed Websites"
					badges = 	{
									<div>
										<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-right' : '0.5rem'}}>
	                  						WordPress
	                					</Badge>
	                					<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-right' : '0.5rem'}}>
	                  						Elementor
	                					</Badge>
	                				</div>
                				}
                	link = 'https://www.itreliable.com/wp/'
					image1 = {it1}
					image2 = {it2}
					summary = "While working as a web designer for ITReliable, I was able to create websites for all kinds of clients including renovators, restaurants, and accountants. 
							   I also provided technical support and customer service for our clients, ensuring that they are satisfied with their website. Eventually I stopped using 
							   WordPress to create websites and taught myself JavaScript, HTML, CSS and React to create more dynamic websites like this site!"
					learnings = { 
								  	<ul>
								  		<li> Web design </li>
								  		<li> Webpage management </li>
								  		<li> Domain management </li>
								  		<li> IT troubleshooting </li>
								  	</ul>
								}
					customText = "View Websites"
				/>

				<ProjectsItem
					show = {modalShow7}
					onHide = {()=> setModalShow7(false)}
					title = "GitHub Issues Viewer"
					badges = 	{
									<div>
										<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-right' : '0.5rem'}}>
	                  						React
	                					</Badge>
	                					<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-right' : '0.5rem'}}>
	                  						Bootstrap
	                					</Badge>
	                				</div>
                				}
                	link = 'https://github.com/scheng20/github-issues-viewer'
					image1 = {issue1}
					image2 = {issue2}
					summary = "Originally the creation of this web-app was tasked to me as an interview assignment for a company 
							   I applied to. After completing the initial requirements, I decided to take this project further 
							   and put my own spin on things and add some additional design / features that were not required 
							   in the original outline. With permission from the company, I’m able to showcase this new re-vamped 
							   version of the web-app."

					learnings = { 
								  	<ul>
								  		<li> How to create a dynamic web-app using React and Bootstrap </li>
								  		<li> How to utilize the GitHub API in an application </li>
								  		<li> Using CSS to build a responsive design </li>
								  		<li> Better organization of CSS stylesheets, and how to overwrite default styles </li>
								  	</ul>
								}
					extrabutton = {
									<Button style = {{'backgroundColor': '#e86100', 'borderColor': '#e86100'}} href='https://scheng20.github.io/github-issues-viewer/' target="_blank" rel="noopener noreferrer">Try It Out</Button>
								}
				/>

				<ProjectsItem
					show = {modalShow8}
					onHide = {()=> setModalShow8(false)}
					title = "Mental Health Webapp"
					badges = 	{
									<div>
										<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-right' : '0.5rem'}}>
	                  						PHP
	                					</Badge>
	                					<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-right' : '0.5rem'}}>
	                  						SQL
	                					</Badge>
	                					<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-right' : '0.5rem'}}>
	                  						CSS
	                					</Badge>
	                					<Badge pill style = {{'backgroundColor': '#e86100', 'color' : 'white', 'fontSize' : '0.9rem', 'margin-right' : '0.5rem'}}>
	                  						HTML
	                					</Badge>
	                				</div>
                				}
                	link = 'https://github.com/scheng20/mental-health-app'
					image1 = {health1}
					image2 = {health2}
					summary = "Working in a team of 3, we built a mental health networking and help web-app dedicated to those seeking and offering 
							   help. Within the project, I built 11 out of our total 17 webpages, each page is a PHP file that 
							   acts as both the front-end and sends SQL queries to the backend. I also worked with my teammates to design the database 
							   by creating an ER diagram, project schemas and listing any functional dependencies. "

					learnings = { 
								  	<ul>
								  		<li> Full-stack web development with PHP, HTML, CSS and MySQL</li>
								  		<li> Database design </li>
								  		<li> Creating ER diagrams </li>
								  		<li> Writing database schemas and functional dependencies </li>
								  	</ul>
								}
				/>

			</Styles>
		</div>
	);
}