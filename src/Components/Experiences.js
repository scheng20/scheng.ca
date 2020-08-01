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
				     		desp = "While working as a summer intern for MathPickle, I renovated the company website and added several 
				     				new features including a new landing page, mailing list integration (through MailChimp) and SEO management. 
				     				Furthermore, I worked with other interns to create marketing videos, build a press kit, and manage social 
				     				media accounts. MathPickle is a Calgary based startup supported by the American Institute of Mathematics 
				     				that provides free online resources of original mathematical puzzles, games and unsolved problems for 
				     				K-12 teachers."
				     	/>
				     	<ExperiencesItem
				     		heading = "SHAD Fellow"
				     		company = "SHAD"
				     		image = {SHAD}
				     		url = 'https://www.shad.ca/'
				     		desp = "In 2016, I was accepted into SHAD, one of Canada’s most prestigious summer programs for high school students. 
				     				During the program, I attended lectures focusing on STEM (science, technology, engineering, mathematics) 
				     				and entrepreneurship topics at the University of Western Ontario. Additionally, I competed in the 2016 
				     				SHAD-John Dobson Entrepreneurship Cup, where I worked as a marketing director for HexaGro, a venture that 
				     				explored the potential of innovative greenhouse technologies for eradicating food insecurity. 
				     				HexaGro ended up winning the “National Champion in Marketing” award at the Canada-wide competition. "
				     	/>
				    </div>
				    <div>
				    	<ExperiencesItem
				     		heading = "President"
				     		company = "Fuego, A Junior Achievement Company"
				     		url = 'https://fuegojasa.wixsite.com/fuegomugs'
				     		image = {Fuego}
				     		desp = "As the president of Fuego – a Junior Achievement Company – I oversaw all company sectors including: 
				     				finance, marketing, HR. operations, and IT. Furthermore, I chaired meetings and directed overall 
				     				company vision and strategy. Our company specialized in designing, producing, and selling color-changing 
				     				mugs. Junior Achievement is a global non-profit youth organization that helps high school students 
				     				build their own businesses."
				     	/>
				     	<ExperiencesItem
				     		heading = "Participant"
				     		company = "Technovation Challenge"
				     		url = 'https://technovationchallenge.org/'
				     		image = {Technovation}
				     		desp = "As a participant of the Technovation Challenge 2017, I worked with my team and industry mentors to 
				     				develop an app (DecidED) and startup (THinc) that matches high school students to post-secondary 
				     				institutions and scholarships based on their interests, academics, and other profile information. 
				     				During this 12 week challenge, I worked on coding our mobile application using Thunckable and MIT 
				     				App Inventor, conducted online market research, and wrote a full business plan for our venture."
				     	/>
				    </div>
				    <div>
				    	<ExperiencesItem
				     		heading = "Co-founder and Web Designer"
				     		company = "ITReliable.com"
				     		image = {ITReliable}
				     		url = 'https://www.itreliable.com/wp/'
				     		desp = "From 2016-2018, I ran a small Calgary-based IT services business: ITReliable. 
				     				As the web designer, I designed, built and managed websites using WordPress, 
				     				phpMyAdmin, and cPanel. I have created websites for all kinds of clients including 
				     				renovators, restaurant owners, and accountants. In addition, I provided technical 
				     				support and customer service for our clients. "
				     	/>
				     	<ExperiencesItem
				     		heading = "Co-founder and President "
				     		company = "Sir Winston Churchill LaunchX Club"
				     		image = {SWCLaunchX}
				     		url = 'https://launchx.com/'
				     		desp = "Working with a friend and fellow student, we brought the international LaunchX program to my high school 
				     				(Sir Winston Churchill Highschool). As the president of the club, I organized club meetings, taught 
				     				entrepreneurship lessons provided by LaunchX, and guided our club members throughout their startup journey. 
				     				Originally founded at MIT, the LaunchX program aims to empower high school students to build a viable 
				     				startup by offering lessons, materials, and guidance for student companies."
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
				     		heading = "Marketing Director & Team Lead"
				     		company = "UBC BizTech"
				     		image = {BizTech}
				     		url = 'https://www.ubcbiztech.com/'
				     		desp = "During my time as a team lead and marketing director for UBC BizTech, I boosted our event turnout rates 
				     				by 10% through implementing a new marketing strategy. This strategy was created by analyzing previous 
				     				years’ event marketing data and identifying the trends and opportunities. Additionally, I lead a 
				     				team of 5 to plan, organize, and run 14 successful events for 281 club members throughout the school year. "
				     	/>
					    <ExperiencesItem
					     	heading = "Developer"
					     	company = "ProToGo Technologies Inc."
					     	image = {ProToGo}
					     	url = 'https://www.protogo.co/'
					     	desp = "As one of the developers for ProToGo, a student-lead start up aimed at transforming the construction industry, 
					     			I worked on building the first version of ProToGo’s web application. I focused on building front-end pages 
					     			using Vue.js and connecting the Vue components to our back-end Firebase to store and reflect data. "
					    />
				    </div>
				    <div>
					    <ExperiencesItem
					     	heading = "Technical Project Coordinator"
					     	company = "SAP SE"
					     	image = {SAP}
					     	url = 'https://www.sap.com/'
					     	desp = "As a technical project coordinator intern at SAP, I launched an internal training web-app used across SAP Canada 
					     			by joining a development team to build front-end React components and implement back-end MongoDB endpoints. 
					     			Additionally, I helped senior management make data driven decisions by creating multiple BI dashboards using 
					     			SAP Analytics Cloud and SAP Predictive Analytics. Furthermore, I ensured the success of our customer adoption 
					     			program by creating adoption benchmarks and a customer adoption maturity model validated by stakeholders. 
					     			Lastly, I	Improved the onboarding experience satisfaction for 52 new hires by 17% through tackling COVID-19 
					     			challenges and re-organizing the onboarding event with a new virtual friendly event schedule. "
					    />
					    <ExperiencesItem
				     		heading = "Web Developer"
				     		company = "UBC Table Tennis Club"
				     		image = {UBCTTC}
				     		url = 'http://www.ubctabletennisclub.org/'
				     		desp = "Working within a team of developers, I am responsible for leading front-end development and creating several web pages 
				     				using Ruby on Rails, JavaScript, HTML, CSS and Bootstrap. In addition, I help other developers by assisting 
				     				the back-end configuration of Heroku and PostgreSQL database, and troubleshooting any environment setup and 
				     				front-end development questions.  "
					     />
				    </div>
		        	</SwipeableViews>
			    </div>
			</Styles>
			</div>
		);
	}
}