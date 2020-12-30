import React from 'react'
import styled from 'styled-components';
import HorizontalTimeline from './Timeline/Components/HorizontalTimeline';
import SwipeableViews from 'react-swipeable-views';
import ExperiencesItem from "./ExperiencesItem.js";
import ExperienceContents from '../Assets/Content/Experiences.json'

const Styles = styled.div`
	h1 {
		margin-bottom: 2rem;
		color: #e86100;
		font-size: 2.2rem;
	}
`;

// Chunk the array of experience objects into groups of 2
const chunkArray = (arr, chunkSize) => {
  let chunked = [];
  for (let i = 0, j = arr.length; i < j; i += chunkSize) {
    chunked.push(arr.slice(i, i + chunkSize));
  }
  return chunked;
}

const VALUES = ['2016/01/01','2017/01/01','2018/01/01','2019/01/01', '2020/01/01'];
const chunkedArray = chunkArray(ExperienceContents, 2);

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

			           	{chunkedArray.map(group => ( 
							<div >
								{group.map(experience => (
									<ExperiencesItem
										heading = {experience.heading}
										company = {experience.company}
										desp = {experience.description}
										image = {experience.image}
										url = {experience.url}
									/>
								))}
							</div>
						))}
						
		        	</SwipeableViews>
			    </div>
			</Styles>
			</div>
		);
	}
}