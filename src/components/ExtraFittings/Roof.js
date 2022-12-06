import { React } from 'react';

const Roof = (context) => {
	const { dimensions: { roof: { top, left, width, height,
		borderRadius, border }}} = context;

	return (
		<div
			className="roof"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
				borderTopLeftRadius: `${ borderRadius.topLeft }px`,
				borderTopRightRadius: `${ borderRadius.topRight }px`,
				borderBottomLeftRadius: `${ borderRadius.bottomLeft }px`,
				borderBottomRightRadius: `${ borderRadius.bottomRight }px`,
				border: `${ border }px solid black`,
			} }
		/>
	);
};

export default Roof;
