import { React } from 'react';

const LuggageDoor = (context) => {
	const { dimensions: { luggageDoor: { top, left,
		width, height, borderRadius, border }}} = context;

	return (
		<div
			className="luggageDoor"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
				borderRadius: `${ borderRadius }px`,
				border: `${ border }px solid black`,
			} }
		/>
	);
};

export default LuggageDoor;
