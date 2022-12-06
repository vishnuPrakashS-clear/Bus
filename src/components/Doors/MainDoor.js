import { React } from 'react';

const MainDoor = (context) => {
	const { dimensions: { outerDoor: { top, left,
		width, height, borderRadius }}} = context;

	return (
		<div
			className="mainDoor"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
				borderRadius: `${ borderRadius }px`,
			} }
		/>
	);
};

export default MainDoor;
