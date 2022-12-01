import { range } from '@laufire/utils/collection';
import { React } from 'react';
import DoorStyle from './DoorStyle';

const doorCount = 2;
const multiplier = 85;
const margin = 510;

const innerDoors = range(0, doorCount).map((number) => ({
	left: (number * multiplier) + margin,
	height: 315,
	width: 78,
	top: 285,
}));

const InnerDoors = () =>
	innerDoors.map((InnerDoor, index) =>
		<DoorStyle
			key={ index }
			{ ...InnerDoor }
		/>);

export default InnerDoors;
