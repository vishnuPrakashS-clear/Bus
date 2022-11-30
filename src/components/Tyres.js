import { React } from 'react';

const Tyres = ({ size, left, top }) =>
	<div
		style={ {
			position: 'absolute',
			width: `${ size }px`,
			height: `${ size }px`,
			left: `${ left }px`,
			top: `${ top }px`,
		} }
		className="tyre"
	/>;

export default Tyres;
