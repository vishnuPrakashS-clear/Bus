import { React } from 'react';

const LuggageDoorHandle = ({ dimension }) => {
	const { luggageDoorHandle: { top, left,
		width, height }} = dimension;

	return (
		<div
			className="luggageDoorHandle"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
			} }
		/>
	);
};

export default LuggageDoorHandle;
