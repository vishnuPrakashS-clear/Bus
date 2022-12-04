import { React } from 'react';

const Circle = ({ left, top, height, width, style }) =>
	<div
		style={ {
			left: `${ left }px`,
			top: `${ top }px`,
			height: `${ height }px`,
			width: `${ width }px`,
		} }
		className={ style }
	/>;

export default Circle;
