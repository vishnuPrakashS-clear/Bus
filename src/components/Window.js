import { React } from 'react';

const Window = ({ size, left, top, width }) =>
	<div
		style={ {
			position: 'absolute',
			width: `${ width }px`,
			height: `${ size }px`,
			left: `${ left }px`,
			top: `${ top }px`,
		} }
		className="window"
	/>;

export default Window;
