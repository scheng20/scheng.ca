import React from 'react'
import styled from 'styled-components';
import HorizontalTimeline from './Timeline/Components/HorizontalTimeline';
import SwipeableViews from 'react-swipeable-views';
import ExperiencesItem from "./ExperiencesItem.js";
import MathPickle from "../Assets/MathPickle.png";
import SHAD from "../Assets/SHAD.png";
import Fuego from "../Assets/Fuego.jpg";
import Technovation from "../Assets/Technovation.png";
import ITReliable from "../Assets/ITReliable.png";
import SWCLaunchX from "../Assets/SWCLaunchX.png";
import TTCAN from "../Assets/TTCAN.png";
import ProToGo from "../Assets/ProToGo.png";
import UBCTTC from "../Assets/UBCTTC.jpg";
import SAP from "../Assets/SAP.jpg";
import BizTech from "../Assets/BizTech.png";

const Styles = styled.div`
	h1 {
		margin-bottom: 2rem;
		color: #e86100;
		font-size: 2.2rem;
	}
`;

const VALUES = ['2016/01/01','2017/01/01','2018/01/01','2019/01/01', '2020/01/01'];

export default class Experiences extends React.Component {

	state = { value: 4, previous: 3 };

	render() {
		return (
			<div>
			<Styles>
				<h1> Experiences </h1>
				<div style={{ width: '100%', height: '5rem', margin: '20 auto' }}>
		          	<HorizontalTimeline
			            index={this.state.value}
			            indexClick={(index) => {
			              this.setState({ value: index, previous: this.state.value });
			            }}
			            values={ VALUES } 
			            styles = {{ background: '#f8f8f8', foreground: '#e86100', outline: '#dfdfdf' }}
			            maxEventPadding = {100}
			            minEventPadding = {100}
			            labelWidth = {100}
		            />
	        	</div>
	        	<div>
		        	<SwipeableViews
			            index={this.state.value}
			            onChangeIndex={(value, previous) => {
			              this.setState({ value: value, previous: previous });
			            }}
			            resistance
			            enableMouseEvents>
		            <div>
				     	<ExperiencesItem
				     		heading = "Summer Intern"
				     		company = "MathPickle"
				     		url = 'https://mathpickle.com/'
				     		image = {MathPickle}
				     		desp = "During the summer of 2016, I was hired as a summer intern at MathPickle. During my 
				     				internship, I renovated the MathPickle website and added several new features 
				     				including a new landing page, mailing list integration (through MailChimp) and SEO 
				     				management. Furthermore, I worked with other interns to create marketing videos, 
				     				build a press kit, and manage social media accounts. MathPickle is a Calgary based 
				     				startup that provides free online resources of original mathematical puzzles, games 
				     				and unsolved problems for K-12 teachers. It is supported by the American Institute 
				     				of Mathematics."
				     	/>
				     	<ExperiencesItem
				     		heading = "SHAD Fellow"
				     		company = "SHAD"
				     		image = {SHAD}
				     		url = 'https://www.shad.ca/'
				     		desp = "In 2016, I attended the University of Western Ontario as a delegate for SHAD, one of
				     				Canada’s most prestigious summer programs for high school students, with a focus on 
				     				STEM (science, technology, engineering, mathematics) and entrepreneurship. The SHAD 
				     				Alumni Network includes more than 15,500 of the best and brightest from all across 
				     				Canada, including 30 Rhodes Scholars, 78 Loran Scholars, Top 40 under 40 & Top 20 
				     				under 20 recipients, and more."
				     	/>
				    </div>
				    <div>
				    	<ExperiencesItem
				     		heading = "President"
				     		company = "Fuego, A Junior Achievement Company"
				     		url = 'https://fuegojasa.wixsite.com/fuegomugs'
				     		image = {Fuego}
				     		desp = "As the president of Fuego, I oversaw all company sectors including: finance, 
				     				marketing, HR. operations, and IT. Furthermore, I chaired meetings and helped 
				     				direct overall company vision and strategy. Junior Achievement is an organization 
				     				that helps high school students build their own businesses. Fuego (a Junior 
				     				Achievement Company) sold color changing mugs, which were all hand painted by our 
				     				company members."
				     	/>
				     	<ExperiencesItem
				     		heading = "Participant"
				     		company = "Technovation Challenge"
				     		url = 'https://technovationchallenge.org/'
				     		image = {Technovation}
				     		desp = "As a participant of the Technovation Challenge 2017, I worked with my team and 
				     				industry mentors to develop an app (DecidED) and startup (THinc) that matches 
				     				high school students to post-secondary institutions and scholarships based on their 
				     				interests, academics, and other profile information. During this 12 week challenge, 
				     				we coded our mobile application (using Thunckable and MIT App Inventor), conducted 
				     				online market research, and wrote a full business plan for our venture. "
				     	/>
				    </div>
				    <div>
				    	<ExperiencesItem
				     		heading = "Cofounder and Web Designer"
				     		company = "ITReliable.com"
				     		image = {ITReliable}
				     		url = 'https://www.itreliable.com/wp/'
				     		desp = "Starting in 2016, I co-founded and became the main web designer of ITReliable.com, 
				     				a Calgary based IT services business. I designed, built and managed websites using 
				     				WordPress, phpMyAdmin, and cPanel. I have created websites for all kinds of clients 
				     				including renovators, restaurants, and accountants. In addition, I provided 
				     				technical support and customer service for our clients."
				     	/>
				     	<ExperiencesItem
				     		heading = "Cofounder and President "
				     		company = "Sir Winston Churchill LaunchX Club"
				     		image = {SWCLaunchX}
				     		url = 'https://launchx.com/'
				     		desp = "I worked with a team to bring the LaunchX program to my high school (Sir Winston 
				     		Churchill Highschool). As the president of the club, I organized club meetings, taught 
				     		LaunchX lessons to members, and provided guidance for student companies in their startup 
				     		journey. The LaunchX program aims to empower high school students to build a viable startup 
				     		by offering lessons, materials and guidance for student companies. "
				     	/>
				     	{/*
				     	<ExperiencesItem
				     		heading = "Athlete"
				     		company = "Canada Table Tennis"
				     		image = {TTCAN}
				     		url = 'http://ttcan.ca/'
				     		desp = "I have played table tennis since the age of 9, and competed at both the provincial 
				     				and national level for over 8 years. In addition, I have represented Alberta at 
				     				national competitions since 2013 and was a part of the National Cadet and Junior 
				     				Girls Canadian Team from 2015 to 2016."
				     	/>*/}
				    </div>
				    <div>
					    <ExperiencesItem
				     		heading = "Web Developer"
				     		company = "UBC Table Tennis Club"
				     		image = {UBCTTC}
				     		url = 'http://www.ubctabletennisclub.org/'
				     		desp = "Working with a team of web developers, we are building the UBC Table Tennis Club 
				     				website using Ruby on Rails, HTML, CSS, JavaScript, Heroku and PostgreSQL. 
				     				I am responsible for building the front-end using HTML, CSS and Javascript. 
				     				In addition, I occasionally assist with the back-end configuration of our 
				     				Heroku database."
					     />
					    <ExperiencesItem
					     	heading = "Developer"
					     	company = "ProToGo Technologies Inc."
					     	image = {ProToGo}
					     	url = 'https://www.protogo.co/'
					     	desp = "I worked on building the first version of ProToGo’s web application. 
					     			Collaborating with other dev team members, we implemented this application 
					     			using HTML, CSS, Vue.js and Firebase. My role is using Vue.js to route the 
					     			web app and connect the front-end to reflect and store changes into our 
					     			back-end Firebase."
					    />
				    </div>
				    <div>
					    <ExperiencesItem
					     	heading = "Technical Project Coordinator"
					     	company = "SAP SE"
					     	image = {SAP}
					     	url = 'https://www.sap.com/'
					     	desp = "As a technical project coordinator intern at SAP, I helped senior management 
					     			make data driven decisions by creating data dashboards using SAP Analytics Cloud. 
					     			In addition, I coordinated several projects such as the customer adoption program 
					     			and the hiring & onboarding project, which required me to communicate with different 
					     			stakeholders, prioritize multiple tasks and manage my time effectively. Lastly, I worked 
					     			with other developers to create front-end React components and connected them to the backend 
					     			MongoDB for a web app used to conduct internal training."
					    />
				    	<ExperiencesItem
				     		heading = "Marketing Director & Team Lead"
				     		company = "UBC BizTech"
				     		image = {BizTech}
				     		url = 'https://www.ubcbiztech.com/'
				     		desp = "During my time as a team lead and marketing director for UBC BizTech, I boosted our event 
				     				turnout rates by 10% through implementing a new marketing strategy. This strategy was 
				     				created by analysing previous years’ event data and identifying the trends and opportunities. 
				     				Additionally, I lead a team of 5 to plan, organize, and run several successful BizTech 
				     				events throughout the year. "
				     	/>
				    </div>
		        	</SwipeableViews>
			    </div>
			</Styles>
			</div>
		);
	}
}