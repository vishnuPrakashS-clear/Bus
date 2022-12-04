import { React } from 'react';

const MainDoor = ({ config }) => {
	const { dimension: { mainDoor: { top, left,
		width, height }}} = config;

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
