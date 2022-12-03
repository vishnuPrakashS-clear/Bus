import { React } from 'react';

const LuggageDoor = ({ dimension }) => {
	const { luggageDoor: { top, left,
		width, height }} = dimension;

	return (
		<div
			className="luggageDoor"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
			} }
		/>
	);
};

export default LuggageDoor;
