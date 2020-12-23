import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`

	div {
		width: 100%; 
		height: 700px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
	} 
`;

export const NotFound = () => (
	<Styles>
		<div>
			<h1> Page Not Found </h1>
		</div>
	</Styles>
)
