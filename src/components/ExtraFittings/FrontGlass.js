import { React } from 'react';

const FrontGlass = (context) => {
	const { dimensions: { frontGlass: { top, left,
		width, height, borderRadius }}} = context;

	return (
		<div
			className="frontGlass"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
				borderTopLeftRadius: `${ borderRadius.topLeft }px`,
				borderTopRightRadius: `${ borderRadius.topRight }px`,
				borderBottomLeftRadius: `${ borderRadius.bottomLeft }px`,
				borderBottomRightRadius: `${ borderRadius. bottomRight }px`,
			} }
		/>
	);
};

export default FrontGlass;
