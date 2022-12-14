import { React } from 'react';

const Square = ({ data }) =>
	<div
		style={ {
			position: 'absolute',
			width: `${ data.width }px`,
			height: `${ data.height }px`,
			left: `${ data.left }px`,
			top: `${ data.top }px`,
			backgroundImage: `url(${ process.env.PUBLIC_URL + data.backgroundImage })`,
		} }
		className="window"
	/>;

export default Square;
