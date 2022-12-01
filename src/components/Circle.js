import { React } from 'react';

const Circle = ({ left, top, style }) =>
	<div
		style={ {
			left: `${ left }px`,
			top: `${ top }px`,
		} }
		className={ style }
	/>;

export default Circle;
