import { React } from 'react';

const DoorStyle = ({ height, width, left, top }) =>
	<div
		style={ {
			position: 'absolute',
			width: `${ width }px`,
			height: `${ height }px`,
			left: `${ left }px`,
			top: `${ top }px`,
		} }
		className="doorStyle"
	/>;

export default DoorStyle;
