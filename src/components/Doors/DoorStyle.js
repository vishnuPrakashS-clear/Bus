import { React } from 'react';

const DoorStyle = ({ data }) =>
	<div
		style={ {
			left: `${ data.left }px`,
			top: `${ data.top }px`,
			height: `${ data.height }px`,
			width: `${ data.width }px`,
			borderRadius: `${ data.borderRadius }px`,
			position: 'absolute',
		} }
		className="doorStyle"
	/>;

export default DoorStyle;
