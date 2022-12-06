import { React } from 'react';

const Circle = ({ left, top, height, width, borderRadius, border, style }) =>
	<div
		style={ {
			left: `${ left }px`,
			top: `${ top }px`,
			height: `${ height }px`,
			width: `${ width }px`,
			borderRadius: `${ borderRadius }px`,
			border: border,
		} }
		className={ style }
	/>;

export default Circle;
