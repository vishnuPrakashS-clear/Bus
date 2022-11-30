import { React } from 'react';

const WindowStyle = ({ size, left, top }) =>
	<div
		style={ {
			position: 'absolute',
			width: `${ size }px`,
			height: `${ size }px`,
			left: `${ left }px`,
			top: `${ top }px`,
		} }
		className="window"
	/>;

export default WindowStyle;
