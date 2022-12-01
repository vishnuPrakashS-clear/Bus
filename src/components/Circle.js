import { React } from 'react';

const Circle = ({ left, style }) =>
	<div
		style={ {
			left: `${ left }px`,
		} }
		className={ style }
	/>;

export default Circle;
