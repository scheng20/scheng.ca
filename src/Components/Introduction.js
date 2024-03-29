import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Emoji from './Emoji.js';

const Styles = styled.div`

	h1 {
		color: #e86100;
		font-weight: bold;
	}

	p {
		font-size: 1.2rem;
	}

	a {
		--mainColor: #fcd274;

	  	background:
	     linear-gradient(
	       to bottom, var(--mainColor) 0%,
	       var(--mainColor) 100%
	     );

		background-position: 0 100%;
	    background-repeat: repeat-x;
	    background-size: 4px 4px;

	  	color: #000;
	  	text-decoration: none;
	  	transition: background-size .2s;
	}

	a:hover {
	  background-size: 4px 50px;
	}

	img {
		display:block;
    	margin:auto;
    	width: 100%;
  		max-width: 330px;
 		height: auto;
	}

	.col {
		margin-top: 2rem;
    	margin-bottom: 2rem;
	}

	@media (max-width: 600px) {
		.custom {
			font-size: 2.2rem;
		}
	}
`;

export default function Introduction() {

	return (
		<div>
			<Styles>
                <Row className="justify-content-center">
                  <Col xl = {4} className="align-self-center" > 
                    <Image src={require("../Assets/Images/intro.jpg")} roundedCircle />
                  </Col>
                  <Col className="align-self-center">
                    <h1 className = "custom"> Nice to meet you! </h1>
					<p>
					My name is Sheena and I’m a fourth year student studying <a href="https://mybcom.sauder.ubc.ca/courses-money-enrolment/program-requirements/combined-major-in%C2%A0business-and-computer-science" target = "_blank" rel="noopener noreferrer">business and computer science (BUCS)</a> at 
					the University of British Columbia. I am passionate about both <a href="https://github.com/scheng20" target = "_blank" rel="noopener noreferrer"> software development </a> and <a href="https://www.linkedin.com/in/sheena-cheng/" target = "_blank" rel="noopener noreferrer"> entrepreneurship </a>. 
					I enjoy building things that will make people’s lives easier, and enlarging that impact through the power of business. </p>

					<p> In my spare time, I like to play video games <Emoji symbol="🎮"/>, hike in nature <Emoji symbol="🌲"/>, workout <Emoji symbol="🏋"/>, play table tennis <Emoji symbol="🏓"/>, and jam on the guitar <Emoji symbol="🎸"/>. 
					I'm also a huge foodie, so I love exploring new cusines and tasting all sorts of exotic foods <Emoji symbol="😋"/>. </p>

					<p> On this site you can find some of my past <a href="#experience">experiences</a>, <a href="#projects">projects</a>, and <a href="#skills">skills</a>. </p>
                  </Col>
                </Row>
			</Styles>
		</div>
	);
}