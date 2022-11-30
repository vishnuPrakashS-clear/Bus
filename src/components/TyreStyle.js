import { React } from 'react';

const TyreStyle = ({ size, left, top, style }) =>
	<div
		style={ {
			position: 'absolute',
			width: `${ size }px`,
			height: `${ size }px`,
			left: `${ left }px`,
			top: `${ top }px`,
		} }
		className={ style }
	/>;

export default TyreStyle;
