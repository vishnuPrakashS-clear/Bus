import { React } from 'react';

const LuggageDoorFrame = ({ dimension }) => {
	const { luggageDoorFrame: { top, left,
		width, height }} = dimension;

	return (
		<div
			className="luggageDoorFrame"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
			} }
		/>
	);
};

export default LuggageDoorFrame;
