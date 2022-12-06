import { React } from 'react';

const LuggageDoorHandle = (context) => {
	const { dimensions: { luggageDoorHandle: { top, left,
		width, height, border }}} = context;

	return (
		<div
			className="luggageDoorHandle"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
				border: `${ border }px solid black`,
			} }
		/>
	);
};

export default LuggageDoorHandle;
