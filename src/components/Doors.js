import { React } from 'react';

const doorComponents = [
	'mainDoor',
	'leftGlass',
	'rightGlass',
	'luggageDoorFrame',
	'luggageDoor',
];

const Doors = () =>
	doorComponents.map((door, key) =>
		<div key={ key } className={ `${ door }` }/>);

export default Doors;
