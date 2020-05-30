import React from 'react'
import Component from 'react'
import styled from 'styled-components';
import HorizontalTimeline from './Timeline/Components/HorizontalTimeline';
import SwipeableViews from 'react-swipeable-views';
import ExperiencesItem from "./ExperiencesItem.js";
import biztech from "../Assets/biztech.png";
import shad from "../Assets/shad.png";
import math from "../Assets/math.png";

const Styles = styled.div`
	h1 {
		margin-bottom: 2rem;
		color: #e86100;
		font-size: 2.2rem;
	}
`;

const VALUES = ['2016/01','2017/01','2018/01','2019/01', '2020/01'];

export default class Experiences extends React.Component {

	state = { value: 4, previous: 0 };

	render() {
		return (
			<Styles>
			<div>
				
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
		            resistance>
		            <div>
				     	<ExperiencesItem
				     		heading = "SHAD Fellow"
				     		company = "SHAD"
				     		image = {shad}
				     		url = 'https://www.shad.ca/'
				     		desp = "In 2016, I attended the University of Western Ontario as a delegate for SHAD, one of Canada’s most prestigious summer programs for high school students, with a focus on STEM (science, technology, engineering, mathematics) and entrepreneurship. The SHAD Alumni Network includes more than 15,500 of the best and brightest from all across Canada, including 30 Rhodes Scholars, 78 Loran Scholars, Top 40 under 40 & Top 20 under 20 recipients, and more."
				     	/>
				     	<ExperiencesItem
				     		heading = "Summer Intern"
				     		company = "MathPickle"
				     		url = 'https://mathpickle.com/'
				     		image = {math}
				     		desp = "During the summer of 2016, I was hired as a summer intern at MathPickle. During my internship, I renovated the MathPickle website and added several new features including a new landing page, mailing list integration (through MailChimp) and SEO management. Furthermore, I worked with other interns to create marketing videos, build a press kit, and manage social media accounts. MathPickle is a Calgary based startup that provides free online resources of original mathematical puzzles, games and unsolved problems for K-12 teachers. It is supported by the American Institute of Mathematics."
				     	/>
				    </div>
				    <div>
				    	
				    </div>
				    <div>
				    	<ExperiencesItem
				     		heading = "Marketing Director & Team Lead"
				     		company = "UBC BizTech"
				     		image = {biztech}
				     		url = 'https://www.ubcbiztech.com/'
				     		desp = "As a previous First Year Representative, and now a Marketing Director at UBC Biztech, 
	                    			I am experienced with creating marketing strategies, launching online campaigns 
	                    			and promoting club events through social media. Some of the online tools and 
	                    			platforms that I am familiar with include Facebook, Instagram, and MailChimp. 
	                    			In addition, I lead a team of 4 to organize, plan and run several BizTech events 
	                    			throughout the year."
				     	/>
				    </div>
		          </SwipeableViews>
			    </div>
			</div>
			</Styles>
		);
	}
}

/*
export default function Experiences() {

	
}*/