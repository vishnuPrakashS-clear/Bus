import { React } from 'react';

const MainDoor = ({ dimension }) => {
	const { mainDoor: { top, left,
		width, height }} = dimension;

	return (
		<div
			className="mainDoor"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
			} }
		/>
	);
};

export default MainDoor;
